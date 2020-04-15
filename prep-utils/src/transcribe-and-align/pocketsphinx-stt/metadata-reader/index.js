/**
 * @module video_metadata_reader
 * @description Reads video metadata needed for EDL. reel, timecode, fps. If those fields are not present in the metadata associated with the media file the attributes in the resulting json is replaced with "NA".
 * @example <caption>Example usage</caption>
const readVideoMetadataForEDL = require('./index.js').readVideoMetadataForEDL;
const readMetadata = require('./index.js').readMetadata;

const res = await readVideoMetadataForEDL(videoFile);

  * @example <caption>Example output from `readVideoMetadataForEDL`</caption>
{ 
   filePathName: '/some_file_path/Bowman.mov',
  date: '2016-02-18 16:38:20',
  reelName: 'time',
  timecode: '00:01:18:56',
  r_frame_rate: ' 30000/1001',
  fps : 29.97,
  duration: 2287.285  // in seconds 
}
 * @requires fluent-ffmpeg
 * @requires ffprobe-static-electron'
 * @requires path
 */

const path = require('path');
const ffmpeg = require('fluent-ffmpeg');

const ffprobeBinPath = require('ffprobe-static-electron').path;
ffmpeg.setFfprobePath(ffprobeBinPath);

/*
 * @function readMetadata.
 * Reads all metadata available from video and audio file using ffprobe.
 * @param {string} file - video or audio file to read metadata from.
 * @returns {} return when ffprobe done reading. It returns an json object.
 */
function readMetadata(file) {
    return new Promise((resolve, reject) => {
        ffmpeg.ffprobe(file, function(err, metadata) {
            if (err) {
                reject(err)
            }
            resolve(metadata);
        })
    })
}

/*
 * @function readVideoMetadataForEDL
 * Reads metadata available from video and audio file using ffprobe to return the EDL are.
 * @param {string} file - video or audio file to read metadata from.
 * @returns {} return when ffprobe done reading. It returns an object containing metadata info needed for EDL(Edit Decision List): filePathName,fileName,date, reelName, timecode, fps, duration,
 */
function readVideoMetadataForEDL(file) {
    const video = {};

    return new Promise((resolve, reject) => {
        //running ffprobe   
        ffmpeg.ffprobe(file, function(err, metadata) {
            if (err) {
                reject(err);
            }
            // metadata is an object that contains all of the metadata available for the media file. Attributes especially nested onece may or may not be present costently across media files. Hence the following multiple boolean checks before reading attributes.
            //eg if format does not exist ad an attribtue then filename attribute will not be found under format.

            //reading file name 
            if (metadata !== undefined && metadata.format !== undefined && metadata.format.filename !== undefined) {
                video.filePathName = metadata.format.filename;
                const filePathO = path.parse(video.filePathName);
                video.fileName = filePathO.base;
            } else {
                video.filePathName = "NA";
                video.fileName = "NA";
            }

            // reading date
            if (metadata !== undefined && metadata.streams[0] !== undefined && metadata.streams[0].tags !== undefined && metadata.streams[0].tags.creation_time !== undefined) {
                video.date = metadata.streams[0].tags.creation_time;
            } else {
                video.date = "NA";
            }

            // reading reel 
            if (metadata !== undefined && metadata.streams[2] !== undefined && metadata.streams[2].tags !== undefined && metadata.streams[2].tags.reel_name !== undefined) {
                video.reelName = metadata.streams[2].tags.reel_name;
            } else {
                video.reelName = "NA";
            }

            // reading timecode eg "00:00:00:00"
            if (metadata !== undefined && metadata.format !== undefined && metadata.format.tags !== undefined && metadata.format.tags.timecode !== undefined) {
                video.timecode = metadata.format.tags.timecode;
            } else {
                video.timecode = "NA";
            }

            // reading fps eg "1/25"
            if (metadata !== undefined && metadata.streams[0] !== undefined && metadata.streams[0].r_frame_rate !== undefined) {
                //https://www.ffmpeg.org/ffmpeg-all.html#Video-rate
                // frame rate eg `30000/1001` is 30000/1001 = 29.97 => Ntsc
                video.r_frame_rate = metadata.streams[0].r_frame_rate;
                //converting to frames per seconds
                //TODO: find out why the r_frame_rate would ever be `0/0`. encountered that in an mp4. 0/0 = NaN. which then messes up the EDL.
                if (video.r_frame_rate != "0/0") {
                    const firstNumber = parseInt(video.r_frame_rate.split("/")[0]);
                    const lastNumber = parseInt(video.r_frame_rate.split("/")[1]);
                    //covering other edge cases where it could be equal to NaN
                    if ((firstNumber / lastNumber) !== NaN) {
                        video.fps = parseFloat(firstNumber / lastNumber).toFixed(2);
                    } else {
                        video.fps = "NA";
                    }

                } else {
                    //otherwise fps not available
                    video.fps = "NA";
                }


            } else {
                video.r_frame_rate = "NA";
                video.fps = "NA";
            }


            // reading duration eg in secods
            if (metadata !== undefined && metadata.streams[0] !== undefined && metadata.streams[0].duration !== undefined) {
                video.duration = metadata.streams[0].duration;
            } else {
                video.duration = "NA";
            }
            //returning metadata EDL info 
            // if (callback) { callback(video) } else { return video };
            resolve(video);
        })
    })
}


module.exports.readVideoMetadataForEDL = readVideoMetadataForEDL;
module.exports.readMetadata = readMetadata;
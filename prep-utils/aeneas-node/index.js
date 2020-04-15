"use strict";
const fs = require('fs');
const runAeneasComand = require('./aeneas-wrapper.js');
const parseAeneas = require('./parse-aeneas/index.js');

function runAeneas({text,captionFileFormat, sourceVideoPathSample}){

	fs.writeFileSync(__dirname+'/segmented.txt', text.split(' ').join('\n'))
	const segmentedTextInputSample = __dirname+'/segmented.txt';
	
	var captionFileFormat = "json";
	var outputCaptionFileSampleOutputTmp = __dirname+"/example"+"."+captionFileFormat ;
	
	var config={
		language: 'en', 
		captionFileFormat : captionFileFormat,//'json',
		audio_file_head_length : 0,//eg 12.000
		audio_file_tail_length : 0, //16.000
		 mediaFile : sourceVideoPathSample,
		 segmentedTextInput : segmentedTextInputSample,
		 outputCaptionFile: outputCaptionFileSampleOutputTmp
	};
	
	return new Promise((resolve, reject)=>{
		return runAeneasComand(config).then((srtFilePath)=>{
			const result = JSON.parse(fs.readFileSync(srtFilePath,'utf8').toString('utf8'));	
			// console.log(result);
			console.log('srtFilePath',srtFilePath);
			const parsedJson = parseAeneas(result)
			resolve(parsedJson)
		}).catch((e)=>{
			reject(e)
		})
	})

	
}

module.exports = runAeneas;
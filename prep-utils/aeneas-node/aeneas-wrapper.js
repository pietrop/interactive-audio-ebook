"use strict";
const path = require('path');
const exec = require('child_process').exec;
const fs = require('fs');

var appPath = './examples';

// var aeneasPath = "/usr/local/bin/aeneas_execute_task";
var aeneasPath = "aeneas_execute_task";
var ffmpegPath = "/usr/local/bin/ffmpeg";
var ffprobePath = "/usr/local/bin/ffprobe";
var espeakPath = "/usr/local/bin/espeak";
var envVar =   {'ffmpeg': ffmpegPath , 'ffprobe': ffprobePath, 'espeak':espeakPath, 'aeneas_execute_task': aeneasPath, 'sysctl': '/sbin/sysctl'};


function runAeneasComand(config){
	// let aeneasBinaryPath = "/usr/local/bin/aeneas_execute_task";
	let aeneasBinaryPath = "aeneas_execute_task";
	if(config.optionalPathToAeneasBinary){
		aeneasBinaryPath = config.optionalPathToAeneasBinary;
	}
	///usr/local/bin/aeneas_execute_task///usr/local/bin/aeneas_execute_task  //python -m aeneas.tools.execute_task 
	var aeneasComandString = `${aeneasBinaryPath} "${config.mediaFile}" "${config.segmentedTextInput}" "task_language=${config.language}|os_task_file_format=${config.captionFileFormat}|is_text_type=plain|is_audio_file_head_length=${config.audio_file_head_length}|is_audio_file_tail_length=${config.audio_file_tail_length}|task_adjust_boundary_nonspeech_min=1.000|task_adjust_boundary_nonspeech_string=REMOVE|task_adjust_boundary_algorithm=percent|task_adjust_boundary_percent_value=75|is_text_file_ignore_regex=[*]" ${config.outputCaptionFile} --presets-word`;
	console.log("-------aeneasComandString---------");
	console.log(aeneasComandString);
	// console.log("----------------");
	var options ={env: envVar, cwd: appPath, PYTHONIOENCODING: 'UTF-8'};

	return new Promise((resolve, reject)=>{

		exec(aeneasComandString, (error, stdout, stderr) =>{
			console.log('stdout runAeneasComand: ' + stdout);
			if(stderr){
				console.log('stderr runAeneasComand: ' + stderr);
			}	
			// if(cb){cb(config.outputCaptionFile)};
			resolve(config.outputCaptionFile)
			if (error !== null) {

				console.log('exec error: ' + error);
				reject(error)
			}
		});
	})
}


module.exports = runAeneasComand;
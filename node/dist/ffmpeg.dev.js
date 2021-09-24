"use strict";

var ffmpeg = require('fluent-ffmpeg');

var fs = require('fs');

ffmpeg('/Users/yanglei/study/笔记/node/h265.h265').videoCodec('libx264').output('outputfile.mp4').on('end', function (data) {
  console.log('Finished processing', data);
}).run();
var ffmpeg = require('fluent-ffmpeg');
var fs = require('fs');

ffmpeg(fs.createReadStream('h265.hevc')).videoCodec('libx264').save('265.mp4');


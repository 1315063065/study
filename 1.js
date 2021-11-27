const buf = Buffer.from([0x01, 0x00, 0x01, 0x01]);

// Using Buffer.readUInt16LE() method
console.log(buf.readUInt16LE(0));
console.log(buf.readUInt16LE(1));
// console.log(buf.readUInt16LE(2));
// console.log(buf.readUInt16LE(3));





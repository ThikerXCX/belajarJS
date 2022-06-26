const fs = require(`fs`);
const path = require("path");

const readableStream = fs.createReadStream('./input.txt',{
    highWaterMark : 10
});
const writableStream = fs.createWriteStream('output.txt')

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`)
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
/*
readableStream.on('end', () => {
    writableStream.write('Done');
});*/ // kalau mau nulis sesuatu diujung kalimat

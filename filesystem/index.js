const fs = require(`fs`);
const path = require("path");

const fileReadCallback = (error,data)=>{
    error ? console.log("gagal") : console.log(data);
}

fs.readFile(path.resolve(__dirname, 'notes.txt'),'utf-8',fileReadCallback);

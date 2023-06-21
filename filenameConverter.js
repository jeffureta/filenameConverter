const fs = require('fs');
const path = require('path');

function formatFileName(fileName) {
  let formattedName = '';
  for (let i = 0; i < fileName.length; i++) {
    const char = fileName[i];
    if (/[a-zA-Z0-9-]/.test(char)) {
      formattedName += char.toLowerCase();
    } else {
      formattedName += '-';
    }
  }
  return formattedName;
}

// Accept file name as command line argument
const fileName = process.argv[2];

if (!fileName) {
  console.log('Please provide a file name as an argument.');
  process.exit(1);
}

const formattedFileName = formatFileName(fileName);
const currentDirectory = process.cwd();
const filePath = path.join(currentDirectory, fileName);
const newFilePath = path.join(currentDirectory, formattedFileName);

fs.copyFileSync(filePath, newFilePath);
fs.unlinkSync(filePath);

console.log('Formatted file name:', formattedFileName);
console.log('File renamed as:', formattedFileName);

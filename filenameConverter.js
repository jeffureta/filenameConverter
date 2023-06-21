const fs = require('fs');
const path = require('path');

function formatFileName(fileName) {
  // Convert to lowercase
  let formattedName = fileName.toLowerCase();

  // Replace underscores and spaces with hyphens
  formattedName = formattedName.replace(/[_\s]/g, '-');

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
const newFilePath = path.join(currentDirectory, formattedFileName);

fs.writeFileSync(newFilePath, '', 'utf8');
console.log('Formatted file name:', formattedFileName);
console.log('File saved as:', newFilePath);

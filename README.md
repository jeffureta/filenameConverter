# Filename Converter

The Filename Converter is a Node.js script that accepts a file name as input, converts it to lowercase, and replaces underscores and spaces with hyphens.

## Installation

1. Make sure you have Node.js installed on your machine. You can download it from the official Node.js website: [https://nodejs.org](https://nodejs.org).

2. Download or clone the repository containing the `filenameConverter.js` script.

3. Open a terminal or command prompt and navigate to the directory where you downloaded the `filenameConverter.js` file.

## Usage

To use the Filename Converter script, follow these steps:

1. Open a terminal or command prompt and navigate to the directory containing the `filenameConverter.js` script.

2. Run the following command to execute the script:

   ```
   node filenameConverter.js <inputFileName>
   ```

   Replace `<inputFileName>` with the actual name of the file you want to format.

3. The script will output the formatted file name, where it is converted to lowercase, and any underscores or spaces are replaced with hyphens.

4. The original file will be renamed with the formatted file name in the same directory. The contents of the file will remain intact.

## Example

Suppose you have a file named `My Document File.pdf` in the same directory as the `filenameConverter.js` script. To format and rename the file, run the following command:

```
node filenameConverter.js "My Document File.pdf"
```

The script will output:

```
Formatted file name: my-document-file.pdf
File renamed as: my-document-file.pdf
```

The original file `My Document File.pdf` will be renamed to `my-document-file.pdf` in the same directory, while retaining its contents.

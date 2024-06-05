const fs = require('fs');
const { markdownToHtml, markdownToAnsi } = require('./regexp');

const args = process.argv.slice(2);
const formatIndex = args.indexOf('--format');
const outputIndex = args.indexOf('--out');

const inputFilePath = outputIndex >= 0 ? args[0] : args[0];
const format = formatIndex >= 0 ? args[formatIndex + 1] : 'ansi';
const outputFilePath = outputIndex >= 0 ? args[outputIndex + 1] : null;

if (!inputFilePath) {
    console.error('Please provide an input markdown file.');
    process.exit(1);
}

const generateHtmlOutput = (data) => {
    return markdownToHtml(data.replace(/(^|\n)```([\s\S]*?)```(\n|$)/g, '$1<pre>$2</pre>$3'));
};

const generateAnsiOutput = (data) => {
    return markdownToAnsi(data.replace(/(^|\n)```([\s\S]*?)```(\n|$)/g, '$1\x1b[7m$2\x1b[0m$3'));
};

fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        process.exit(1);
    }

    let output;
    if (format === 'html') {
        output = generateHtmlOutput(data);
    } else {
        output = generateAnsiOutput(data);
    }

    if (outputFilePath) {
        fs.writeFile(outputFilePath, output, 'utf8', err => {
            if (err) {
                console.error('Error writing to output file:', err);
                process.exit(1);
            }
            console.log(`Output saved to ${outputFilePath}`);
        });
    } else {
        console.log(output);
    }
});
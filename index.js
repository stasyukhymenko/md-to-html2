const fs = require('fs');

function markdownToHtml(md) {
    //TODO
}

const args = process.argv.slice(2);

const outputIndex = args.indexOf('--out');

const inputFilePath = outputIndex >= 0 ? args[outputIndex + 1] : args[0];

if (!inputFilePath) {
    console.error('Please provide an input markdown file.');
    process.exit(1);
}
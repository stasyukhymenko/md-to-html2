const fs = require('fs');

function markdownToHtml(md) {
    md = md.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    md = md.replace(/_(.*?)_/g, '<i>$1</i>');
    md = md.replace(/`(.*?)`/g, '<tt>$1</tt>');
    md = md.replace(/```([\s\S]*?)```/g, '<pre>$1</pre>');
    md = md.split('\n\n').map(para => `<p>${para.replace(/\n/g, ' ')}</p>`).join('\n');
    return md;
}

function markdownToAnsi(md) {
    md = md.replace(/\*\*(.*?)\*\*/g, '\x1b[1m$1\x1b[0m');
    md = md.replace(/_(.*?)_/g, '\x1b[3m$1\x1b[0m');
    md = md.replace(/`(.*?)`/g, '\x1b[7m$1\x1b[0m');
    md = md.replace(/```([\s\S]*?)```/g, (match, p1) => `\x1b[7m${p1}\x1b[0m`);
    return md;
}

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

fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        process.exit(1);
    }

    const html = markdownToHtml(data.replace(/(^|\n)```([\s\S]*?)```(\n|$)/g, '$1<pre>$2</pre>$3'));

    if (outputIndex >= 0) {
        fs.writeFile('output.html', html, 'utf8', err => {
            if (err) {
                console.error('Error writing to output file:', err);
                process.exit(1);
            }
            console.log('HTML saved to output.html');
        });
    } else {
        console.log(html);
    }
});
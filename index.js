const fs = require('fs');

function markdownToHtml(md) {
    md = md.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    md = md.replace(/_(.*?)_/g, '<i>$1</i>');
    md = md.replace(/`(.*?)`/g, '<tt>$1</tt>');
    md = md.replace(/```([\s\S]*?)```/g, '<pre>$1</pre>');
    md = md.split('\n\n').map(para => `<p>${para.replace(/\n/g, ' ')}</p>`).join('\n');

    return md;
}

const args = process.argv.slice(2);

const outputIndex = args.indexOf('--out');

const inputFilePath = outputIndex >= 0 ? args[outputIndex + 1] : args[0];

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
        console.log(html);
    } else {
        fs.writeFile('output.html', html, 'utf8', err => {
            if (err) {
                console.error('Error writing to output file:', err);
                process.exit(1);
            }
            console.log('HTML saved to output.html');
        });
    }
});
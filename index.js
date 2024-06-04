const fs = require('fs');

function markdownToHtml(md) {
    md = md.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    md = md.replace(/_(.*?)_/g, '<i>$1</i>');
    md = md.replace(/`(.*?)`/g, '<tt>$1</tt>');
    md = md.replace(/```([\s\S]*?)```/g, '<pre>$1</pre>');
    md = md.split('\n\n').map(para => `<p>${para.replace(/\n/g, ' ')}</p>`).join('\n');

    return md;
}
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
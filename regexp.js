function markdownToHtml(md) {
    md = md.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    md = md.replace(/_(.*?)_/g, '<i>$1</i>');
    md = md.replace(/`(.*?)`/g, '<tt>$1</tt>');
    md = md.replace(/```([\s\S]*?)```/g, '<pre>$1</pre>');

    const paragraphs = md.split(/\n{2,}/);

    const formatted = paragraphs.map(para => {
        if (!para.startsWith('<pre>') && !para.endsWith('</pre>')) {
            return `<p>${para.replace(/\n/g, '')}</p>`;
        }
        return para;
    });

    return formatted.join('\n\n');
}

function markdownToAnsi(md) {
    md = md.replace(/\*\*(.*?)\*\*/g, '\x1b[1m$1\x1b[0m');
    md = md.replace(/_(.*?)_/g, '\x1b[3m$1\x1b[0m');
    md = md.replace(/`(.*?)`/g, '\x1b[7m$1\x1b[0m');
    md = md.replace(/```([\s\S]*?)```/g, (match, p1) => `\x1b[7m${p1}\x1b[0m`);
    return md;
}

const generateHtmlOutput = (data) => {
    const formatted = markdownToHtml(data.replace(/(^|\n)```([\s\S]*?)```(\n|$)/g, '$1<pre>$2</pre>$3'));
    return formatted.replace(/\n\s*\n/g, '\n');
};

const generateAnsiOutput = (data) => {
    return markdownToAnsi(data.replace(/(^|\n)```([\s\S]*?)```(\n|$)/g, '$1\x1b[7m$2\x1b[0m$3'));
};


module.exports = { markdownToHtml, markdownToAnsi, generateHtmlOutput, generateAnsiOutput };
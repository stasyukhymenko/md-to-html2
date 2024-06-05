const {generateHtmlOutput, generateAnsiOutput } = require('./regexp');

describe('markdownToHtml', () => {
    test('should convert bold syntax to HTML', () => {
        const input = '\n**bold**\n';
        const output = '<p><b>bold</b></p>';
        expect(generateHtmlOutput(input)).toBe(output);
    });

    test('should convert italic syntax to HTML', () => {
        const input = '\n_italic_\n';
        const output = '<p><i>italic</i></p>';
        expect(generateHtmlOutput(input)).toBe(output);
    });

    test('should convert inline code to HTML', () => {
        const input = '\n`code`\n';
        const output = '<p><tt>code</tt></p>';
        expect(generateHtmlOutput(input)).toBe(output);
    });

    test('should convert code block to HTML', () => {
        const input = '\n```\ncode block\n```\n';
        const output = '<p><pre>code block</pre></p>';
        expect(generateHtmlOutput(input)).toBe(output);
    });
});

describe('markdownToAnsi', () => {
    test('should convert bold syntax to ANSI', () => {
        const input = '**bold**';
        const output = '\x1b[1mbold\x1b[0m';
        expect(generateAnsiOutput(input)).toBe(output);
    });

    test('should convert italic syntax to ANSI', () => {
        const input = '_italic_';
        const output = '\x1b[3mitalic\x1b[0m';
        expect(generateAnsiOutput(input)).toBe(output);
    });

    test('should convert inline code to ANSI', () => {
        const input = '`code`';
        const output = '\x1b[7mcode\x1b[0m';
        expect(generateAnsiOutput(input)).toBe(output);
    });

    test('should convert code block to ANSI', () => {
        const input = '```\ncode block\n```';
        const output = '\x1b[7mcode block\x1b[0m';
        expect(generateAnsiOutput(input)).toBe(output);
    });
});

# Laboratory work №2 ‘MTRPZ’ Stas Yukhymenko IM-23

### Description of the application
This app converts Markdown syntax into corresponding HTML tags or ANSI escape codes. It recognizes bold, italic and monospaced text, and identifies paragraphs and reformatted sections of text, replacing them with the appropriate tags.
### Instructions on how to build a project
In order to use this application, you need to have Node.js version 20 or higher installed. To get started, you need to clone this repository using the command:

```
https://github.com/stasyukhymenko/md-to-html.git
```

### To start the parser, you need to:

In the terminal, write the command
```
node index.js <your_file.md>
```

If you need to write the converted md syntax to an html file, you need to specify the --out flag, as shown in the example below:

```
node index.js --out <your_file.md> <output.html> 
```

If you need to choose format, you need to specify the --format flag, as shown in the example below:

```
node index.js --out <your_file.md> <output.html> --format <html or ansi>
```

### Example:

```
їздили вчора на _екскурсію_ на хлібзавод.

Тепер я не їм хліб.

Сьогодні **були** на м’ясокомбінаті.

Тепер я не їм м’ясо.

Завтра `екскурсія` на лікеро-водочний.

.```
Я не їду.
.```
```

### Result:

format html:

```html
<p>їздили вчора на <i>екскурсію</i> на хлібзавод.</p>
<p>Тепер я не їм хліб.</p>
<p>Сьогодні <b>були</b> на м’ясокомбінаті.</p>
<p>Тепер я не їм м’ясо.</p>
<p>Завтра <tt>екскурсія</tt> на лікеро-водочний.</p>
<p><pre>
Я не їду.
</pre></p>
```

format ansi:

```html
їздили вчора на [3mекскурсію[0m на хлібзавод.

Тепер я не їм хліб.

Сьогодні [1mбули[0m на м’ясокомбінаті.

Тепер я не їм м’ясо.

Завтра [7mекскурсія[0m на лікеро-водочний.

[7m
Я не їду.
[0m
```

### Revert commit

link
# Laboratory work №1 ‘MTRPZ’ Stas Yukhymenko IM-23

### Description of the application
In this lab, I developed an application that identifies some markdown syntax in the text and replaces it with html tags. The application can detect bold, italic, monospaced text, identify paragraphs and preformatted text, and replace them with the appropriate tags.

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
node index.js --out <output.html> --out <your_file.md>
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

```html
<p>їздили вчора на <i>екскурсію</i> на хлібзавод.</p>
<p>Тепер я не їм хліб.</p>
<p>Сьогодні <b>були</b> на м’ясокомбінаті.</p>
<p>Тепер я не їм м’ясо.</p>
<p>Завтра <tt>екскурсія</tt> на лікеро-водочний.</p>
<p><pre> Я не їду. </pre></p>
```

### Revert commit

here will be link
123123123
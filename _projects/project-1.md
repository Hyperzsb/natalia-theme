---
name: Project 1
description: This is the Project 1 for testing. This is the description of the project.
logo: 
  src: /assets/images/project-1-logo.webp
  internal: true
repo: https://github.com/hyperzsb/natalia-theme
demo: https://github.com/hyperzsb/natalia-theme
tags: jekyll bootstrap
pinned: true
---

This is the Project 1 for testing. `Praesent` ac adipiscing ullamcorper semper ut amet ac risus. Lorem sapien ut odio 
odio nunc. Ac adipiscing nibh porttitor erat risus justo adipiscing adipiscing amet placerat accumsan. Vis. Faucibus 
odio magna tempus adipiscing a non. In mi primis arcu ut non accumsan vivamus ac blandit adipiscing adipiscing arcu 
metus praesent turpis eu ac lacinia nunc ac commodo gravida adipiscing eget accumsan ac nunc adipiscing adipiscing.

## Special Notes

Before going to demonstrate the Markdown elements supported, there are several tips you should know about using Natalia:

- Do not use H1 heading (`#`) in the main content, as there is already an H1 heading in the page, the title of the
  article. Multiple H1 headings will damage the consistency of the article.

## Markdown Elements Supported

The Markdown engine of the Natalia Theme supports several common Markdown elements, including:

- [Heading](#heading)
- [Emphasis](#emphasis)
- [Link](#link)
- [List](#list)
- [Blockquote](#blockquote)
- [Code](#code)
- [Table](#table)
- [Image](#image)
- [Horizontal Rule](#horizontal-rule)
- [Emoji](#emoji)
- [LaTeX](#latex)
- [Footnote](#footnote)

Examples as follows:

## Heading

Support 6 sizes of headings from H1 (`#`) to H6 (`######`).

### Examples

- H1 heading using `#`:

# H1 Heading

- H2 heading using `##`:

## H2 Heading

- H3 heading using `###`:

### H3 Heading

- H4 heading using `####`:

#### H4 Heading

- H5 heading using `#####`:

##### H5 Heading

- H6 heading using `######`:

###### H6 Heading

## Emphasis

Support both **bold text** (using either `****` or `____`) and *italic text* (using either `**` or `__`) formats.

Also support ~~strikethrough text~~ (using `~~~~`) format.

### Examples

- Bold text using `****`: **This is bold text.**
- Bold text using `____`: __This is bold text.__
- Italic text using `**`: *This is italic text.*
- Italic text using `__`: _This is italic text._
- Strikethrough text using `~~~~`: ~~This is strikethrough text.~~

## Link

Support [links](#Link) (using `[]()`) and [links with titles](#Link "Title") (using `[]( "title")`).

### Examples

- Link using `[]()`: [Link](#Link)
- Link with a title using `[]( "title")`: [Link with a title](#Link "Title")

## List

Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
    - Marker character change forces new list start:
        * Ac tristique libero volutpat at
        + Facilisis in pretium nisl aliquet
        - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

## Blockquote

Support default blockquotes and other special blockquotes with classes, including info blockquotes, warning
blockquotes, and danger blockquotes.

### Examples

- Default blockquote with no classes:

  > Blockquotes can also be nested...
  >> ...by using additional greater-than signs right next to each other...
  > > > ...or with spaces between arrows.
  >
  > Here is a [link](/).
  >
  > Here is also a list:
  - Item 1
  - Item 2
  > Here is an inline `code`.

- Info blockquote with class `.info-blockquote`:

  {: .info-blockquote}
  > This is an info blockquote.

- Warning blockquote with class `.warning-blockquote`:

  {: .warning-blockquote}
  > This is a warning blockquote.

- Danger blockquote with class `.danger-blockquote`:

  {: .danger-blockquote}
  > This is a danger blockquote.

## Code

Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```

## Table

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Image

Support both block and inline images.

Also support images with custom classes.

### Examples

- General image:
  ![Minion](https://octodex.github.com/images/minion.png)
- Image with class `.img-center`
  ![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat"){: .img-center}
- Badge images:
  ![Bootstrap Version](https://img.shields.io/badge/badge_image-one-blue)
  ![Bootstrap Version](https://img.shields.io/badge/badge_image-two-red)

## Horizontal Rule

Support horizontal rule using either `---` or `***`.

### Examples

- Horizontal rule using `---`:

___

- Horizontal rule using `***`:

***

## Emoji

Support emojis by Jekyll plugin `jemoji`.

### Examples

- `:+1:`: :+1:
- `:grin:`: :grin:
- `:man_student:`: :man_student:

## LaTeX

Support enable $\LaTeX$, MathML, and AsciiMath contents by MathJax.

You can use `$$$$` to generate block contents or `$$` & `\\(\\)` to generate inline contents.

### Examples

- Block $\LaTeX$ using `$$$$`:

$$
a^2 + b^2 = c^2
$$

- Inline $\LaTeX$ using `$$`: $a^2 + b^2 = c^2$
- Inline $\LaTeX$ using `\\(\\)`: \\(a^2 + b^2 = c^2\\)

## Footnote

Footnote 1 link[^first].

Footnote 2 link[^second].

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.
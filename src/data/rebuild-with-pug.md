---
path: rebuild-with-pug
title: Rebuilding my first website ... with pug!
description: A short guide on how I remade my first website in Pug and removed all the repeating parts.
category: web
tags: ['pug', 'html']
date: 04/20/22
<!-- draft: true -->
---

## Intro

I was cleaning up some old files in my macbook the other day and found the first website I've ever built. I was into book design and typography by that time, so I self-published some books with one of my friends and we needed a nice website to show off our books. I did not know much about web development and all I had was some basic HTML, CSS, and JS skills. I created a bunch of `.html` files that contain all the text chunks for each page and one single `.css` file that handles the style of the whole website. After putting in hours of hard work, I was able to build a static site that introduces our projects.

However, even though I was very proud of my work, something just did not feel right. I was taught to avoid code repetition from my first programming class at my university, but I was repeating the same code again and again throughout the website because I could not find any other way. For example, when I tried to add a navigation bar to the website, I had to repeat the same code for generating the nav bar in `index.html`, `book1.html`, `book2.html`, `about.html`, and so on. I only had to repeat seven times because there were a total of seven `.html` files, but obviously it was not the best way to build a website in terms of scalability. And this was not only for the nav bar. I had to include the same `<head></head>` section for each page so that I can inject the style to each page. It would have been much easier if I had used some kind of template to generate the basic structure of the website.

## Rebuilding the website with pug

Pug is a template engine that generates `.html` files using its own syntax. It is powerful not only because it enables to write reusable HTML, but also it understands Javascript and makes the code dynamic.

### Rewrite the head section

The main problem with the original code for the head section was that because every page needs the head tag, I had to include the same code block in every `.html` file. However, this can be easily solved with pug. Let's see the actual use case.

```html
<!--
index.html
-->

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>파킹스페이스*</title>
  <script defer src="p5/libraries/p5.min.js"></script>
  <script defer src="p5/libraries/p5.dom.js"></script>
  <script defer src="asterisk.js"></script>
  <script defer src="asteriskClass.js"></script>
  <link
    rel="apple-touch-icon"
    sizes="180x180"
    href="favicon/apple-touch-icon.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="favicon/favicon-32x32.png"
  />
  <link
    rel="icon"
    type="image/png"
    sizes="16x16"
    href="favicon/favicon-16x16.png"
  />
  <link rel="manifest" href="favicon/site.webmanifest" />
  <link rel="stylesheet" href="_base.css" />
  <link rel="stylesheet" href="styles.css" />
</head>
```

This can be rewritten with pug like this:

```pug
// head.pug

head
  meta(name='viewport', content='width=device-width')
  meta(charset='utf-8')
  title parkingspace*

  // loading p5 animation
  script(defer, src='/p5/libraries/p5.min.js')
  script(defer, src='/p5/libraries/p5.dom.js')
  script(defer, src='/asterisk.js')
  script(defer, src='/asteriskClass.js')

  // favicon
  link(rel='apple-touch-icon', href='favicon/apple-touch-icon.png')
  link(rel='icon', href='favicon/favicon-32x32.png')
  link(rel='image/png', href='favicon/favicon-16x16.png')
  link(rel='manifest', href='favicon/site.webmanifest')

  // style
  link(rel='stylesheet', href='_base.css')
  link(rel='stylesheet', href='styles.css')
```

### Base layout

With pug, it is now possible to have one single layout and customize it for different context. This helps us to manage the overall consistency of the website and avoid rewriting the repeating parts.

```pug
// layout.pug

// This is like a function in pug
// I'm defining a function that takes href attribute and name
mixin link(href, name)
  h1.title
    a(href=href)= name

mixin nav-link(href, name)
  li
    a(href=href)= name


doctype html
head
  // I'm injecting the head section I wrote above using the include syntax
  include includes/head.pug
body
  .container
    header.top
      // this is how you use the mixin function
      +link('/', 'parkingspace')
      +link('/about', 'about')


    // Add a nav bar to the page
    nav.bottom-nav
      ul
        +nav-link('/name-card-2020', 'name card')
        +nav-link('/asterisk-emitter', 'asterisk_emitter')
        +nav-link('/imsibogwanham-2020', '임시보관함')
        +nav-link('/perfect-circle-2019', '완벽한 동그라미를 그리는 법')
        +nav-link('/tmmg-2017', '타오르지 못하고 명멸하는 것들에 관하여')

    .right-display
      block right-display
```

Now that I have the base layout, I can easily construct all other pages based on this layout. This means that I don't need to repeat my code for adding the nav bar/head section for other pages.

To add this layout to the page, you just use the extends keyword.

```pug
// index.pug

// Add the layout using the extends keyword
extends layout.pug

block right-display
  .img-gallery
    .tmmg
      img(src='/img/img2.jpg')
```

### Customize the page

To make your website more dynamic, you need to be able to customize each page that uses the same layout. You can use the block syntax to achieve that.

In the `layout.pug`, I added a block with a name at the very last, meaning that I will add a block at this location. To add your custom code block, you use the `block [your-blockname]` syntax in the file that extends the layout.

```pug
// layout.pug

// ...
block right-display
```

```pug
// index.pug

extends layout.pug

// ...
block right-display
  // block content

```

## Outro

This was my first experience building a website with pug. I've only looked at a very small portion of what pug is capable of, but that was enough to see how powerful this template engine can be. If you are interested in reviewing the code, it is on my [github repository](https://github.com/jcha0713/pug-ps), and you can also visit the [ website ](https://pug-ps.herokuapp.com/) I published via heroku. Please note that the code is not properly optimized for production, but only to demonstrate how pug can be used to reduce the amount of code blocks that are repeating. If you want to learn more about the pug, I recommend reading through the [ documentation ](https://pugjs.org/api/getting-started.html).

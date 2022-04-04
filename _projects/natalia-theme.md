---
name: natalia-theme
description: Natalia is a flat, content-focused, easy-to-use template portfolio and blog theme powered by Jekyll.
logo: 
repo: https://github.com/hyperzsb/natalia-theme
tags: jekyll bootstrap
pinned: true
excerpt_separator: <!--more-->
---

Natalia is a flat, content-focused, easy-to-use template portfolio and blog theme powered
by [Jekyll](https://jekyllrb.com/) and [Bootstrap](https://getbootstrap.com/).

<!--more-->

## Special Notes

As the project is in its early stage, this documentation will update gradually in the future.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
    - [Already here](#already-here)
    - [Coming soon](#coming-soon)
- [User Guide](#user-Guide)
    - [Customization](#customization)
    - [Deploy](#deploy)
        - [Deploy manually](#deploy-manually)
        - [Deploy using GitHub Pages](#deploy-using-github-pages)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Every developer 🧑🏼‍💻 needs an awesome place to exhibit their unique efforts and inspirations, bringing them all over the world 🌏.
Natalia may be a good choice for you to build up your own portfolio and blog site in a few minutes, and deliver your ideas in a friendly way.
Out of the box, easy configuration, and free customization.

Natalia is mainly developed on [Jekyll](https://jekyllrb.com/) and [Bootstrap](https://getbootstrap.com/), but lots of JavaScript libraries, Ruby gems, and third-party APIs are used as well:

- [lodash](https://github.com/lodash/lodash)
- [HighlightJS](https://github.com/highlightjs/highlight.js/)
- [MathJax](https://github.com/mathjax/MathJax)
- [Gitalk](https://github.com/gitalk/gitalk)
- [EmailJS](https://www.emailjs.com/)
- [jekyll-feed](https://github.com/jekyll/jekyll-feed)
- [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag)
- [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap)
- [jemoji](https://github.com/jekyll/jemoji)
- [Google Fonts](https://fonts.google.com/)

Natalia is born in the free world of open-source software.

## Features

### Already here

There are several main features of Natalia:

- **A portfolio home page** showing your basic information (and logo), pinned projects, and pinned posts.
- **A projects list page** listing all your projects and efforts, along with **detail pages of every project**.
- **A posts list page** listing all your posts and ideas, along with **detail pages of every post**. Within every post, **comments** are supported with the help of [Gitalk](https://github.com/gitalk/gitalk).
- **A contact page** where visitors can send you **emails** via email service provided by [EmailJS](https://www.emailjs.com/)

Natalia supports a wide range of Markdown contents including:

- **Inline and block code** highlighted by [HighlightJS](https://github.com/highlightjs/highlight.js/).
- **Emojis** like `:+1:` 👍 supported by [jemoji](https://github.com/jekyll/jemoji).
- **LaTeX** contents including **inline notations and block equations** rendered by [MathJax](https://github.com/mathjax/MathJax).

### Coming soon

Natalia is far from a perfect project right now. Quite a few features are about to be considered:

- Group projects and posts by tags in standalone pages.
- Add more components into portfolio home page, such as detailed self-introduction, personal experiences, and programming skills.
- Improve the appearance and behavior of project detail page.
- Improve the appearance and behavior of contact page.

## User Guide

### Customization

*TBD*

### Deploy

You can deploy Natalia manually on your Virtual Machines provided by Cloud Service Providers like AWS, Azure, and Google Cloud.
Besides, you can also deploy Natalia using the static pages hosting services provided by [GitHub Pages](https://pages.github.com/), [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/), [Cloudflare Pages](https://pages.cloudflare.com/), and [AWS Amplify](https://aws.amazon.com/amplify/).

My home site [hyperzsb.io](https://hyperzsb.io) is currently hosted on [AWS Amplify](https://aws.amazon.com/amplify/).

#### Deploy manually

1. Clone this project
```bash
$ git clone https://github.com/Hyperzsb/natalia-theme.git
$ cd natalia-theme
```
2. Install dependencies using `bundle`. For more information about installing bundle and Jekyll, please refer to [Quickstart Guide of Jekyll](https://jekyllrb.com/docs/).
```bash
$ bundle install
```
3. Build Natalia
```bash
$ bundle exec jekyll build
```
4. Copy the build output inside `_site/` directory to the corresponding folder of your server (like [Nginx](https://www.nginx.com/) and [Apache](https://httpd.apache.org/)) to publish it.
   For more information about the server applications, please refer to their documentation.

#### Deploy using GitHub Pages

*TBD*

## Troubleshooting

- **Invalid Ruby version**

Although the preferred Ruby version is `~> 3.0`, lower LTS versions are also acceptable (e.g. `2.4` and `2.6`).

However, if you choose to use a lower version other than `~> 3.0`, you should modify the `Gemfile` to remove version flags of Jekyll gems to achieve maximal compatibility.
Additionally, in this situation, `Gemfile.lock` should be removed as well.

## Contributing

Natalia welcomes any contributions from anyone! Please make Natalia a better tool for every developer!

## License

This project is under [MIT License](https://github.com/Hyperzsb/natalia-theme/blob/master/LICENSE).
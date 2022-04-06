# natalia-theme

![Jekyll Version](https://img.shields.io/badge/jekyll-4.2-blue?logo=jekyll) 
![Bootstrap Version](https://img.shields.io/badge/bootstrap-5.1-blue?logo=bootstrap)

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/a324b4e67c05427ab07b487ae3611fd7)](https://www.codacy.com/gh/Hyperzsb/natalia-theme/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Hyperzsb/natalia-theme&amp;utm_campaign=Badge_Grade)

Natalia is a flat, content-focused, easy-to-use template portfolio and blog theme powered
by [Jekyll](https://jekyllrb.com/) and [Bootstrap](https://getbootstrap.com/). 

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

Natalia also supports awesome features provided by third-party libraries:

- Embedded **comments** plugin using GitHub Issues powered by [Gitalk](https://github.com/gitalk/gitalk). No additional server-side applications needed.
- Direct **email** plugin provided by [EmailJS](https://www.emailjs.com/) where users can send you emails without opening email clients.

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

1. Clone this project.
```bash
$ git clone https://github.com/Hyperzsb/natalia-theme.git
$ cd natalia-theme
```
2. Customize your awesome site. For more detail, please refer to [Customization](#customization).
3. Install dependencies using `bundle`. For more information about installing bundle and Jekyll, please refer to [Quickstart Guide of Jekyll](https://jekyllrb.com/docs/).
```bash
$ bundle install
```
4. Build Natalia.
```bash
$ bundle exec jekyll build
```
5. Copy the build output inside `_site/` directory to the corresponding folder of your server (like [Nginx](https://www.nginx.com/) and [Apache](https://httpd.apache.org/)) to publish it. 
For more information about the server applications, please refer to their documentation.

#### Deploy using GitHub Pages

As Natalia is developed atop [Jekyll](https://jekyllrb.com/), you can easily deploy your awesome site using [GitHub Pages](https://pages.github.com/).

1. Fork, clone this repo, or use this repo as template.
2. Customize your awesome site. For more detail, please refer to [Customization](#customization).
3. Modify the `baseUrl` field in the `_config.yaml` file.
   Typically, if you use GitHub Pages to deploy your site, the site will be deployed under a non-root route of the domain provided GitHub Pages or your custom domain.
   For example, assuming you are using the domain provided by GitHub Pages, `hyperzsb.github.io`, this site will be deployed under `hyperzsb.github.io/natalia-theme`.
   To avoid potential route issues, you should modify the `baseUrl` field with the value `/natalia-theme`.
4. Go to the setting page of your repo, and enable the GitHub Pages service. For more details about how to enable the GitHub Pages, please refer to [its documentation](https://pages.github.com/).
5. You can visit your site once the deployment has succeeded.

Here is a live demo of deploying Natalia using GitHub Pages: [demo](https://github.hyperzsb.tech/natalia-theme).

## Troubleshooting

- **Invalid Ruby version**

Although the preferred Ruby version is `~> 3.0`, lower LTS versions are also acceptable (e.g. `2.4` and `2.6`).

However, if you choose to use a lower version other than `~> 3.0`, you should modify the `Gemfile` to remove version flags of Jekyll gems to achieve maximal compatibility. 
Additionally, in this situation, `Gemfile.lock` should be removed as well.

- **Can not download CSS, JavaScript, or other assets from the server**

This problem is probably caused by assigning an empty or incorrect value to the `baseUrl` field in the `_config.yaml` file.

When you deploy your site under a non-root route of a given domain (for example, `https://hyperzsb.github.io/natalia-theme`), you may encounter this problem. 
In this situation, if no modification has been made to the `baseUrl` field, the browser will attempt to download CSS, JS, and other assets (like images) from the root route (in this example, `https://hyperzsb.github.io`) rather than the actual route (`https://hyperzsb.github.io/natalia-theme`).

To deal with this problem, just modify the `baseUrl` field to the corresponding value (in this example, modify it to `/natalia-theme`) and redeploy your site.

## Contributing

Natalia welcomes any contributions from anyone! Please make Natalia a better tool for every developer!

## License

This project is under [MIT License](https://github.com/Hyperzsb/natalia-theme/blob/master/LICENSE).

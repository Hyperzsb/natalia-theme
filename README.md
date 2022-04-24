# natalia-theme

[![Jekyll Version](https://img.shields.io/badge/jekyll-4.2-blue?logo=jekyll)](https://jekyllrb.com/)
[![Bootstrap Version](https://img.shields.io/badge/bootstrap-5.1-blue?logo=bootstrap)](https://getbootstrap.com/)

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
    - [Personal information settings](#personal-information-settings)
    - [Basic building and deploying settings](#basic-building-and-deploying-settings)
    - [Advanced building and deploying settings](#advanced-building-and-deploying-settings)
  - [Deploy](#deploying)
    - [Deploy manually](#deploying-manually)
    - [Deploy using GitHub Pages](#deploying-using-github-pages)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Every developer 🧑🏼‍💻 needs an awesome place to exhibit their unique efforts and inspirations, bringing them all over the world 🌏.
Natalia may be a good choice for you to build up your own portfolio and blog site in a few minutes, and deliver your ideas in a friendly way.
Out of the box, easy configuration, and free customization.

Natalia is mainly developed on [Jekyll](https://jekyllrb.com/) and [Bootstrap](https://getbootstrap.com/), but lots of JavaScript libraries, Ruby gems, Liquid templates, and third-party APIs are used as well (in lexicographical order):

- [EmailJS](https://www.emailjs.com/)
- [Gitalk](https://github.com/gitalk/gitalk)
- [Google Fonts](https://fonts.google.com/)
- [HighlightJS](https://github.com/highlightjs/highlight.js/)
- [jekyll-anchor-headings](https://github.com/allejo/jekyll-anchor-headings)
- [jekyll-feed](https://github.com/jekyll/jekyll-feed)
- [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag)
- [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap)
- [jekyll-toc](https://github.com/allejo/jekyll-toc)
- [jemoji](https://github.com/jekyll/jemoji)
- [Lodash](https://github.com/lodash/lodash)
- [MathJax](https://github.com/mathjax/MathJax)
- [Microsoft Clarity](https://clarity.microsoft.com/)

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

- Embedded **comments** plugin using GitHub Issues and Preact powered by [Gitalk](https://github.com/gitalk/gitalk).
  No additional server-side applications are needed.
- Direct **email** plugin provided by [EmailJS](https://www.emailjs.com/) where users can send you emails without opening email clients.
- Clear site **analysis** with the help of [Microsoft Clarity](https://clarity.microsoft.com/) which enable the global monitoring and statistic of your site.
  Totally free and easy to use.

Many other features are included in Natalia as well, such as the global **dark mode**.

To find all the Natalia's features, please refer to the [CHANGELOG](https://github.com/Hyperzsb/natalia-theme/blob/master/CHANGELOG.md).

### Coming soon

Natalia is far from a perfect project right now. Quite a few features are about to be considered:

- Group projects and posts by tags in standalone pages.
- Add more components to the portfolio home page, such as detailed self-introduction, personal experiences, and programming skills.
- Maybe add a timeline to the posts page.
- Improve the appearance and behavior of the contact page. Maybe add more components to provide more information and contact methods.

You can find all the Natalia's scheduled backlogs from [here](https://github.com/Hyperzsb/natalia-theme/projects/1).

## User Guide

### Customization

All the customization can be made just inside the `_config.yaml` file, but you can also customize more by editing the source code.

#### Personal information settings

There is some information you can add to Natalia in the section `Personal information settings` of the `_config.yaml` file.
You can add your name, your description, and your social media accounts & channels.

> Natalia currently only supports Email, Twitter, Facebook, Instagram, YouTube, and GitHub.
> But it is quite simple to add more social media like Stack Overflow or Vimeo to Natalia by yourself.
> Just need a few Web skills.

Additionally, you can also edit the base title of windows and the copyright information in the footer.

#### Basic building and deploying settings

There are more configurations of how the site is built and which component is enabled in the section `Basic building and deploying settings` of the `_config.yaml` file.

- `url` and `baseUrl`: You should modify the `url` to your custom domain name because the functions of some plugins rely on it. 
  For more information about the `baseUrl`, please refer to *Can not download CSS, JavaScript, or other assets from the server (404 error)* in the section  [Troubleshooting](#troubleshooting)
- `gitalk`: [Gitalk](https://github.com/gitalk/gitalk) is a lightweight comment component based on GitHub Issues and Preact.
  You can enable the comment function of your site in a few minutes.
  For more information about the setup procedure of Gitalk, please refer to its [usage](https://github.com/gitalk/gitalk#usage).
  You should just modify the fields like `gitalk.clientID`, `gitalk.clientSecret`, and `gitalk.repo` to the corresponding values you configured.
- `emailjs`: [EmailJS](https://www.emailjs.com/) provides front-end email service by JavaScript in the contact page. 
  Just like Gitalk, set up your account, service, and template following its [documentation](https://www.emailjs.com/docs/) and add the values to the corresponding fields.
- `clarity`: By [Microsoft Clarity](https://clarity.microsoft.com/), you can easily monitor your site and get key indexes of visitors.
  Like Gitalk and EmailJS, just create an account and a project, and add the project ID to the `projectID` field.
  You can also indicate whether you want to enable this feature by setting the `enable` field to `true` or `false`.

> Leaking sensitive information like `gitalk.clientSecret` to the public if you modify the field directly in your repo may be vulnerable.
> A better way to configure such fields is to expose the corresponding values to environment variables in your CI or hosting system, and inject these values when building the site.
> Most CI and hosting systems, including GitHub Pages (as it is based on GitHub Actions) support the environment variable injection. Please refer to their documentation for more information.

#### Advanced building and deploying settings

There are some advanced configurations of Natalia in the section `Advanced building and deploying settings` section of the `_config.yaml` file.

In most cases, **DO NOT** modify contents in this section unless you are clear about what you are doing.

### Deploying

You can deploy Natalia manually on your Virtual Machines provided by Cloud Service Providers like AWS, Azure, and Google Cloud.
Besides, you can also deploy Natalia using the static page hosting services provided by [GitHub Pages](https://pages.github.com/), [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/), [Cloudflare Pages](https://pages.cloudflare.com/), and [AWS Amplify](https://aws.amazon.com/amplify/).

My home site [hyperzsb.io](https://hyperzsb.io) is currently hosted on [AWS Amplify](https://aws.amazon.com/amplify/).

#### Deploying manually

1. Clone this project.
   
   ```bash
   $ git clone https://github.com/Hyperzsb/natalia-theme.git
   $ cd natalia-theme
   ```

2. Customize your awesome site. For more details, please refer to [Customization](#customization).
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

#### Deploying using GitHub Pages

As Natalia is developed atop [Jekyll](https://jekyllrb.com/), you can easily deploy your awesome site using [GitHub Pages](https://pages.github.com/).

1. Fork, clone this repo, or use this repo as the template.
2. Customize your awesome site. For more details, please refer to [Customization](#customization).
3. Modify the `baseUrl` field in the `_config.yaml` file.
   Typically, if you use GitHub Pages to deploy your site, the site will be deployed under a non-root route of the domain provided by GitHub Pages or your custom domain.
   For example, assuming you are using the domain provided by GitHub Pages, `hyperzsb.github.io`, this site will be deployed under `hyperzsb.github.io/natalia-theme`.
   To avoid potential route issues, you should modify the `baseUrl` field with the value `/natalia-theme`. To learn more about this modification, please go through the [Troubleshooting](#troubleshooting) section.
4. Go to the setting page of your repo, and enable the GitHub Pages service. For more details about how to enable the GitHub Pages, please refer to [its documentation](https://pages.github.com/).
5. You can visit your site once the deployment has succeeded.

Here is a live demo of deploying Natalia using GitHub Pages: [demo](https://github.hyperzsb.tech/natalia-theme).

## Troubleshooting

- **Invalid Ruby version**

Although the preferred Ruby version is `~> 3.0`, lower LTS versions are also acceptable (e.g. `2.4` and `2.6`).

However, if you choose to use a lower version other than `~> 3.0`, you should modify the `Gemfile` to remove version flags of Jekyll gems to achieve maximal compatibility. 
Additionally, in this situation, `Gemfile.lock` should be removed as well.

- **Can not download CSS, JavaScript, or other assets from the server (404 error)**

This problem is probably caused by assigning an empty or incorrect value to the `baseUrl` field in the `_config.yaml` file.

When you deploy your site under a non-root route of a given domain (for example, `https://hyperzsb.github.io/natalia-theme`), you may encounter this problem. 
In this situation, if no modification has been made to the `baseUrl` field, the browser will attempt to download CSS, JS, and other assets (like images) from the root route (in this example, `https://hyperzsb.github.io`) rather than the actual route (`https://hyperzsb.github.io/natalia-theme`).

To deal with this problem, just modify the `baseUrl` field to the corresponding value (in this example, modify it to `/natalia-theme`) and redeploy your site.

Additionally, for senior users, you can just config redirect rules on your Apache and Nginx servers (if you deploy your sites manually); or you can just add some rewrite/redirect rules to your service providers (if you deploy your sites using some hosting services). No need to modify the `_config.yaml` file.
It is a more complicated way, but may offer more flexibility.

## Contributing

Natalia welcomes any contributions from anyone! Please make Natalia a better tool for every developer!

## License

This project is under [MIT License](https://github.com/Hyperzsb/natalia-theme/blob/master/LICENSE).

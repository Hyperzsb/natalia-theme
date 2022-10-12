# natalia-theme

[![Jekyll Version Badge](https://img.shields.io/badge/jekyll-4.2-blue?logo=jekyll)](https://jekyllrb.com/)
[![Bootstrap Version Badge](https://img.shields.io/badge/bootstrap-5.1-blue?logo=bootstrap)](https://getbootstrap.com/)

[![Latest Tag Badge](https://badgen.net/github/tag/Hyperzsb/natalia-theme)](https://github.com/Hyperzsb/natalia-theme/tags)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/a324b4e67c05427ab07b487ae3611fd7)](https://www.codacy.com/gh/Hyperzsb/natalia-theme/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Hyperzsb/natalia-theme&amp;utm_campaign=Badge_Grade)
[![GitHub Pages Badge](https://github.com/Hyperzsb/natalia-theme/actions/workflows/pages/pages-build-deployment/badge.svg?branch=github-pages)](https://github.com/Hyperzsb/natalia-theme/actions/workflows/pages/pages-build-deployment)

Natalia is a flat, content-focused, easy-to-use template portfolio and blog theme powered
by [Jekyll](https://jekyllrb.com/) and [Bootstrap](https://getbootstrap.com/).

## `github-pages` branch

![Non-Release](https://img.shields.io/badge/github--pages-non--release-red) ![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-green?logo=github)

This branch is used to test and demonstrate the deployment procedure on [GitHub Pages](https://pages.github.com/).

To use Natalia, please navigate to the `master` [branch](https://github.com/Hyperzsb/natalia-theme/tree/master) of this repository and go through the [README](https://github.com/Hyperzsb/natalia-theme/blob/master/README.md).

[hyperzsb]: https://github.com/Hyperzsb

## Deploy using GitHub Pages

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
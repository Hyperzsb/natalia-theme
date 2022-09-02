---
title: Linux - 自定义你的 Terminal
date: 2022-08-31
last_update: 2022-09-02
tags: linux
toc: true
comment: true
pinned: true
top: false
---

Terminal（终端）对于每一个开发者来说都是日常学习和工作中不可或缺的工具，我们需要通过各种CLI工具来完成各种任务。因此，配置一个强大、便捷和美观的Terminal将有助于提高我们的工作效率，更好地完成工作。在本篇博客中，我将介绍一些常见的Emulators、Shell、Prompts、Tools，以及如何使用这些工具，配置一个属于你自己的Terminal。

*由于Terminal相关的各类Emulators、Shell、Prompts、Tools种类繁多，且作者目前写作时间有限，该博客将**缓慢地**逐渐完善。:cry:*

## Emulators

> "A terminal emulator, or terminal application, is a computer program that emulates a video terminal within some other display architecture."
> 
> *From Wikipedia*

所谓终端模拟器（Terminal Emulator），就是一个可以让用户使用各种命令行命令或程序，同系统进行交互的接口（Interface）或应用（Application）。Windows系统的Cmd和PowerShell、以及Linux和macOS系统的Terminal，就是典型的Emulator。

在这一部分，我将介绍一些被开发者广为使用且颇受好评的Emulator，对于我曾使用过的Emulator，我也会对其使用体验进行简要评价。对于各系统内置的Emulator，相信大家都有亲身使用的体会，在此就不再赘述。

{: .info-blockquote}
> 在之后的内容中，对于Terminal和Emulator的使用不做严格的区分，均代指各类终端模拟器应用程序。

### Alacritty

> Homepage: [Alacritty](https://alacritty.org/)
> 
> GitHub Repo: [alacritty/alacritty](https://github.com/alacritty/alacritty)

Alacritty是一款现代化的终端模拟器，在默认的基本设置外，提供了灵活的自定义配置选项。通过集成其他应用程序，而不是重新实现它们，Alacritty提供了许多有着强大性能的特性。

**基本信息**

- 开发技术：Rust、OpenGL
- 支持平台：BSD、Linux、macOS、Windows
- 开源许可：Apache-2.0

**功能亮点**

*TBD*

**使用体验**

*TBD*

### cool-retro-term

> GitHub Repo：[Swordfish90/cool-retro-term](https://github.com/Swordfish90/cool-retro-term)

cool-retro-term是一种模拟在旧式CRT显示器上运行终端的Emulator。是一种美观的、可定制的、轻量化的终端模拟器。

**基本信息**

- 开发技术：QML、Qt
- 支持平台：Linux、macOS

**功能亮点**

*TBD*

### Fluent Terminal

> GitHub Repo: [felixse/FluentTerminal](https://github.com/felixse/FluentTerminal)

Fluent Terminal是一个基于UWP和Web技术的、面向Windows平台的终端模拟器。

**基本信息**

- 开发技术：C#、UWP
- 支持平台：Windows
- 开源许可：GPL-3.0

**功能亮点**

*TBD*

### Hyper

> Homepage: [Hyper](https://hyper.is/)
> 
> GitHub Repo: [vercel/hyper](https://github.com/vercel/hyper)

Hyper的目标是为命令行界面用户创建一个基于开放网络标准的、漂亮的、可扩展的终端模拟器。Hyper关注于速度、稳定性以及为扩展作者开发正确的API。

**基本信息**

- 开发技术：TypeScript
- 支持平台：Linux、macOS、Windows
- 开源许可：MIT

**功能亮点**

*TBD*

**使用体验**

*TBD*

### iTerm2

> Homepage: [iTerm2](https://iterm2.com/)
> 
> GitHub Repo: [gnachman/iTerm2](https://github.com/gnachman/iTerm2)

iTerm2是Terminal的替代品和iTerm的继承者。iTerm2将终端带进了现代时代，具有你从来不知道的，却一直想要的功能。

**基本信息**

- 开发技术：Objective-C
- 支持平台：macOS
- 开源许可：GPL-2.0

**功能亮点**

*TBD*

### Tabby

> Homepage: [Tabby](https://tabby.sh/)
> 
> GitHub Repo: [Eugeny/tabby](https://github.com/Eugeny/tabby)

Tabby（前身是Terminus）是一个高度可配置的终端模拟器，SSH和串行客户端。

**基本信息**

- 开发技术：TypeScript
- 支持平台：Linux、macOS、Windows
- 开源许可：MIT

**功能亮点**

*TBD*

**使用体验**

*TBD*

### Warp

> Homepage: [Warp](https://www.warp.dev/)
> 
> GitHub Repo: [warpdotdev/Warp](https://github.com/warpdotdev/Warp)

Warp是一款基于GPU加速的终端模拟器，凭借其快速的特性，可以提高你和你的团队的生产力。

**基本信息**

- 开发技术：Rust
- 支持平台：目前仅macOS，未来会陆续支持Linux、Windows和Web
- 开源许可：Warp目前是一款闭源软件，但是开发者已在考虑开源的可能性

**功能亮点**

*TBD*

**使用体验**

*TBD*

### Wez's Terminal

> Homepage: [Wez's Terminal](https://wezfurlong.org/wezterm/)
> 
> GitHub Repo: [wez/wezterm](https://github.com/wez/wezterm)

Wez's Terminal是一款跨平台的、GPU加速的终端模拟器和复用器。

**基本信息**

- 开发技术：Rust
- 支持平台：BSD、Linux、macOS、Windows
- 开源许可：MIT

**功能亮点**

*TBD*

### Windows Terminal

> GitHub Repo: [microsoft/terminal](https://github.com/microsoft/terminal)

Windows Terminal是一款广为赞誉的、面向Windows平台的终端模拟器，它在很大程度上解决了Windows长期以来因为命令行体验不佳而被诟病的问题。可以说是Windows平台最受欢迎的现代化终端模拟器。

**基本信息**

- 开发技术：C++
- 支持平台：Windows
- 开源许可：MIT

**功能亮点**

*TBD*

**使用体验**

*TBD*

### Other

在整理Emulator相关资料时，发现了很多其他曾经非常受欢迎，但是已经因为各种原因而停止更新的Emulator，这里也做一个简单的整理，供给感兴趣的读者以参考。

- [eDEX-UI](https://github.com/GitSquared/edex-ui)：这是一个跨平台（Linux、macOS、Windows），面向全屏场景、且支持触屏的终端模拟器。它的设计收到了科幻电影的启发，具有很强的未来感。该项目于2021年10月停止更新。
- [upterm](https://github.com/railsware/upterm)：Upterm（前身为Black Screen）是终端世界中的一个IDE。严格来说，它既是一个终端仿真器，又是一个基于Electron的交互式Shell。被作者称为21世纪的终端模拟器。但是由于缺乏维护者和社区贡献，该项目于2019年5月停止更新。

## Shells

*TBD*

## Prompts

*TBD*

## Tools

*TBD*

## 样例

在该章节，我将基于不同的使用场景和工具集，简要描述两个我自己配置Terminal的例子。

### 为个人电脑配置Terminal

*TBD*

### 为服务器配置Terminal

*TBD*

## 常见问题

### 启动Terminal时未执行~/.bashrc中包含的内容

**问题描述**

我在为服务器配置Terminal时遇到了这个问题。问题的具体表现是在我已经向`~/.bashrc`添加了所需的内容的情况下（例如环境变量、别名和工具的相关配置），退出SSH并重新登录后，添加的内容并未生效，仍需要手动`source .bashrc`才可以生效。

**问题原因**

这个问题是由于我并未配置`~/.bash_profile`文件，而`bash`在通过不同方式启动会话时（login或者non-login），会执行不同的配置文件，这就导致在通过SSH登陆时（通常情况下这是个login会话），这就导致`bash`在启动时，默认执行`~/.bash_profile`、`~/.bash_login`、`~/.profile`等配置文件，而并未执行`~/.bashrc`。

**问题解决**

创建`~/.bash_profile`（或者`~/.bash_login`和`~/.profile`），向其中添加以下内容：

```shell
if [ -f "$HOME/.bashrc" ]; then
    . "$HOME/.bashrc"
fi
```

这会使得在`bash`启动时，通过执行`~/.bash_profile`，进而执行`~/.bashrc`。

## 参考

- [Why does an SSH remote command get fewer environment variables then when run manually?](https://stackoverflow.com/questions/216202/why-does-an-ssh-remote-command-get-fewer-environment-variables-then-when-run-man/216204#216204)

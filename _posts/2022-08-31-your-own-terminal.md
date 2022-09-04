---
title: Linux - 自定义你的 Terminal
date: 2022-08-31
last_update: 2022-09-04
tags: linux
toc: true
comment: true
pinned: true
top: false
---

Terminal（终端）对于每一个开发者来说都是日常学习和工作中不可或缺的工具，我们需要通过各种CLI工具来完成各种任务。因此，配置一个强大、便捷和美观的Terminal将有助于提高我们的工作效率，更好地完成工作。在本篇博客中，我将介绍一些常见的Emulators、Shell、Prompts、Tools，以及如何使用这些工具，配置一个属于你自己的Terminal。

*由于Terminal相关的各类Emulators、Shell、Prompts、Tools种类繁多，且作者目前写作时间有限，该博客将**缓慢地**逐渐完善。:cry:*

{: .info-blockquote}
> 若各位读者发现了本文中的错误，或对作者对于某些工具的评价持反对态度，请不吝赐教。

## Emulators

> "A terminal emulator, or terminal application, is a computer program that emulates a video terminal within some other display architecture."
> 
> *From Wikipedia*

所谓终端模拟器（Terminal Emulator），就是一个可以让用户使用各种命令行命令或程序，同系统进行交互的接口（Interface）或应用（Application）。Windows系统的Cmd和PowerShell、以及Linux和macOS系统的Terminal，就是典型的Emulator。

在这一部分，我将介绍一些被开发者广为使用且颇受好评的Emulator，对于我曾使用过的Emulator，我也会对其使用体验进行简要评价。对于各系统内置的Emulator，相信大家都有亲身使用的体会，在此就不再赘述。

{: .info-blockquote}
> 在之后的内容中，对于Terminal和Emulator的使用不做严格的区分，均代指各类终端模拟器应用程序。
> 
> 同时，各Emulator的**功能亮点**部分的内容均摘自其仓库或主页。

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

- Vi模式：Vi模式允许用户像使用Vi一样，使用键盘在Alacritty的视口内进行导航和滚动，同时提供了对于文本选择、命令提示等其他类Vi功能的支持。
  > 个人感觉这一特性算是Alacritty的最大看点。但是为用户提供类似Vi/Vim的操作模拟，在很多软件或者插件中都有实现，算不上是一个很突出的特点。
- 搜索：Alacritty提供了在视口范围内进行搜索的功能。用户可以通过Vi的方式进行搜索，或者通过`Ctrl+F`的常规方式进行搜索。
- 提示：用户可以同终端模拟器进行简单的文本交互以获取提示（无需进入Vi模式）。提示由正则表达式构成，可以用于出发外部应用，以及Alacritty的内置程序。
- 选择扩展：用户可以对于已选择的文本内容进行扩充。
- 打开链接：用户可以通过鼠标点击Alacritty视口中的URL，打开浏览器访问相应内容。
- 多窗口：用户可以在一个Alacritty中运行多个窗口。

**使用体验**

在初次使用Alacritty时，我感觉就是一个升级版的、精练版的macOS内置Terminal。经过短时间的使用，Alacritty在外观和功能（大多数特性实在算不上亮眼）上并未给我留下很深的印象，相较其他Emulator来说乏善可陈。当然，由于我并没有对Alacritty进行深度定制，没有发挥出Alacritty的优势，这一评价可能会比较片面。

### cool-retro-term

> GitHub Repo：[Swordfish90/cool-retro-term](https://github.com/Swordfish90/cool-retro-term)

cool-retro-term是一种模拟在旧式CRT显示器上运行终端的Emulator。是一种美观的、可定制的、轻量化的终端模拟器。

**基本信息**

- 开发技术：QML、Qt
- 支持平台：Linux、macOS

**功能亮点**

cool-retro-term的主要亮点就是可以模拟终端模拟器运行在旧式CRT显示器上的效果，是一个很有创意的Emulator。对于喜欢复古风的读者，可以一试。

### Fluent Terminal

> GitHub Repo: [felixse/FluentTerminal](https://github.com/felixse/FluentTerminal)

Fluent Terminal是一个基于UWP和Web技术的、面向Windows平台的终端模拟器。

**基本信息**

- 开发技术：C#、UWP
- 支持平台：Windows
- 开源许可：GPL-3.0

**功能亮点**

- 支持PowerShell、CMD、WSL以及多种自定义Shell。
- 内置的SSH和Mosh连接支持。
- 支持多选项卡和多窗口。
- 支持对于外观和主题的定制。
- 支持对主题的导入和导出。
- 支持导入iTerm主题。
- 支持全屏模式。
- 支持自定义按键绑定。
- 支持搜索功能。
- 可以通过配置shell的配置文件快速地进行不同Shell的切换。
- 提供Explorer的上下文菜单集成。
- 提供VSCode插件。
- i18n支持。

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

Hyper是作者自第一次尝试便一直使用至今的Emulator，其依托于现代Web技术，提供了强大的自定义外观支持，且有着丰富的插件库，个人感觉属于是Emulator届的杀手级产品。对于Hyper的使用体验，是值得大书特书的。

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

- 窗口拆分：用户可以对窗口进行水平或者垂直的拆分，通过灵活的布局以运行不同的Shell会话。
  > 类似tmux的窗口复用。
- 热键窗口：在运行其他应用时，用户可以通过热键立即将iTerm2拉起到前台。
  > 很实用的功能。
- 搜索：iTerm2提供了稳定的页内搜索功能（search-on-page）。同时支持正则表达式搜索。
- 自动补全：根据Shell的输入输出历史，iTerm2提供了对所有键入文本进行自动补全的功能。
  > 很有趣的功能，通常对于所有文本的自动补全只有一些Plugin才会提供。
- 复制模式：用户可以对已选择的文本内容进行删减或扩充。
- 粘贴历史：用户重新访问最近复制或粘贴的文本。用户甚至可以选择将黏贴历史保存到磁盘上，以防止其丢失。
  > 很实用的功能。
- 即时回放：用户可以回退到之前的时间点，以获取已不在窗口中显示的文本。
  > 很实用的功能。
- 可配置：iTerm2为用户提供了大量的配置选项，以满足不同的需求。
- Unixyness：iTerm2为Unix用户提供了良好的无鼠标操作体验。
- 24-bit色彩：iTerm2同时提供了24-bit和8-bit的颜色支持。
- 可读性：iTerm2通过智能色彩和最小化对比度的方式，增强了光标在复杂颜色环境下的辨识度。
- 鼠标回报：用户可以通过鼠标来完成光标定位和文本高亮等功能。
- 提示中心支持：用户可以通过macOS的提示中心，来获取Shell活动或作业的相关提示。
  > 很有趣的功能，通常对于提示中心的集成只有一些Plugin才会提供。
- 全局搜索：用户可以在所有选项卡的范围内进行搜索。
- 标签化配置文件：用户可以根据连接主机的不同，通过添加标签对iTerm2进行不同的配置。
- i18n支持：iTerm2提供了包括Unicode、全角字符和Emoji的支持。
- 触发器：iTerm2支持用户定义的触发器，这些触发器在接收到匹配相应正则表达式的文本时被执行。可以触发的功能包括高亮显示文本、自动响应、事件提示等。
  > 很有趣的功能。
- 智能选择：iTerm2可以通过识别光标下的内容来突出显示URL、电子邮件地址、文件名等。
- Shell集成：iTerm2可以与Shell集成，以获取Shell提示符的位置、输入的命令、所在的主机以及当前目录等信息。
- 自动配置文件切换：iTerm2可以根据用户当前的工作和身份，对配置文件进行自动切换。
- 行内图片：iTerm2可以在行内显示图片，甚至是动态的GIF图片。
- 时间戳：用户可以获取每条命令的最后修改时间，以获知相应作业的持续时间。
- 密码管理器：iTerm2通过集成macOS的Keychain应用，提供了内置的密码管理器。
  > 很实用的功能。
- 高级粘贴：用户可以在粘贴文本之前，对其进行修改或转化到base64编码等。
- 注释：用户可以选择一段文本，并对其添加注释
  > 很有趣的功能。
- 标签：用户可以在窗口的右上角添加一个标签，用以显示当前会话的相关信息。
- 输出捕获：iTerm2可以根据用户定义的正则表达式，捕获Shell的相应输出。
  > 很实用的功能。

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

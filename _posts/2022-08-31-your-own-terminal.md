---
title: Linux - 自定义你的 Terminal
date: 2022-08-31
last_update:
tags: linux
toc: true
comment: true
pinned: true
top: false
---

Terminal（终端）对于每一个开发者来说都是日常学习和工作中不可或缺的工具，我们需要通过各种CLI工具来完成各种任务。因此，配置一个强大、便捷和美观的Terminal将有助于提高我们的工作效率，更好地完成工作。在本篇博客中，我将介绍一些常见的Simulators、Shell、Prompts、Tools，以及如何使用这些工具，配置一个属于你自己的Terminal。

*由于Terminal相关的各类Simulators、Shell、Prompts、Tools种类繁多，且作者目前写作时间有限，该博客将**缓慢地**逐渐完善。:cry:*

## Simulators

*TBD*

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

### 启动Terminal时未执行`~/.*shrc`中包含的内容

#### 问题描述

我在为服务器配置Terminal时遇到了这个问题。问题的具体表现是在我已经向`~/.bashrc`添加了所需的内容的情况下（例如环境变量、别名和工具的相关配置），退出SSH并重新登录后，添加的内容并未生效，仍需要手动`source .bashrc`才可以生效。

#### 问题原因

这个问题是由于我并未配置`~/.bash_profile`文件，而`bash`在通过不同方式启动会话时（login或者non-login），会执行不同的配置文件，这就导致在通过SSH登陆时（通常情况下这是个login会话），这就导致`bash`在启动时，默认执行`~/.bash_profile`、`~/.bash_login`、`~/.profile`等配置文件，而并未执行`~/.bashrc`。

#### 问题解决

创建`~/.bash_profile`（或者`~/.bash_login`和`~/.profile`），向其中添加以下内容：

```shell
if [ -f "$HOME/.bashrc" ]; then
    . "$HOME/.bashrc"
fi
```

这会使得在`bash`启动时，通过执行`~/.bash_profile`，进而执行`~/.bashrc`。

## 参考

- [Why does an SSH remote command get fewer environment variables then when run manually?](https://stackoverflow.com/questions/216202/why-does-an-ssh-remote-command-get-fewer-environment-variables-then-when-run-man/216204#216204)

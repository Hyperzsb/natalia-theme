---
title: Git - SSL_ERROR_SYSCALL 问题解决
date: 2021-03-29
last_update: 2022-04-17
tags: github
toc: true
comment: true
legacyCommentID: /git-ssl-error/
pinned: true
top: true
---

最近在使用 Git 时发现在使用 `git clone` 或 `git pull` 等需要访问远程仓库的操作时，总是无法连接 GitHub 服务器，很是郁闷。在查阅了多方资料后，总结了这一问题的解决方法，希望能解决这一问题。

## 问题再现

### 系统版本

macOS Big Sur 11.2.3

### 使用工具

Terminal

### 使用命令

```bash
$ git clone https://github.com/xxx/xxx.git
fatal: unable to access 'https://github.com/xxx/xxx.git/': LibreSSL SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443 
```

## 虚假的解决方案

经过查阅各方资料，发现这个问题并非一个少见的问题，有大量的 Git 用户（尤其是 macOS 用户）遇到了这个问题，还有一些用户在使用 Gem 等工具时也出现了同样的问题。

目前可以查到的解决方案包括以下几种：

### 重启计算机

众所周知，重启解决 90% 的问题，有时候重启电脑可以直接解决这一问题。

>  该方法对我无效。

### 修改 Git 网络配置

对于 Git 的网络设置，可以采用以下方式进行修改：

- 删除 HTTP / HTTPS 代理设置：

  - 可以直接修改全局 Git 配置文件进行修改：

    ```bash
    $ vim ~/.gitconfig
    ```

    删除文件中 HTTP / HTTPS 的相关配置即可

  - 也可以使用命令进行修改：

    ```bash
    $ git config --global --unset http.proxy
    $ git config --global --unset https.proxy
    ```

  > 该方法对我无效。

- 更改 HTTP / HTTPS 加密库：

  由于该问题是 LibreSSL 库报错，可以修改 Git 使用 OpenSSL 库进行 HTTPS 的通信。

  ```bash
  $ git config --global http.sslBackend "openssl"
  ```

  > 该方法对我无效。

### 修改计算机网络配置

由于使用 IPv6 的原因，可能会导致这一问题的出现。可以配置计算机不使用 IPv6，故使用以下命令：

```bash
$ networksetup -setv6off Wi-Fi
```

如果有需要，可以再将配置修改回来：

```bash
$ networksetup -setv6automatic Wi-Fi
```

> 该方法好像对我有效

## 真正的解决方案

> 更新于 2021.07.11

之前试了这么多网上的方法，其实都没有找到问题的症结，实在是汗颜。其实这个问题的根本原因在于国内网络环境对于境外服务器的种种限制，只用解决这一问题才能真正意义上解决 GitHub push/pull 网络错误的问题。根据使用的 GitHub 连接方式不同，针对 HTTPS 和 SSH 各有一种方法。

### HTTPS 和 SSH 方法的对比

就一般的环境而言，这两种方法并没有什么区别；但是在配置了防火墙或代理的服务器环境中，SSH 方式可能会收到限制。

> 根据 GitHub 官方文档：
>
> - You can work with all repositories on GitHub over HTTPS, even if you are behind a firewall or proxy.
> - You can work with all repositories on GitHub over SSH, although firewalls and proxys might refuse to allow SSH connections.

幸运的是，在仅有防火墙端口限制的情况下，现在可以通过 HTTPS 的端口使用 SSH 方式连接 GitHub 服务器，具体方式请参阅 [Using SSH over the HTTPS port](https://docs.github.com/en/github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port)。

### 使用 HTTPS 代理

在使用 HTTPS 连接 GitHub 进行 push/pull 时（即 origin 地址为 https://github.com/xxx/xxx.git），需要更改本地 git 的配置，使用代理向 GitHub 发起请求。

> 要求：你需要有一个梯子，关于如何获取梯子，请自行搜索相关资料（由于政策原因，仅提供一些可用的关键字：机场、FreeWhale、Meet）。

执行如下命令：

```bash
$ git config --global -e
```

这将进入 git 的配置文件编辑界面（将使用 git 指定的默认编辑器打开）。

在该文件中加入如下内容：

```
[http]
        proxy = socks5://127.0.0.1:7891
[https]
        proxy = socks5://127.0.0.1:7891
```

其中“7891”为你的代理软件的指定出入端口，请根据实际情况自行修改。

> 该方法对我有效

### 使用 SSH

众所周知在 clone GitHub 仓库时可以使用 HTTPS 或者 SSH 进行 clone，而 SSH 却没有 HTTPS 的网络连接问题，所以可以将 push/pull 的连接方式由 HTTPS 改为 SSH。

> 要求：你需要提前生成 SSH 公私钥对，并将公钥添加到你的 GitHub 账户中。关于这一部分的详细信息，请参阅 [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)。

进入仓库对应目录，执行如下命令：

```bash
$ git remote set-url origin git@github.com:xxx/xxx.git
```

更改完成后，可以使用如下命令查看当前的 origin 地址：

```bash
$ git remote -v
```

> 该方法对我有效。强烈建议使用该方法，简单有效。

## 结论

所以说，有的时候网上的解决方案并不一定能解决自己的问题，还需要进行深入的研究和发掘。

## 参考

- [SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443](https://stackoverflow.com/questions/48987512/ssl-connect-ssl-error-syscall-in-connection-to-github-com443)
- [Switching remote URLs from HTTPS to SSH](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#switching-remote-urls-from-https-to-ssh)


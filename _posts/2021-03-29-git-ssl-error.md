---
title: Git - SSL_ERROR_SYSCALL 问题解决
date: 2021-03-29
last_update: 2022-12-07
tags: github
toc: true
comment: true
legacyCommentID: /git-ssl-error/
pinned: true
top: true
---

最近在使用 Git 时发现，在我执行 `git clone/push/pull` 等需要访问远程仓库的操作是，Git 总是无法连接到 GitHub 服务器，产生了 `SSL_ERROR_SYSCALL` 错误。频繁的错误令我很是郁闷。为彻底解决这一问题，在查阅了多方资料后和尝试了多种方案后，我总结了这一问题的解决方法，供给大家参考。

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

**:x: 该方法对我无效。**

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

  **:x: 该方法对我无效。**

- 更改 HTTP / HTTPS 加密库：

  由于该问题是 LibreSSL 库报错，可以修改 Git 使用 OpenSSL 库进行 HTTPS 的通信。

  ```bash
  $ git config --global http.sslBackend "openssl"
  ```

  **:x: 该方法对我无效。**

### 修改计算机网络配置

由于使用 IPv6 的原因，可能会导致这一问题的出现。可以配置计算机不使用 IPv6，故使用以下命令：

```bash
$ networksetup -setv6off Wi-Fi
```

如果有需要，可以再将配置修改回来：

```bash
$ networksetup -setv6automatic Wi-Fi
```

**:question: 该方法好像对我有效。**

## 真正的解决方案

> 更新于 2021.07.11

之前试了这么多网上的方法，其实都没有找到问题的症结，实在是汗颜。其实这个问题的根本原因在于国内网络环境对于境外服务器的种种限制，只有解决了这一问题，才能在真正意义上避免 `git clone/push/pull` 的网络错误。

根据用户所使用的 GitHub 连接方式，我分别针对 HTTPS 和 SSH 两个协议提出了各自的解决方案。

### HTTPS 和 SSH 方法的对比

就一般的开发环境而言，这两种方法通常没有太大的区别；但是在配置了防火墙或代理的服务器环境中，使用 SSH 方式可能会受到一些限制：

> 根据 GitHub 官方文档：
>
> - You can work with all repositories on GitHub over HTTPS, even if you are behind a firewall or proxy.
> - You can work with all repositories on GitHub over SSH, although firewalls and proxys might refuse to allow SSH connections.

幸运的是，在仅有防火墙端口限制的情况下，用户可以通过 HTTPS 的端口使用 SSH 方式连接 GitHub 服务器，具体方式请参阅 [Using SSH over the HTTPS port](https://docs.github.com/en/github/authenticating-to-github/troubleshooting-ssh/using-ssh-over-the-https-port)。

### 使用 HTTPS 代理

在使用 HTTPS 连接 GitHub 进行 `git clone/push/pull` 时（即远程仓库（通常为 `origin`）的地址为 https://github.com/xxx/xxx.git），需要更改本地 Git 的网络配置，以使用代理向 GitHub 发起请求。

> 要求：你需要有一个梯子，关于如何获取梯子，请自行搜索相关资料（由于政策原因，仅提供一些可用的关键字：机场、FreeWhale、Meet）。

执行如下命令：

```bash
$ git config --global -e
```

这将进入 Git 的配置文件编辑界面（将使用 Git 指定的默认编辑器打开，通常是 Vim 或者 Nano）。

在该文件中加入如下内容：

```
[http]
        proxy = socks5://127.0.0.1:7891
[https]
        proxy = socks5://127.0.0.1:7891
```

其中`7891`为你的代理软件的指定出入端口，请根据实际情况自行修改。

**:white_check_mark: 该方法对我有效。**

### 使用 SSH

{: .warning-blockquote}
> 更新于 2022.12.07
>
> 考虑到目前国内 GitHub 令人堪忧的服务质量，该方法可能会在未来的某一天失效。但是在那之前，该方法还是最为简单有效的。

众所周知 `git clone` 可以使用 HTTPS 或者 SSH 两种不同的协议来克隆 GitHub 仓库。既然 HTTPS 会收到网络环境的限制，而 SSH 却没有这些限制，我们不妨将本地 Git 和 GitHub 之间的通信协议由 HTTPS 改为 SSH。

> 要求：你需要提前生成 SSH 公私钥对，并将公钥添加到你的 GitHub 账户中。关于这一部分的详细信息，请参阅 [Connecting to GitHub with SSH](https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh)。

进入仓库对应目录，执行如下命令：

```bash
$ git remote set-url origin git@github.com:xxx/xxx.git
```

更改完成后，可以使用如下命令查看当前的 `origin` 地址：

```bash
$ git remote -v
```

**:white_check_mark: 该方法对我有效。强烈建议使用该方法，简单便捷。**

## 结论

所以说，有的时候网上的解决方案并不一定能解决自己的问题，还需要进行深入的研究和发掘。

## 参考

- [SSL_connect: SSL_ERROR_SYSCALL in connection to github.com:443](https://stackoverflow.com/questions/48987512/ssl-connect-ssl-error-syscall-in-connection-to-github-com443)
- [Switching remote URLs from HTTPS to SSH](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#switching-remote-urls-from-https-to-ssh)

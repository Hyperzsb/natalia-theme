---
title: Linux - 国内镜像源
date: 2020-08-24
last_update:
tags: linux mirror
toc: true
comment: true
pinned: false
---

我们作为国内用户在使用各 Linux 发行版时，往往会因为网络原因导致在搜索、安装和更新软件包时速度十分缓慢，极大地降低了用户体验。所以在安装 Linux 发行版时，不可或缺的一步就是替换发行版默认的软件源。

# 清华软件源

清华大学作为国内顶尖大学，计算机学科自然也是全国第一。其对于计算机学科基础设施的建设也投入甚多。Linux 发行版的镜像软件源就是其中之一。

该文章均使用**[清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/AOSP/)**所提供的镜像服务。该服务提供了近百种 Linux 发行版（Ubuntu、Debian、Fedora、CentOS、Arch 甚至 Raspberry Pi OS 等）软件源、开源软件镜像源（PyPi、Node.js、Docker、K8S 等）。

>  本文所有相关代码均可在官网找到。版权由清华大学开源软件镜像站所有。

# Ubuntu

## 版本代号 & 镜像下载

- [Ubuntu 20.04 LTS (Focal Fossa)](https://releases.ubuntu.com/20.04/)
- [Ubuntu 18.04 LTS (Bionic Beaver)](https://releases.ubuntu.com/18.04/)
- [Ubuntu 16.04 LTS (Xenial Xerus)](https://releases.ubuntu.com/16.04/)
- [Ubuntu 14.04 LTS (Trusty Tahr)](https://releases.ubuntu.com/14.04/)
- [Ubuntu 12.04 LTS (Precise Pangolin)](https://releases.ubuntu.com/12.04/)

## 更换软件源

直接编辑 `/etc/apt/sources.list` 文件或者在 `/etc/apt/sources.list.d` 目录下添加任意文件。

注释掉 `/etc/apt/sources.list` 中的原有内容，并根据你的系统版本添加如下内容：

- Ubuntu 20.04 LTS (focal)

  ```
  # 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
  
  # 预发布软件源，不建议启用
  # deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-proposed main restricted universe multiverse
  ```

- Ubuntu 18.04 LTS (bionic)

  ```
  # 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
  
  # 预发布软件源，不建议启用
  # deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse
  ```

- Ubuntu 16.04 LTS (xenial)

  ```
  # 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial main restricted universe multiverse
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-updates main restricted universe multiverse
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-backports main restricted universe multiverse
  deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-security main restricted universe multiverse
  
  # 预发布软件源，不建议启用
  # deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-proposed main restricted universe multiverse
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ xenial-proposed main restricted universe multiverse
  ```

其中诸如 `deb-src` 的源码镜像源默认是不启用的，如果你需要手动编译安装某些软件，可以考虑启用。

# Debian

## 版本代号 & 镜像下载

- [下一代 Debian 正式发行版的代号为 bullseye](https://www.debian.org/releases/bullseye/) — 发布时间尚未确定
- [Debian 10 (buster)](https://www.debian.org/releases/buster/) — 当前的稳定版（stable）
- [Debian 9 (stretch)](https://www.debian.org/releases/stretch/) — 旧的稳定版（oldstable）
- [Debian 8 (jessie)](https://www.debian.org/releases/jessie/) — 更旧的稳定版（oldoldstable）
- [Debian 7 (wheezy)](https://www.debian.org/releases/wheezy/) — 被淘汰的稳定版
- [Debian 6.0 (squeeze)](https://www.debian.org/releases/squeeze/) — 被淘汰的稳定版
- [Debian GNU/Linux 5.0 (lenny)](https://www.debian.org/releases/lenny/) — 被淘汰的稳定版
- [Debian GNU/Linux 4.0 (etch)](https://www.debian.org/releases/etch/) — 被淘汰的稳定版
- [Debian GNU/Linux 3.1 (sarge)](https://www.debian.org/releases/sarge/) — 被淘汰的稳定版
- [Debian GNU/Linux 3.0 (woody)](https://www.debian.org/releases/woody/) — 被淘汰的稳定版
- [Debian GNU/Linux 2.2 (potato)](https://www.debian.org/releases/potato/) — 被淘汰的稳定版
- [Debian GNU/Linux 2.1 (slink)](https://www.debian.org/releases/slink/) — 被淘汰的稳定版
- [Debian GNU/Linux 2.0 (hamm)](https://www.debian.org/releases/hamm/) — 被淘汰的稳定版

## 更换软件源

直接编辑 `/etc/apt/sources.list` 文件或者在 `/etc/apt/sources.list.d` 目录下添加任意文件。

注释掉 `/etc/apt/sources.list` 中的原有内容，并根据你的系统版本添加如下内容：

- Debian 10 (buster)

  ```
  # 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
  deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free
  deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-updates main contrib non-free
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-updates main contrib non-free
  deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-backports main contrib non-free
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-backports main contrib non-free
  deb https://mirrors.tuna.tsinghua.edu.cn/debian-security buster/updates main contrib non-free
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security buster/updates main contrib non-free
  ```

- Debian 9 (stretch)

  ```
  # 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
  deb https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main contrib non-free
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main contrib non-free
  deb https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main contrib non-free
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main contrib non-free
  deb https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main contrib non-free
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main contrib non-free
  deb https://mirrors.tuna.tsinghua.edu.cn/debian-security stretch/updates main contrib non-free
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security stretch/updates main contrib non-free
  ```

- Debian 8 (jessie)

  ```
  # 默认注释了源码镜像以提高 apt update 速度，如有需要可自行取消注释
  deb https://mirrors.tuna.tsinghua.edu.cn/debian/ jessie main contrib non-free
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ jessie main contrib non-free
  deb https://mirrors.tuna.tsinghua.edu.cn/debian/ jessie-updates main contrib non-free
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ jessie-updates main contrib non-free
  deb https://mirrors.tuna.tsinghua.edu.cn/debian/ jessie-backports main contrib non-free
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ jessie-backports main contrib non-free
  deb https://mirrors.tuna.tsinghua.edu.cn/debian-security jessie/updates main contrib non-free
  # deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security jessie/updates main contrib non-free
  ```

# CentOS

## 版本代号 & 镜像下载

- [CentOS 8](http://isoredirect.centos.org/centos/8/isos/x86_64/)
- [CentOS 7](http://isoredirect.centos.org/centos/7/isos/x86_64/)
- [CentOS 6](http://isoredirect.centos.org/centos/6/isos/x86_64/)

## 更换软件源

建议先备份 CentOS-Base.repo：

```
sudo cp /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.bak
```

然后编辑 `/etc/yum.repos.d/CentOS-Base.repo` 文件，在 `mirrorlist=` 开头行前面加 `#` 注释掉；并将 `baseurl=` 开头行取消注释（如果被注释的话），把该行内的域名（例如`mirror.centos.org`）替换为 `mirrors.tuna.tsinghua.edu.cn`。

或者，你也可以直接使用如下内容覆盖掉 /etc/yum.repos.d/CentOS-Base.repo 文件（未经充分测试）：

- CentOS 8

  ```
  # CentOS-Base.repo
  #
  # The mirror system uses the connecting IP address of the client and the
  # update status of each mirror to pick mirrors that are updated to and
  # geographically close to the client.  You should use this for CentOS updates
  # unless you are manually picking other mirrors.
  #
  # If the mirrorlist= does not work for you, as a fall back you can try the
  # remarked out baseurl= line instead.
  #
  #
  
  
  
  [BaseOS]
  name=CentOS-$releasever - Base
  baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/BaseOS/$basearch/os/
  #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=BaseOS&infra=$infra
  enabled=1
  gpgcheck=1
  gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
  
  [AppStream]
  name=CentOS-$releasever - AppStream
  baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/AppStream/$basearch/os/
  #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=AppStream&infra=$infra
  enabled=1
  gpgcheck=1
  gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
  
  [PowerTools]
  name=CentOS-$releasever - PowerTools
  baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/PowerTools/$basearch/os/
  #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=PowerTools&infra=$infra
  enabled=0
  gpgcheck=1
  gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
  
  
  #additional packages that may be useful
  [extras]
  name=CentOS-$releasever - Extras
  baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/extras/$basearch/os/
  #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras
  enabled=1
  gpgcheck=1
  gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
  
  
  
  #additional packages that extend functionality of existing packages
  [centosplus]
  name=CentOS-$releasever - Plus
  baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/centosplus/$basearch/os/
  #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus
  gpgcheck=1
  enabled=0
  gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
  ```

- CentOS 7

  ```
  # CentOS-Base.repo
  #
  # The mirror system uses the connecting IP address of the client and the
  # update status of each mirror to pick mirrors that are updated to and
  # geographically close to the client.  You should use this for CentOS updates
  # unless you are manually picking other mirrors.
  #
  # If the mirrorlist= does not work for you, as a fall back you can try the
  # remarked out baseurl= line instead.
  #
  #
  
  
  [base]
  name=CentOS-$releasever - Base
  baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/os/$basearch/
  #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os
  enabled=1
  gpgcheck=1
  gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-7
  
  #released updates
  [updates]
  name=CentOS-$releasever - Updates
  baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/updates/$basearch/
  #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates
  enabled=1
  gpgcheck=1
  gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-7
  
  
  
  #additional packages that may be useful
  [extras]
  name=CentOS-$releasever - Extras
  baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/extras/$basearch/
  #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras
  enabled=1
  gpgcheck=1
  gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-7
  
  
  
  #additional packages that extend functionality of existing packages
  [centosplus]
  name=CentOS-$releasever - Plus
  baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/centosplus/$basearch/
  #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus
  gpgcheck=1
  enabled=0
  gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-7
  ```

- CentOS 6

  ```
  # CentOS-Base.repo
  #
  # The mirror system uses the connecting IP address of the client and the
  # update status of each mirror to pick mirrors that are updated to and
  # geographically close to the client.  You should use this for CentOS updates
  # unless you are manually picking other mirrors.
  #
  # If the mirrorlist= does not work for you, as a fall back you can try the
  # remarked out baseurl= line instead.
  #
  #
  
  
  [base]
  name=CentOS-$releasever - Base
  baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/os/$basearch/
  #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=os
  enabled=1
  gpgcheck=1
  gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-6
  
  #released updates
  [updates]
  name=CentOS-$releasever - Updates
  baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/updates/$basearch/
  #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=updates
  enabled=1
  gpgcheck=1
  gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-6
  
  
  
  #additional packages that may be useful
  [extras]
  name=CentOS-$releasever - Extras
  baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/extras/$basearch/
  #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=extras
  enabled=1
  gpgcheck=1
  gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-6
  
  
  
  #additional packages that extend functionality of existing packages
  [centosplus]
  name=CentOS-$releasever - Plus
  baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/centosplus/$basearch/
  #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=centosplus
  gpgcheck=1
  enabled=0
  gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-6
  
  
  #contrib - packages by Centos Users
  [contrib]
  name=CentOS-$releasever - Contrib
  baseurl=https://mirrors.tuna.tsinghua.edu.cn/centos/$releasever/contrib/$basearch/
  #mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=contrib
  gpgcheck=1
  enabled=0
  gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-6
  ```

更新 `yum` 软件包缓存：

```
sudo yum makecache
```

# 其它

其它 Linux 发行版更改软件源方式详询[清华大学开源软件镜像站](https://mirrors.tuna.tsinghua.edu.cn/help/AOSP/)。
---
title: Broadband - OpenWrt 软路由系统安装配置
date: 2022-07-10
last_update:
tags: broadband linux openwrt
toc: true
comment: true
pinned: false
top: false
published: false
---

最近在研究利用家庭宽带部署个人服务器，发现软路由的部署与配置是极其重要的一环。在对软路由进行了基本的了解后，打算使用著名的OpenWrt软路由系统来完成所需任务。

*由于是一边捣鼓一边写博客，有些不太关键的地方先暂且掠过，之后再填坑。*

## 硬件设备

*TBD*

## 固件种类

*TBD*



## 下载及安装

*TBD*

### 软件包安装

OpenWrt支持两种方式来安装软件包：通过LuCI进行安装和通过CLI进行安装。

#### 通过LuCI进行安装

{: .info-blockquote}
> LuCI路径：System/Software

#### 通过CLI进行安装



## 磁盘扩容

一般来说，在使用Win3DiskImager或者balenaEtcher等工具将OpenWrt系统写入磁盘后，OpenWrt默认只会占据和识别128MB的磁盘空间，而并非全部的磁盘空间。因此，为方便后续使用，对OpenWrt进行磁盘扩容是十分重要的。

### 所需软件包

- `cfdisk`：这是一个命令行磁盘管理软件包，我们需要使用它对磁盘进行分区和调整。
- `fdisk`（可选的）：这同样是一个命令行磁盘管理软件包。在这部分工作中，这个软件包不是必须的。
- `block-mount`：这是一个LuCI的挂载点管理软件包，我们需要使用它对新建的磁盘分区进行挂载和配置。

### 扩容流程



## 基本网络配置

### IPv4

### IPv6



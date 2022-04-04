---
title: Linux - C / C++ 第三方库安装
date: 2020-09-11
last_update:
tags: linux
toc: true
comment: true
pinned: false
---

在进行 Linux 系统编程时，我们常会用到各种各样的第三方库协助我们进行开发。但是安装方式往往没有很明确的说明。这里包括了我所用到过的 Linux 第三方库的安装方式。

## 系统环境

以下所有代码均基于 Ubuntu 18.04.5 amd64 版本。不保证在其它发行版上的正确性。

## Linux 默认库位置

### 头文件位置

-  `/usr/inlcude`
- `/usr/local/include`

### 库文件位置

- `/usr/lib`
- `/usr/local/lib`

## MySQL - libmysqlclient

### 包含的 C / C++ 头文件

- `#include<mysql/mysql.h>`
- `#include<mysql/mysqld_error.h>`
- ...

### 安装方式

```shell
$ sudo apt-get install libmysqlclient-dev
```

### 头文件位置

`/usr/include`

### 库文件位置

`/usr/lib`

## OpenSSL - libssl

### 包含的 C / C++ 头文件

- `#include<openssl/sha.h>`
- `#include<openssl/md5.h>`
- `#include<openssl/aes.h>`
- `#include<openssl/rsa.h>`
- ...

### 安装方式

```shell
$ sudo apt-get install libssl-dev
```

还可以选择安装该库的文档：

```shell
$ sudo apt-get install libssl-doc
```

### 头文件位置

`/usr/include`

### 库文件位置

`/usr/lib`
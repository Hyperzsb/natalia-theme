---
title: MySQL - 常见问题与解决方案
date: 2020-08-23
last_update:
tags: mysql
toc: true
comment: true
pinned: false
top: false
---

MySQL 作为一款使用者众多的数据库软件，在业内有着极高的评价。但是我们开发者在日常使用过程中，难免会遇到一些比较棘手的问题，影响我们的开发进程。这里收集了我在使用 MySQL 过程中遇到的问题，以及我最终的解决方法。

## ERROR 2002 (HY000)

### 错误描述

Can't connect to local MySQL server through socket '/var/run/mysqld/mysqld.sock' (2)

### 错误原因

出现该错误可能原因是 MySQL 服务并不运行在本地计算机上，或者由于一些原因无法直接访问到本地 MySQL 服务。

### 解决方式

使用 `-h` 参数的 `mysql` 命令：

```shell
$ mysql -h <host_ip> -u <username> -p
```

这样可以通过手动 MySQL 服务器 IP 进而实现连接。

## ERROR 1045 (28000)

### 错误描述

Access denied for user 'xxx'@'xxx.xxx.xxx.xxx' (using password: YES)

### 错误原因

出现该错误的原因通常是 MySQL 服务并不运行在本地计算机上，而用户是使用 IP 地址访问远程 MySQL 服务器的。由于安全原因，MySQL 默认不允许用户远程登录 DBMS ，而只允许来自 `localhost` 或者 `127.0.0.1` 的连接，这就导致了该错误的产生。

### 解决方式

先在 MySQL 服务器上登录 DBMS ：

```shell
$ mysql -u <username> -p
Enter password: # 输入用户名对应的密码
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 14
Server version: 8.0.18 MySQL Community Server - GPL

Copyright (c) 2000, 2020, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql>
```

接下来有两种方式进行更改：

- 直接授权法：

  ```sql
  mysql> grant all on <database>.* to '<username>'@'%';
  mysql> quit;
  ```

- 更改配置数据库法：

  ```sql
  mysql> use mysql; # 使用 mysql 配置数据库
  Database changed
  mysql> update user set host = '%' where user = '<username>'; # 更改登录位置权限
  Query OK, 1 rows affected (0.00 sec)
  Rows matched: 1  Changed: 0  Warnings: 0
  mysql> flush privileges; # 刷新 MySQL 的系统权限相关表
  mysql> quit;
  ```

重启数据库即可。

## 更多...

其它相关问题会持续更新...




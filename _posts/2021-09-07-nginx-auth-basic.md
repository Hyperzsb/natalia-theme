---
title: Nginx - 配置 Nginx auth_basic 身份验证
date: 2021-09-07
last_update:
tags: nginx cloud
toc: true
comment: true
pinned: true
top: false
---

我们在部署服务器之后，在很多场景下都要进行身份认证和访问控制的相关配置。而通常使用的访问控制方式需要后端服务器加入响应的业务逻辑进行配合（如 JWT 或者 Cookies），比较复杂。幸运的是，Nginx 已经为我们提供了简单的身份认证的功能，开箱即用。

## 概述

ngx_http_auth_basic_module模块允许通过使用“HTTP基本认证”协议验证用户名和密码来限制对资源的访问。

访问还可以根据地址、子请求的结果或JWT进行限制。同时通过地址和密码限制访问由满足指令控制。

## 基本配置

### 生成密码

为了安全考虑，auth_basic 功能必须在起“用户名-密码”文件中使用经过 Hash 的密码值，故需要对明文密码进行处理。可以选择的生成工具有 Apache 服务器发行版中提供的 `htpasswd` 工具，以及 `openssl passwd` 命令。

使用 `openssl passwd` 命令如下：

```shell
$ openssl passwd <your_password>
```

命令将输出一段对应的 Hash 值。

也可以使用更为复杂的 Hash 规则进行生成，如使用 apr1 算法：

```
$ openssl passwd -apr1 <your_password>
```

> 在明文密码较长的情况下，需要使用后者！

### 配置用户名密码描述文件

在任意合适的位置，生成相应的用户名密码描述文件。文件的格式为：

```
# Comments
user1:password1
user2:password2:comment
user3:password3
```

例如，启用用户 `admin`，该用户的明文密码为 `123456`， 经过 Hash 处理之后的密码为 `$apr1$dbjnVHtt$VuH8VTGpuo3vJdw3PXoGC0`，则描述文件中的内容为：

```
admin:$apr1$dbjnVHtt$VuH8VTGpuo3vJdw3PXoGC0
```

### 配置 Nginx

在对应站点的配置文件中（根据 Nginx 版本的不同，配置文件所在的位置也可能不同，可能在 `conf.d` 目录下，也可能在 `sites-enabled` 目录下），加入如下类似的内容：

```
location / {
	auth_basic "Some description";
    auth_basic_user_file <your_conf_file_path>;
}
```

其中，`your_conf_file_path` 填入你创建说明文件的绝对路径（尽管官方文档中提到相对路径也是可以的，但是可能会出现一些问题）。

这一部分的配置可以根据你业务需要，通过更改 `location` 的路径匹配规则，对不同的路径和资源进行身份验证的限制。同时，在已经要求身份认证的父目录下，可以对特定的子目录取消身份验证要求：

```
loaction <subroute_match_rules> {
	auth_basic off;
}
```

### 测试并重启 Nginx

测试 Nginx 配置是否正确：

```shell
$ nginx -t
```

重启 Nginx：

```shell
$ nginx -s reload
```

## 常见问题

### Nginx 启动失败

#### 可能的报错信息

(21: Is a directory)

#### 可能的原因

我遇到这个问题的原因是我将用户名密码描述文件放在了位于 Nginx 配置目录下的一个子目录中，即 `sites-enabled/users/user1`，由于 Nginx 会将 `sites-enabled` 目录下的文件均视为站点配置文件，这就导致 Nginx 在读取站点配置文件时，会将该说明文件也当作站点配置文件，这显然是有问题的。

#### 解决方式

将用户名密码描述文件放置在其他无关的目录中。

### 路径匹配

由于通常情况下，auth_basic 进行限制的路径都是服务器中特殊的路径，所以在配置时，要格外注意 `loaction` 字段后路径匹配规则是否合法且正确，在多数情况下，auth_basic 不生效的原因就是由于路径匹配有误。

### 404 Not Found

一般出现这个问题，通常是由于 Nginx 中路径匹配有误，请仔细检查并修改。

### 403 Forbidden

#### 可能的原因

1. 用户名密码说明文件采用相对路径。
2. 没有在对应的路径中指定入口文件。

#### 解决方式

1. 采用绝对路径。

2. 方法有二：

   - 若该路径下确实存在入口文件（如 `index.html` 等），则加入入口文件配置说明：

     ```
     location / {
     	index index.html;
     	auth_basic "Some description";
         auth_basic_user_file <your_conf_file_path>;
     }
     ```

   - 若该路径下不存在入口文件，可以使用 `autoindex` 选项：

     ```
     location / {
     	autoindex on;
     	auth_basic "Some description";
         auth_basic_user_file <your_conf_file_path>;
     }
     ```

     > 当然，这种方法在某些场景下是不安全的。

## 参考

- [Module ngx_http_auth_basic_module](http://nginx.org/en/docs/http/ngx_http_auth_basic_module.html#auth_basic)
- [记一次使用nginx auth_basic做权限控制的坑](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#switching-remote-urls-from-https-to-ssh)


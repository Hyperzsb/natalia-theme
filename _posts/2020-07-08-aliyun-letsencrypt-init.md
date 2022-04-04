---
title: Let's Encrypt - 安装配置（阿里云）
date: 2020-07-08
last_update:
tags: cloud
toc: true
comment: true
pinned: true
---

在 HTTPS 逐渐取代 HTTP 的今天，我们也要跟上时代的脚步，用 HTTPS 协议来保护我们的网络服务。但是传统的 SSL 证书签发成本高，对于资金短缺的开发者不甚友好。所以，**Let's Encrypt** 应运而生。

## Let's Encrypt 简介

> "A nonprofit Certificate Authority providing TLS certificates to **225 million** websites."

Let's Encrypt 是一个免费、开放，自动化的证书颁发机构，由 ISRG（Internet Security Research Group）运作。ISRG 是一个关注网络安全的公益组织，其赞助商包括 Mozilla、Akamai、Cisco、EFF、Chrome、IdenTrust、Facebook等公司。ISRG 的目的是消除资金和技术领域的障碍，全面推进网站从 HTTP 到 HTTPS 过度的进程。

**更多内容详询[ Let's Encrypt 官网](https://letsencrypt.org/)**。

## Let's Encrypt 安装流程

> **通常情况下，使用 Let's Encrypt 的基本要求需要用户拥有对服务器的命令行权限（即可以通过 SSH 访问到服务器）**
>
> 本教程使用阿里云的服务器，满足上述要求。
>
> 对于不满足要求的应用场景，请参照[官网指南](https://letsencrypt.org/getting-started/#without-shell-access)。

### 安装 Certbot

> "Certbot is a free, open source software tool for automatically using Let's Encrypt certificates on manually-administrated websites to enable HTTPS."
>
> 简单来说，Certbot 就是 Let's Encrypt 的证书签发客户端，需要通过 Certbot 来获取证书。

#### 安装方法

安装方式有很多，包括：

- Certbot-Auto：一个集成脚本，可以实现 Certbot 的各个功能。**（各类网络资料上常常采用这种方式）**
- Docker：通过 Docker 安装。**（Docker 在证书自动签发和自动配置应用场景下有一定局限性）**
- 系统安装包：即通过`apt`等命令进行安装。**（本教程采用该方式）**

#### 安装流程

```shell
$ sudo apt-get update
$ sudo apt-get install software-properties-common
$ sudo add-apt-repository universe
$ sudo add-apt-repository ppa:certbot/certbot
$ sudo apt-get update
$ sudo apt-get install certbot
```

### 其它客户端

除了 Certbot 外， Let's Encrypt 还支持很多其它的签发客户端，详询[官网](https://letsencrypt.org/docs/client-options/)。

## Let's Encrypt 配置流程

### 自动模式

直接使用：

```shell
$ sudo certbot --nginx
```

该命令将会自动进行如下操作：

- 获取证书。
- 配置证书到 Nginx 服务器。
- 配置证书的自动更新。

该方式简单易行，对于只需要单域名证书的情况就已经够用了。

### 手动模式

**该模式用于申请泛域名证书。**

一般来讲，泛域名证书的申请都需要对域名进行认证。最长采用的域名认证方式是 DNS 认证（即通过添加 TXT 记录来实现认证）。

Certbot 默认支持一些 DNS 供应商的自动认证，但是很遗憾，并不支持诸如阿里云等国内的云厂商。在申请和更新证书时都需要手动添加 TXT 记录，很不方便。那该怎么办呢？

这里使用一个第三方脚本：[certbot-letencrypt-wildcardcertificates-alydns-au](https://github.com/ywdblog/certbot-letencrypt-wildcardcertificates-alydns-au)，通过它，我们就能够实现证书的自动签发和自动更新。

> 具体使用方法在该 GitHub 仓库的`README`中已经详细说明，因为该库时常更新，可以直接参照文档操作。

#### 安装

```shell
$ git clone https://github.com/ywdblog/certbot-letencrypt-wildcardcertificates-alydns-au

$ cd certbot-letencrypt-wildcardcertificates-alydns-au

$ chmod 0777 au.sh
```

#### 配置

1. 配置根域名：打开`domain.ini`如果没有你需要的根域名，添加进去即可。

2. 配置 DNS API Key：

   由于需要通过 API 操作阿里云 DNS 或者腾讯云 DNS 的记录，所以需要去域名服务商处获取 API 密钥，然后配置在 au.sh 文件中：

   - ALY_KEY 和 ALY_TOKEN：阿里云 [API key 和 Secrec 官方申请文档](https://help.aliyun.com/knowledge_detail/38738.html)。
   - TXY_KEY 和 TXY_TOKEN：腾讯云 [API 密钥官方申请文档](https://console.cloud.tencent.com/cam/capi)。
   - HWY_KEY 和 HWY_TOKEN: 华为云 [API 密钥官方申请文档](https://support.huaweicloud.com/devg-apisign/api-sign-provide.html)
   - GODADDY_KEY 和 GODADDY_TOKEN：GoDaddy [API 密钥官方申请文档](https://developer.godaddy.com/getstarted)。

3. 选择运行环境：

   - PHP（>4以上版本均可）
     - au.sh php aly add/clean：PHP操作阿里云DNS，增加/清空DNS。
     - au.sh php txy add/clean：PHP操作腾讯云DNS，增加/清空DNS。
     - au.sh php godaddy add/clean：PHP操作GoDaddy DNS，增加/清空DNS。
   - Python（支持2.7和3.7，无需任何第三方库）
     - au.sh python aly add/clean：Python操作阿里云DNS，增加/清空DNS。
     - au.sh python txy add/clean：Python操作腾讯云DNS，增加/清空DNS。
     - au.sh python hwy add/clean：Python操作华为云DNS，增加/清空DNS。
     - au.sh python godaddy add/clean：Python操作GoDaddy DNS，增加/清空DNS。

4. 测试申请（`--dry-run`）

   ```shell
   $ sudo certbot certonly \
   	# 配置要申请的域名。*.host.domain是泛解析域名的申请。可以使用-d参数一次添加多个域名
   	-d *.example.com \ 
   	# 采用手动模式
   	--manual \ 
   	# 采用 DNS 认证方式
   	--preferred-challenges dns \
   	# 测试运行，并不真的运行
      --dry-run \
      # 认证钩子，使用下载的脚本进行认证和清理
      --manual-auth-hook "/脚本目录/au.sh python aly add" --manual-cleanup-hook "/脚本目录/au.sh python aly clean" \
      # 证书申请的前置钩子和后置钩子，用于停止和启动 Nginx 服务器
      --pre-hook "sudo systemctl stop nginx.service" --post-hook "sudo systemctl start nginx.service" 
   ```

   > 在运行中可能需要你输入一个邮箱进行消息提醒，输入你的邮箱即可

   > 我在使用时并没有使用前置钩子和后置钩子，不清楚是否会影响到证书的自动更新。有待后续测试。

5. 申请

   将上述命令中的`--dry-run`去掉重新运行即可。

6. 自动更新

   > 根据各类文档，Certbot 已经设置了自动更新任务，应当不需要手动进行设置。如果后期出现默认配置不能进行自动更新的情况，再对本教程进行更新。

## 遇到的问题

### [X509] no certificate or crl found

如果在证书申请阶段程序报出该错误，可以使用如下方式尝试解决：

```shell
# 重装 CA 证书
$ sudo apt remove ca-certificates
$ sudo apt install ca-certificates
$ curl -I https://www.gnu.org/
# 重装 Cartbot
$ sudo apt install certbot
# 重新执行出错的相应 Certobt 命令，例如：
$ certbot certonly -d subdomain.example.com
```

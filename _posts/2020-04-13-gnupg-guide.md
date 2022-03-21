---
title: GnuPG - 指南
date: 2020-04-13
last_update:
tags: tools
toc: true
comment: true
pinned: false
---

PGP是一款基于RSA非对称加密算法的加密软件。而它的GNU发行版即为GnuPG。我们可以利用它生成自定义的公私钥对，并实现对指定内容的加密、解密和签名操作。

# GnuPG 安装

## 软件下载

访问[GnuPG官网](https://www.gnupg.org/)进行下载（由于美国限制加密技术出口，该软件只能通过相应的镜像站下载，在此我选用的是[日本的镜像站](http://www.ring.gr.jp/pub/net/gnupg/binary/)）。

## 软件安装

根据安装向导的提示进行安装。

## 安装验证

打开命令行（cmd，power shell，wsl均可），输入：

```shell
$ gpg --version
```

若产生类似以下的输出即为安装完成：

```
gpg (GnuPG) 2.2.9
libgcrypt 1.8.3
Copyright (C) 2018 Free Software Foundation, Inc.
License GPLv3+: GNU GPL version 3 or later <https://gnu.org/licenses/gpl.html>
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Home: /*此处为你的软件主目录*/
Supported algorithms:
Pubkey: RSA, ELG, DSA, ECDH, ECDSA, EDDSA
Cipher: IDEA, 3DES, CAST5, BLOWFISH, AES, AES192, AES256, TWOFISH,
        CAMELLIA128, CAMELLIA192, CAMELLIA256
Hash: SHA1, RIPEMD160, SHA256, SHA384, SHA512, SHA224
Compression: Uncompressed, ZIP, ZLIB, BZIP2
```

# 生成密钥

使用命令生成自己的密钥：

```shell
# 一般场景
$ gpg --gen-key
# 或者，与上者等价
$ gpg --generate-key
# 快速生成密钥
$ gpg --quick-generate-key
# 生成全功能密钥，这里采用这一参数
$ gpg --full-generate-key
```

输出如下：

```shell
$ gpg --full-generate-key
gpg (GnuPG) 2.2.9; Copyright (C) 2018 Free Software Foundation, Inc.
This is free software: you are free to change and redistribute it.
There is NO WARRANTY, to the extent permitted by law.

Please select what kind of key you want:
   (1) RSA and RSA (default)
   (2) DSA and Elgamal
   (3) DSA (sign only)
   (4) RSA (sign only)
Your selection?
```

默认选项是(1)，即加密和签名都采用RSA算法。

输入`1`或者直接回车，系统将询问你所要生成的密钥长度：

```
RSA keys may be between 1024 and 4096 bits long.
What keysize do you want? (2048)
```

输入`2048`或者直接回车，系统将询问密钥的有效期：

```
Please specify how long the key should be valid.
         0 = key does not expire
      <n>  = key expires in n days
      <n>w = key expires in n weeks
      <n>m = key expires in n months
      <n>y = key expires in n years
```

如果密钥仅仅是私人使用，那么完全可以选择第一项，即永不过期。

随后系统将向你确认以上信息的正确性：

```
Is this correct? (y/N)
```

输入`y`继续。系统将要求你提供个人信息：

```
GnuPG needs to construct a user ID to identify your key.

Real name:
```

输入你的真实姓名，下一步：

```
Email address:
```

输入你的邮箱地址，下一步：

```
Comment:
```

输入注释（可以省略）。

信息录入完毕后，你的ID就生成了：

```
You selected this USER-ID:
    "Zhang San (First key) <ZhangSan@email.com>"

Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit?
```

根据提示可以修改上述信息（`N`：修改姓名，`C`：修改注释，`E`：修改邮箱），如输入无误，输入`O`进行下一步。

这时系统会要求你输入一个保险密码，以防止误操作擅自动用私钥。输入密码，下一步：

```
We need to generate a lot of random bytes. It is a good idea to perform
some other action (type on the keyboard, move the mouse, utilize the
disks) during the prime generation; this gives the random number
generator a better chance to gain enough entropy.
```

系统需要很大的随机字节，而用户随机敲击键盘、移动鼠标等操作将很好地提高系统所需的熵。

之后，密钥就很快的生成出来了！如果看到如下输出，将证明这一点：

```
...
gpg: key /*一串由用户ID所生成的Hash值*/ marked as ultimately trusted
...
public and secret key created and signed.

pub   rsa2048 /*日期*/ [SC]
      /*密钥代码*/
uid                      Zhang San (First key) <ZhangSan@email.com>
sub   rsa2048 /*日期*/ [E]
```

在生成密钥之后，最好再生成生成一个“撤销证书“，用于之后的密钥作废：

```shell
# 填入自己的用户ID或者生成的Hash值
$ gpg --gen-revoke <user_id or user_id_hash>
# 或者
$ gpg --generate-revocation <user_id or user_id_hash>
```

# 密钥管理

## 列出所有的密钥

```shell
$ gpg --list-keys
gpg: checking the trustdb
gpg: marginals needed: 3  completes needed: 1  trust model: pgp
gpg: depth: 0  valid:   1  signed:   0  trust: 0-, 0q, 0n, 0m, 0f, 1u
/*公钥文件路径*/
------------------------------------------------
pub   rsa2048 /*日期*/ [SC] /*公钥特征*/
      /*Hash值*/
uid                      Zhang San (First key) <ZhangSan@email.com>
sub   rsa2048 /*日期*/ [E] /*私钥特征*/
...
```

## 删除密钥

```shell
# 删除公钥
$ gpg --delete-keys <user_id or user_id_hash>
# 删除私钥
$ gpg --delete-secret-keys <user_id or user_id_hash>
```

## 输出密钥

```shell
# 生成的密钥以二进制形式存储
# --armor参数可将其转化为ASCII码形式
# 转换公钥
$ gpg --armor --output <output_file> --export <user_id or user_id_hash>
# 转换私钥
$ gpg --armor --output <output_file> --export-secret-keys <user_id or user_id_hash>
```

## 上传公钥

```shell
# 公钥服务器是网络上专门储存用户公钥的服务器
# --send-keys参数可以将公钥上传到服务器
$ gpg --send-keys <user_id or user_id_hash> --keyserver hkp://subkeys.pgp.net
```

> 使用上面的命令，你的公钥就被传到了服务器[subkeys.pgp.net](hkp://subkeys.pgp.net)，然后通过交换机制，所有的公钥服务器最终都会包含你的公钥。
>
> 由于公钥服务器没有检查机制，任何人都可以用你的名义上传公钥，所以没有办法保证服务器上的公钥的可靠性。通常，你可以在网站上公布一个公钥指纹，让其他人核对下载到的公钥是否为真。fingerprint参数生成公钥指纹。
>
> ```shell
> $ gpg --fingerprint <user_id or user_id_hash>
> ```

## 加载密钥

```shell
# --import可以将他人的公钥或者你的其他密钥输入系统
$ gpg --import <key_file>
# 或者在公钥服务器上进行查找
$ gpg --keyserver hkp://subkeys.pgp.net --search-keys <user_id or user_id_hash>
```

# 文件的加密和解密

## 加密文件

假使你有一个想要加密的文件，该如何操作才能达成你的目标呢？

```shell
# --encrypt参数用于加密数据
# --recipient参数用于指定接受者的公钥
$ gpg --recipient <user_id or user_id_hash> --output <output_file> --encrypt <input_file>
```

## 解密文件

当收信方收到密文后，就可以用自己的私钥进行解密：

```shell
# --decrypt参数用于解密数据
$ gpg --decrypt <encrypted_file> --output <output_file>
# 或者直接使用
$ gpg <encrypted_file>
# 解密结果将在命令行直接输出
```

# 签名

## 对文件进行签名

有时，我们不需要加密文件，只需要对文件签名，表示这个文件确实是发信者本人发出的。

```shell
# --sign参数用于签名操作
$ gpg --sign <file>
# 运行结果将会在当前目录生成一个<file>.gpg文件，这个文件就是签名后的文件
# 这个文件默认采用二进制进行存储

# --clear-sign参数用于生成ASCII码的签名文件
$ gpg --clear-sign <file>
# 运行结果将在当前目录生成一个<file>.asc，后缀名asc表示为ASCII格式

# --detach-sign参数单独生成签名文件，与文件内容分开存储
$ gpg --detach-sign <file>
# 运行结果将在当前目录生成一个<file>.sig，该文件是二进制的
# --armor参数将生成ASCII格式的签名文件
$ gpg --armor --detach-sign <file>
```

## 签名和加密

如果想达成签名和加密同时进行的目的，可以使用：

```shell
# --local-user参数指定用发信者的私钥签名，--recipient参数指定用接收者的公钥加密
$ gpg --local-user <send_user_id or send_user_id_hash> --recipient <receive_user_id or receive_user_id_hash> --armor --sign --encrypt <file>
```

## 签名验证

有了签名后的文件，如何验证该文件签名是否属实呢？

```shell
# --verify用于签名验证
$ gpg --verify <file>.asc <file>
```

# 参考

- [Gnu 隐私卫士 (GnuPG) 袖珍 HOWTO (中文版)](https://www.gnupg.org/howtos/zh/index.html)
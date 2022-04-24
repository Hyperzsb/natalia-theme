---
title: Maven - 国内镜像源
date: 2020-04-11
last_update:
tags: maven mirror
toc: true
comment: true
pinned: false
top: false
---

在配置Maven或者Spring项目时，常常会出现下载依赖失败的问题。大多数情况下都是国内网络环境的问题。更换Maven默认的软件源会立竿见影地解决这个问题。

## 问题症状

IDE报错如下：

```
Could not transfer artifact org.springframework.boot:spring-boot-starter-parent:pom:2.2.4.RELEASE from/to nexus (http://repo.maven.apache.org/maven2): Failed to transfer file http://repo.maven.apache.org/maven2/org/springframework/boot/spring-boot-starter-parent/2.2.4.RELEASE/spring-boot-starter-parent-2.2.4.RELEASE.pom with status code 501
```

一般来讲出错的种类和原因有很多，解决方式也不尽相同，在此只以网络环境问题作为该症状的症结所在。

（这里报错的问题其实应该是该版本Maven对应的默认源的默认传输协议为Http，而实际默认源的默认传输协议以迁移到Https上，且停止了对Http的支持，才导致无法下载依赖）

---

## 解决方法

添加阿里云的仓库为Maven项目的默认仓库。

在pom.xml中`<project>`块（即root块）下添加如下代码：

```xml
<repositories>
	<repository>
    	<id>alimaven</id>
        <url>https://maven.aliyun.com/repository/public</url>
    </repository>
</repositories>

<pluginRepositories>
	<pluginRepository>
		<id>alimaven</id>
        <url>https://maven.aliyun.com/repository/public</url>
    </pluginRepository>
</pluginRepositories>
```

Reimport Maven项目即可。

## 参考

- [IDEA中Maven依赖包下载不了的问题解决方案汇总](https://blog.csdn.net/jwcxs_m/article/details/80076909)
- [IDEA里Maven依赖无法下载的解决办法](https://blog.csdn.net/weixin_36795183/article/details/79408167)


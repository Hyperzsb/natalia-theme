---
title: Git - .gitignore忽略文件夹
date: 2020-05-04
last_update:
tags: git
toc: true
comment: true
pinned: false
---

众所周知，`.gitignore`文件是用来描述哪些文件应当被版本库跟踪，而哪些文件不应当被版本库跟踪。但是今天遇到了一个忽略文件夹失效的问题，特此记录。

# 问题描述

今天在做Python项目时，发现Python解释器在运行完程序后会在模块目录留下一个`__pycache__`文件夹，其中包含有很多与模块`*.py`文件同名、并以`.cpython-38.pyc`作为后缀的文件。

> `__pycache__`文件夹是用来缓存模块功能的，其中的文件即是模块文件生成的字节码文件。在模块没有改动的前提下，下一次调用将直接解使运行字节码文件，省去了解使源代码的步骤。

大家都知道这样的缓存文件是不应该被版本库追踪的啦，所以我要想办法把他们从版本库中移除

# .gitignore语法

由于`__pycache__`文件夹的相对位置是这样的：

 ```
---project
 |---module
 | |---__pycache__
 | | |---__init__.cpython-38.pyc
 | | |---module.cpython-38.pyc
 | |---__init__.py
 | |---module.py
...
 ```

所以，我根据我的“经验”，同时这也是网上查到的方式，向`.gitignore`添加了如下内容：

```
...
# __pycache__
*/__pycache__/
...
```

但是，经过了种种测试，发现该方法并不奏效。迷惑......

后来我想到了GitHub官方发布的`.gitignore`文件，他们一定很好的解决了这个问题！

> GitHub官方`.gitignore`文件：[github / gitignore](https://github.com/github/gitignore)

于是乎，我找到下面这样的代码：

```
# Byte-compiled / optimized / DLL files
__pycache__/
*.py[cod]
*$py.class
...
```

官方文件在第一部分就给出了我想要的答案！

根据这个，我大致得到以下结论：

**如果想要忽略名称为\<name\>的文件夹，无论该文件夹所在版本库的相对位置，一概使用以下语法进行忽略：**

```
<name>/
```

# 注意事项

如果想要忽略的文件已经被版本库所追踪，请先将其从版本库中移除：

```shell
# 单个文件
$ git rm --cached <file>
# 目录
$ git rm -r --cached <dir>
# 如果不能顺利移除，可以使用-f强制移除
$ git rm -r -f --cached <dir>
```

只有这样`.gitignore`才能正确生效。
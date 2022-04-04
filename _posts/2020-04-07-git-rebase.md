---
title: Git - rebase命令
date: 2020-04-07
last_update: 
tags: git 
toc: true
comment: true
pinned: false
---

`git rebase` (变基) 命令是用来改变一串提交是以什么为基础的。与`git merge`类似，这是Git中很重要的一个概念。而它与`git merge`的区别与联系却往往令人感到困惑。

## git rebase \<dest_branch\> \<orig_branch\>

向前移植\<orig_branch\>到\<dest_branch\>，例如：

```shell
$ git rebase master feature
```

## git rebase -i \<HEAD\>

重新排序、编辑、删除、合并多个提交，例如：

```shell
$ git rebase -i master~9
```

之后会产生例如下面所示的界面输出

```
pick 0e1783e Update CNAME
pick 7f7a0ea Update _config.yml
pick cf34fdb Update docs
pick 42daafc Update post.html
pick 098f802 Add 2020-04-07-Git-rebase-command.md

# Rebase 3eca66b..098f802 onto 42daafc (5 commands)
#
# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# b, break = stop here (continue rebase later with 'git rebase --continue')
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
```

根据提示，进行所需的命令操作

### pick

Git将根据pick的顺序对提交进行重新排序

当然这一过程可能引发很多冲突，需要进行手动解决，解决后，使用

```shell
$ git add <file>
```

来添加解决了冲突的文件，并使用

```shell
$ git rebase --continue
```

继续后续的变基操作，如果感觉某些地方不妥，可以使用

```shell
$ git rebase --abort
```

取消此次变基操作

### squash

Git将会把指定的提交合并到它的上一个提交中，以减少提交个数

### drop

删除某次你认为不必要或产生重复的提交

## rebase合并

与merge类似，我们在某种情况下要采用rebase对分支进行合并，称**变基合并**，需要注意的是

- 变基把提交重写成新提交
- 不可达的就提交会消失
- 如果在变基的源分支上存在以此为基础的分支，你可能需要反过来对它进行变基<sup>[1]</sup>
- **多用户情况下变基会产生很多问题**

### git reabse --preserve-merges \<dest_branch\> \<orig_branch\>

在源分支上有若干合并记录的情况下，如果你想保存合并历史的拓扑结构，可以使用该命令进行操作

## rebase后push到远程仓引发冲突的解决方案

由于rebase后本地分支通常会落后或异构于远程仓的分支，需要通过如下方式来解决这一问题

### git push --force origin \<branch\>

强制使用本地分支覆盖远程分支，即操作后本地分支什么样远程分支就什么样

但是如果有多个人在同一分支上工作，该命令可能导致状态不一致以及合并冲突等问题

在这种情况下，可以考虑下面的方式

### git push --force-with-lease origin \<branch\>

该命令在强制覆盖前会进行一次检查，如果有其他人在该分支上工作，提交会发出一个警告，此时可通过协商等方式进行解决，而非产生令他人不知情的变更

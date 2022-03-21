---
title: Ruby - 国内镜像源
date: 2020-04-11
last_update:
tags: ruby mirror
toc: true
comment: true
pinned: false
---

作为国内的开发者，时常因为软件源受到限制而在`gem install ...`和`bundle install`时痛不欲生，有时即便是科学上网也不能完美地解决这一问题。无奈，只好换用国内镜像源罢了。

# 方法

## 使用命令行进行修改

```shell
# 添加国内源并且删除默认源
$ gem sources --add https://gems.ruby-china.com/ --remove https://rubygems.org/
# 在某些情况下可以先考虑清除源缓存（默认可以跳过这一步）
$ gem sources --clear-all
# 更新源缓存
$ gem sources --update
```

查看源：

```shell
# 测试gem源
$ gem sources -l
> *** CURRENT SOURCES ***
> 
> https://gems.ruby-china.com/
# 成功！
```

## 在Gemfile中进行修改

```ruby
# 一般的默认源
source "https://rubygems.org"
# 修改为国内镜像源
source "https://gems.ruby-china.com/"
```

> 并不推荐在一个项目中配置多个软件源。 对于99%需要一个`Gemfile`的项目，你的源通常会被设置为`https://rubygems.org`。只要你设置的源是合法可用的Rubygems仓库就是可以使用的。

在`Gemfile`顶部定义一个源的同时，也可以针对每一个`gem`定义一个源（也可以为一个本地`gem`定义一个path路径或git路径）。

当`Bundler`尝试定位一个`gem`时，会首先查看该`gem`有没有显示地设置源。

- 如果有，就先使用这个源。如果你在设置`gem`的时候有使用source, path或者git依赖的话，`Bundler`将会先在这些地方找，然后再去其他地方寻找。

- 如果没有被显示设置的话，`Bundler`将会依照你`Gemfile`里面定义的源的顺序来找。如果一个`gem`能够在多个源里面被找到的话（虽然这是极为罕见的，因为你最好只定义一个源），你将会得到一个warning来提示你哪个源被使用了。

譬如这样：

```ruby
source "https://my_awesome_source.com" do
  gem "my_gem"
  gem "my_other_gem"
end
```

# 常用Gem源

- https://gems.ruby-china.com/

  > 首推这个镜像源，速度很快。
  >
  > **https://gems.ruby-china.org/不再可用！**

- http://rubygems.org/

- https://rubygems.org/

- http://gems.github.com/

- http://gems.rubyforge.org/

- http://ruby.taobao.org/

  > 之前的淘宝镜像源，但是已经不再维护了。

# 参考

- [What is a Gemfile](https://tosbourn.com/what-is-the-gemfile/) - 中译版 - [Gemfile 详解](https://blog.csdn.net/efvn2008/article/details/48392047)


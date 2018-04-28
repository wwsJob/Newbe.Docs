---
layout: post
title: 免费构建自己的博客-开发环境安装
categories: web
tags: jekyll web
NavBuildYourOwnBlogForFree: true
---

本文将对本系列涉及到的主要软件安装过程进行统一说明。

# 开发环境

操作系统：Windows 10 Pro 版本作为演示版本，其他能够支持运行 Docker 的操作系统同样可行，但需要自行探究如何使用。

本系列教程将以 **Windows 10 Pro** 作为开发环境进行演示。

# Atom

Atom 是 Github 发布的开源跨平台文本编辑器。

作为本系列编写博客的主要文本编辑器，其中的若干插件对于编写博客较为便利。

以下便是安装的主要过程。

## 下载

通过官网链接，下载适合当前操作系统的版本。链接：<https://atom.io/>

{% include into-common-group.md %}

## 安装

Atom 安装过程非常简单，不断的下一步即可。

## 插件

为了编写博客，需要安装一些便利插件，提升编写体验。

建议安装的插件有以下几个：

名称              | 说明
--------------- | -------------------
language-docker | 支持对Dockerfile进行高亮处理
jekyll          | 支持jekyll中的一些模板标签提示
tidy-markdown   | 支持markdown文档自动格式化

### 安装过程

以下以安装 tidy-markdown 为例进行说明。

首先，关闭Atom。

按下`Win+X`，然后按下`A`，从而以管理员身份启动控制台或PowerShell。

输入以下命令，并回车：

```bash

apm install tidy-markdown
```

经过一段时间的等待之后，控制台输出`done`，则表明安装成功。

### 不可告人的技巧

如果打开的是powershell，运行以下命令，可实现批量安装：

```bash

"language-docker","jekyll","tidy-markdown" | foreach { apm install $_ }
```

## 设置Atom

为方便在资源浏览器中打开Atom，可以通过在Atom中进行以下设置：

![设置Atom]({{ site.baseurl }}/assets/i/20180428-001.gif)

设置之后，便可以在文件夹中通过右键，快速打开Atom。

![打开Atom]({{ site.baseurl }}/assets/i/20180428-002.png)

# Docker for Windows

Docker 可以让你在一个隔离的环境中安装你需要的软件，而不会产生过大的开销。

本系列教程主要通过Docker来安装Jekyll环境，避免在Windows上进行太多复杂的环境安装。

## 启用Hyper-v

## 安装Docker For Windows

## 设置国内Docker镜像(mirror)

## 尝试启动

# Git Extensions

通过Git可以对你的博客内容进行版本管理，确保博客不会因为本计算机的奔溃而导致巨大的损失。

Git Extensions 是 Git 的一个图形化操作工具，可以更加方便的进行Git操作。

类似软件还有Git GUI/SourceTree/Tortoise Git等，读者可以根据自己的习惯选用。

## 下载

Git Extensions 是一个开源项目，软件本体发布在Github上，可以通过项目Release页面，下载最新的**SetupComplete**版本：<https://github.com/gitextensions/gitextensions/releases>

{% include into-common-group.md %}

## 安装

![安装GitExtensions03]({{ site.baseurl }}/assets/i/20180428-003.png)

![安装GitExtensions04]({{ site.baseurl }}/assets/i/20180428-004.png)

![安装GitExtensions05]({{ site.baseurl }}/assets/i/20180428-005.png)

![安装GitExtensions06]({{ site.baseurl }}/assets/i/20180428-006.png)

![安装GitExtensions07]({{ site.baseurl }}/assets/i/20180428-007.png)

![安装GitExtensions08]({{ site.baseurl }}/assets/i/20180428-008.png)

![安装GitExtensions09]({{ site.baseurl }}/assets/i/20180428-009.png)

![安装GitExtensions10]({{ site.baseurl }}/assets/i/20180428-010.png)

![安装GitExtensions11]({{ site.baseurl }}/assets/i/20180428-011.png)

![安装GitExtensions12]({{ site.baseurl }}/assets/i/20180428-012.png)

![安装GitExtensions13]({{ site.baseurl }}/assets/i/20180428-013.png)

![安装GitExtensions14]({{ site.baseurl }}/assets/i/20180428-014.png)

![安装GitExtensions15]({{ site.baseurl }}/assets/i/20180428-015.png)

![安装GitExtensions16]({{ site.baseurl }}/assets/i/20180428-016.png)

![安装GitExtensions17]({{ site.baseurl }}/assets/i/20180428-017.png)

![安装GitExtensions18]({{ site.baseurl }}/assets/i/20180428-018.png)

![安装GitExtensions19]({{ site.baseurl }}/assets/i/20180428-019.png)

![安装GitExtensions20]({{ site.baseurl }}/assets/i/20180428-020.png)

![安装GitExtensions21]({{ site.baseurl }}/assets/i/20180428-021.png)

![安装GitExtensions22]({{ site.baseurl }}/assets/i/20180428-022.png)

![安装GitExtensions23]({{ site.baseurl }}/assets/i/20180428-023.png)

![安装GitExtensions24]({{ site.baseurl }}/assets/i/20180428-024.png)

{% include Nav-Build-Your-Own-Blog-For-Free.md %}

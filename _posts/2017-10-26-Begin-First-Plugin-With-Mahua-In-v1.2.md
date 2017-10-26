---
layout: post
title: 开始第一个插件
categories: Docs Mahua
tags: Mahua CQP Amanda SDK
---

本示例将会使用"鹦鹉学舌"这个小插件的实现来演示如何使用`Newbe.Mahua`实现第一个机器人插件。

# 插件功能

自动将发送者的消息回发给发送人，鹦鹉（英文：Parrot）学舌。

# 环境要求

- .Net Framework 4.5.2 及以上
- Visual Studio 2015 update 3 及以上(推荐 2017)
- powershell 3.0及以上

> 以下内容均采用vs2017作为演示IDE

# 新建项目

项目名称**至少**需要包含三部分，形如AAA.BBB.CCC的形式。

![新建项目]({{ site.baseurl }}/assets/i/20170613-d51f6524.png)

# 安装nuget包

[Nuget是什么？点击学习](http://www.cnblogs.com/nizhenghua/p/6422078.html)

本SDK是多目标平台的SDK。可以根据你的需求安装对应的nuget包，我们将这些nuget包称为`平台支持包`详细罗列如下：

平台                              | nuget包
------------------------------- | ------------------
酷Q（<https://cqp.im）>            | Newbe.Mahua.CQP
Amanda（<http://www.52chat.cc/）> | Newbe.Mahua.Amanda

可以在同一个项目中安装多个`平台支持包`，如此一来，一个项目进行开发，多个平台同时支持。

本示例将安装`Newbe.Mahua.CQP`和`Newbe.Mahua.Amanda`。

除了安装`平台支持包`之外，还可以安装`Newbe.Mahua.Tools.Psake`这个nuget，我们称为`开发工具包`。

`开发工具包`提供了在开发过程中一些必要的自动化过程，例如版本打包等。

> 若想要安装最新的开发版，可以勾选"包含预发行版"。 由于框架在不断演进，因此尽可能早的升级到最新的版本。

# 实现插件

新建`MahuaModule.cs`文件，将以下代码复制进去：

<script src="https://gitee.com/yks/codes/kgvczq07t3wudbo9p2xms86/widget_preview?title=Newbe.Mahua.Plugins.Parrot.cs">
</script>

# 生成与打包

生成项目，然后双击位于项目根目录的`build.bat`文件。

# 复制文件到机器人平台

在`bin`目录下会按照当前安装的平台生成相应的目录。本示例将会生成CQP和Amanda两个目录。

分别将两个目录中的文件复制到对应的**机器人平台根目录**。

# 启用插件

## CQP

打开酷Q文件夹下的 `conf\CQP.cfg` 文件，并在文件末尾插入以下两行，即可开启开发者模式。

```ini
[Debug]
DeveloperMode=1
```

打开插件管理将插件启用。

## Amanda

打开插件管理将插件启用。

# 成功！

发送消息给机器人，你就会收到机器人回发的信息。

> 机器人插件启动可能需要一段时间，并且大多数平台都会丢弃离线信息，可能需要等待一会儿在发送。

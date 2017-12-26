---
layout: post
title: 开始第一个插件【适用于v1.0-1.1】
categories: Docs Mahua
tags: Mahua CQP Amanda SDK
---

本示例将会使用"鹦鹉学舌"这个小插件的实现来演示如何使用`Newbe.Mahua`实现第一个机器人插件。

# 插件功能

自动将发送者的消息回发给发送人，鹦鹉（英文：Parrot）学舌。

# 环境要求

- .Net Framework 4.5.2 及以上
- Visual Studio 2015 update 3 及以上(推荐 2017)

> 以下内容均采用vs2017作为演示IDE

# 新建项目

项目名称**至少**需要包含三部分，形如AAA.BBB.CCC的形式。

![新建项目]({{ site.baseurl }}/assets/i/20170613-d51f6524.png)

# 安装nuget包

![安装nuget包]({{ site.baseurl }}/assets/i/20170613-f51fc24f.png)

打开nuget包管理器，搜索`Mahua`。根据你希望运行的机器人平台安装`Newbe.Mahua.*`的nuget包。

本示例希望运行在多个平台上，因此安装以下nuget包：

- Newbe.Mahua.CQP
- Newbe.Mahua.Amanda

> 若想要安装最新的开发版，可以勾选"包含预发行版"。 由于框架在不断演进，因此尽可能早的升级到最新的版本。

# 修改`Newbe.Mahua.props`文件

<script src="https://gist.coding.net/u/pianzide1117/761656c11c174566858f93254f468dd9.js">
</script>

# 实现插件

新建`MahuaModule.cs`文件，将以下代码复制进去：

<script src="https://gist.coding.net/u/pianzide1117/39ad556c28ac451dbef5fe938d934a4c.js">
</script>

# 生成解决方案

若出现生成失败请多次重试，多次重试失败请认栽。

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

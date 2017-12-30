---
layout: post
title: Newbe.Mahua.Samples.Sqlite SQLite操作实例
categories: Docs Mahua ReleaseNodes
tags: Mahua SDK
mahua: true
---

文本将通过实现一个记录"收到消息数量"的功能，来演示如何在本SDK中操作数据库的SQLite数据库。

# 软硬条件

名           | 值
----------- | --------
IDE         | VS2017.5
Newbe.Mahua | 1.6

# 业务逻辑

当收到好友消息时，将消息记录在数据库中。

同时将当前数据库中已经存储的消息数目，发送给消息发送者。

实测效果图：

![最终效果]({{ site.baseurl }}/assets/i/20171230-003.png)

# 新建项目

使用`Newbe.Mahua.Plugins.Template`模板创建项目，项目名称为`Newbe.Mahua.Samples.Sqlite`。

新建项目的详细细节，可以参照右侧链接内容：[新建项目]({{ site.baseurl }}/docs/mahua/2017/12/16/Begin-First-Plugin-With-Mahua-In-v1.4.html#新建项目)

# 业务逻辑实现

业务逻辑比较简单，主要实现两个方法："保存好友消息"和"获取消息数量"。

为了提升多核CPU的利用率，相关接口都采用异步的方式进行定义。~~实际上时为了让新手看不懂~~

业务接口代码如下：

<script src="https://gist.coding.net/u/pianzide1117/78d8db32578d4181aba1ef03d1fff9ed.js">
</script>

在`MahuaEvents`下添加"好友消息接收事件"，并在事件内调用业务逻辑。实现代码如下：

> MahuaEvents文件夹是本SDK建议将事件放置的文件夹位置。也可以不接受建议而添加在其他地方。

<script src="https://gist.coding.net/u/pianzide1117/9aac8a1c992044bfbc6e8b842372c3da.js">
</script>

至此业务逻辑便实现完毕。

# 单元测试

业务逻辑已经实现完毕，接下来对业务逻辑编写单元测试进行验证。~~其实这么简单的逻辑，看一眼就知道没错~~

单元测试项目相关的内容可以参看右侧的教程：[单元测试]({{ site.baseurl }}/docs/mahua/2017/12/25/Newbe-Mahua-Tests.html#测试)

此处只将业务逻辑的关键测试代码展示出来：

<script src="https://gist.coding.net/u/pianzide1117/f1e546c39bad4a6fbc855e1fb6d7302d.js">
</script>

# 数据库操作实现

## 定义数据库操作接口

单元测试通过之后便表明当前业务逻辑都已经正确实现了。

接下来进一步就可以实现业务接口的实现类了。

为了完成业务逻辑，本实例至少需要"初始化数据库"、"查询数据库"和"向数据库插入数据"三个数据库操作方法。

其中的"查询数据库"和"向数据库插入数据"可以简单定义为"创建数据库链接即可"。

为了提升多核CPU的利用率，相关接口都采用异步的方式进行定义。~~实际上时为了让新手看不懂~~

数据库操作接口定义如下：

<script src="https://gist.coding.net/u/pianzide1117/b1a09237e10c4ad991660acb1d9674bb.js">
</script>

## 使用SQLite实现数据库操作

SQLite数据库操作，通过官方提供的类库便可以完成。

通过 nuget 安装以下nuget包：

- System.Data.SQLite.Core
- Dapper
- Dapper.Contrib

其中`System.Data.SQLite.Core`是数据库驱动，`Dapper`则是对`ADO.NET`操作的扩展包。

新建`应用程序配置文件`。

![应用程序配置文件]({{ site.baseurl }}/assets/i/20171230-002.png)

在应用程序配置文件中配置以下内容：

<script src="https://gist.coding.net/u/pianzide1117/b1c07f041151475a853d8003eb97c7f7.js">
</script>

添加数据库操作实现类`SqliteDbHelper`,详细代码如下：

<script src="https://gist.coding.net/u/pianzide1117/b40b418f89474f2788a118029844b493.js">
</script>

## 编写业务实现类

完成了业务接口的定义和数据操作的定义，接下来只要将两者结合起来，便可以实现业务实现类。

添加`FriendMessageStore`类，详细代码如下：

<script src="https://gist.coding.net/u/pianzide1117/0d9c3cc90ff44de9920cbcfcc7fc7154.js">
</script>

## 在插件启动时初始化数据库

数据库的初始化，需要在插件启动时进行调用。

在`MahuaEvents`下添加"插件初始化事件"，并在事件内调用业务逻辑。实现代码如下：

> MahuaEvents文件夹是本SDK建议将事件放置的文件夹位置。也可以不接受建议而添加在其他地方。

<script src="https://gist.coding.net/u/pianzide1117/b3c0531b395c4045b44566d8fb03c7d2.js">
</script>

# 模块注册

以上所有的接口与实现类与接口，都不要忘记在模块中进行注册，以下是`MahuaModule`的完整代码：

<script src="https://gist.coding.net/u/pianzide1117/5ea6037102fb408ebf39c62c3f9c016e.js">
</script>

# 集成测试

万事具备，只欠生成。

生成解决方案，运行`build.bat`，复制相关的 DLL 到对应的平台，向机器人发送消息，效果达成！

以下是 CQP 平台的测试效果。~~其实其他的没测试~~

![最终效果]({{ site.baseurl }}/assets/i/20171230-003.png)

# 总结

数据库操作本身并不困难。

开发过程中采用基于接口开发的基本思想，结合单元测试，不论是开发简单的插件还是复杂的项目，都是可靠的方法。

若SQLite无法满足项目要求，只要将多实现一个`IDbHelper`便可以完成了，开发者可以动手体验。

实例的项目代码，可以在源码仓库中的`Newbe.Mahua.Samples`解决方案下找到。

{% include NewbeMahuaNavigation.md %}

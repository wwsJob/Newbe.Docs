---
layout: post
title: Newbe.Mahua.Samples.ApiExtensions 对IMahuaApi进行扩展
categories: Docs Mahua
tags: Mahua SDK
mahua: true
---

本教程将通过对CQP进行API扩展为例，来实现以下功能：

- 扩展CQP原生不支持的获取好友列表接口
- 替换CQP原生的发送好友消息接口
- 通过`Newbe.Mahua.CQP.ApiExtensions`实现扩展CQP原生不支持的发送群公告接口

对于其他平台的扩展都可以参考此教程。

# 软硬条件

名           | 值
----------- | --------
IDE         | VS2017.5
Newbe.Mahua | 1.7

# 业务逻辑

当收到好友消息的时候，获取好友列表。

将好友列表的数据写入到群公告中。

替换发送好友消息接口，实际上将好友消息写入到日志文件中。

# 新建项目

使用`Newbe.Mahua.Plugins.Template`模板创建项目，项目名称为`Newbe.Mahua.Samples.ApiExtensions`。

新建项目的详细细节，可以参照右侧链接内容：[新建项目]({{ site.baseurl }}/docs/mahua/2017/12/16/Begin-First-Plugin-With-Mahua-In-v1.4.html#新建项目)

# 业务逻辑实现

本教程主要为了演示API的调用效果，因此只需要实现"好友消息接收事件"即可，具体代码如下：

在`MahuaEvents`下添加"好友消息接收事件"，并在事件内调用业务逻辑。实现代码如下：

> MahuaEvents文件夹是本SDK建议将事件放置的文件夹位置。也可以不接受建议而添加在其他地方。

<script src="https://gist.coding.net/u/pianzide1117/30246ec6d5e0463da188764319c8c746.js">
</script>

# 扩展API

以下采用三种方式扩展API。

## 自己实现原来不支持的

`IMahuaApi.GetFriends`在CQP平台下，原生是不支持的，本节可以通过添加实现类来进行扩展。

在`MahuaApis`下添加"获取好友列表"。并实现代码如下：

> MahuaApis 文件夹是本SDK建议将API扩展放置的文件夹位置。也可以不接受建议而添加在其他地方。

![添加获取好友列表]({{ site.baseurl }}/assets/i/20180107-001.png)

<script src="https://gist.coding.net/u/pianzide1117/8223fd1d42de4a078e8b5fd7cbda5941.js">
</script>

## 替换原来就支持的

`IMahuaApi.SendPrivateMessage`接口是CQP平台原生就支持的接口。

本节将通过扩展来覆盖原有的逻辑，将需要发送的消息写入到日志文件中。

在`MahuaApis`下添加"发送私聊消息"。并实现代码如下：

> MahuaApis 文件夹是本SDK建议将API扩展放置的文件夹位置。也可以不接受建议而添加在其他地方。

<script src="https://gist.coding.net/u/pianzide1117/a1b99f00e97c47078ea45eef3e87ff26.js">
</script>

## 引入扩展包

`IMahuaApi.SetNotice`在CQP平台下，原生是不支持的。

为了给开发者提供更多便利的功能。本SDK提供了`Newbe.Mahua.*.ApiExtensions`系列 nuget 包。

插件使用者只需要引入这些 nuget 并恰当的注册，便可以实现对平台原生不支持的API进行扩展。

在项目源码下`Readme.md`的MahuaApi支持列表详细记录了平台原生支持的API和扩展包支持的API。

`Newbe.Mahua.CQP.ApiExtensions` 1.7 版本实现了 CQP 平台下发送群公告的功能，因此，通过 nuget 直接安装此包即可。

# 模块注册

以上三种方式实现API的扩展都需要在模块中进行注册，具体的注册代码如下：

<script src="https://gist.coding.net/u/pianzide1117/ca5896a7220a4ef7b62914f80c9fbb7d.js">
</script>

# 集成测试

万事具备，只欠生成。

生成解决方案，运行`build.bat`，复制相关的 DLL 到对应的平台，向机器人发送消息，效果达成！

以下是 CQP 平台的测试效果。~~其实其他的没测试~~

![API注册]({{ site.baseurl }}/assets/i/20180107-002.png)

![好友消息]({{ site.baseurl }}/assets/i/20180107-003.png)

# 总结

不同平台具备不同的API支持范围。通过自定义扩展和扩展包的引入，可以弥合各平台之间的不同。

`Newbe.Mahua.*.ApiExtensions`系列 nuget 包的实现需要依托社区发展方可进一步完善，欢迎您参与其中。

实例的项目代码，可以在源码仓库中的`Newbe.Mahua.Samples.ApiExtensions`解决方案下找到。

{% include NewbeMahuaNavigation.md %}

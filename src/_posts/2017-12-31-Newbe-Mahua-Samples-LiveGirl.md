---
layout: post
title: Newbe.Mahua.Samples.LiveGirl 操作定时任务
categories: Docs Mahua
tags: Mahua SDK
mahua: true
---

B站直播姬！定时向群友通知群主何时进行女装直播的消息。

# 软硬条件

名           | 值
----------- | --------
IDE         | VS2017.5
Newbe.Mahua | 1.6

# 业务逻辑

收到 "直播姬起飞" 的消息后，启动定时任务，每个整点时，检测B站直播间当前是否正在直播。

如果正在直播，就向群发送 "群主正在女装" 的消息。

收到 "直播姬降落" 的消息后，取消所有定时任务。

![最终效果]({{ site.baseurl }}/assets/i/20171231-001.png)

# 新建项目

使用`Newbe.Mahua.Plugins.Template`模板创建项目，项目名称为`Newbe.Mahua.Samples.LiveGirl`。

新建项目的详细细节，可以参照右侧链接内容：[新建项目]({{ site.baseurl }}/docs/mahua/2017/12/16/Begin-First-Plugin-With-Mahua-In-v1.4.html#新建项目)

# 业务逻辑实现

定义直播姬接口`ILiveGirl`，包含 "启动" 和 "停止" 两个基础方法。以便收到消息命令后对定时任务进行启停。

为了提升多核CPU的利用率，相关接口都采用异步的方式进行定义。~~实际上时为了让新手看不懂~~

业务接口代码如下：

<script src="https://gist.coding.net/u/pianzide1117/8f95555422134a18a3698accdaf647d7.js">
</script>

在`MahuaEvents`下添加"好友消息接收事件"，并在事件内调用业务逻辑。实现代码如下：

> MahuaEvents文件夹是本SDK建议将事件放置的文件夹位置。也可以不接受建议而添加在其他地方。

<script src="https://gist.coding.net/u/pianzide1117/6712e75915704af8bd6d935a2e9f2f7e.js">
</script>

至此直播姬的启停便实现完毕。

# 定时任务

定时任务的实现方式多种多样，可以利用`Timer`进行简单实现，也可以使用一些定时任务的类库进行实现。

比较流行的有：~~其实我也就知道两个~~

- Quartz.net
- Hangfire

本例程将使用`Hangfire`来实现这一个功能。

## 安装 nuget 包

安装以下 nuget 包：

- Hangfire.Core
- Hangfire.MemoryStorage
- Hangfire.Autofac
- Microsoft.Owin.Hosting
- Microsoft.Owin.Host.HttpListener

`Hangfire`相关内容是实现定时任务功能。

`Microsoft.Owin.*`则实现了在非IIS进程中托管Web服务的功能。

## 插件启动时初始化Web服务

Hangfire 需要通过Web服务来展示当前的任务状态情况。

添加 `IWebHost` 接口，以便在插件初始化时，初始化Web服务。

<script src="https://gist.coding.net/u/pianzide1117/0ed8dc3675a24c31a9941c58fb412d15.js">
</script>

Web服务的初始化，需要在插件启动时进行调用。

在`MahuaEvents`下添加"插件初始化事件"，并在事件内调用初始化。实现代码如下：

> MahuaEvents文件夹是本SDK建议将事件放置的文件夹位置。也可以不接受建议而添加在其他地方。

<script src="https://gist.coding.net/u/pianzide1117/37ad126e385443878f0d0e7593b9476b.js">
</script>

## 添加Hangfire初始化代码

Owin 的启动入口是一个名为`Startup`的启动类，为了初始化`Hangfire`，则需要创建启动类，并初始化`Hangfire`。

代码如下：

<script src="https://gist.coding.net/u/pianzide1117/b0ac56f3b75f4133ad20904cd67c495f.js">
</script>

## 实现IWebHost

上代码：

<script src="https://gist.coding.net/u/pianzide1117/44f9bcc333c24673995ceff8e094da7b.js">
</script>

# 实现直播姬

基础设施已经在上一节完成，接下来就要实现直播姬和定时任务之间的调度代码。

## 获取直播间状态

直播间状态可以通过捕捉HTTP请求，看出如何实现。

本例程，将引入 `RestSharp` nuget 包来实现HTTP请求。

定义直播间接口`ILiveRoom`并添加实现类。

<script src="https://gist.coding.net/u/pianzide1117/e54860d14d3e49699c7ecaf7cf649a00.js">
</script>

## Livegirl

来吧，终于可以实现直播姬了。

<script src="https://gist.coding.net/u/pianzide1117/ad131d1630834cb9b7dd38193172f8f0.js">
</script>

# 模块注册

以上所有的接口与实现类与接口，都不要忘记在模块中进行注册，以下是`MahuaModule`的完整代码：

<script src="https://gist.coding.net/u/pianzide1117/a879dd22d3104ba98e23bb32dda73c51.js">
</script>

# 集成测试

万事具备，只欠生成。

生成解决方案，运行`build.bat`，复制相关的 DLL 到对应的平台，向机器人发送消息，效果达成！

以下是 CQP 平台的测试效果。~~其实其他的没测试~~

![最终效果]({{ site.baseurl }}/assets/i/20171231-001.png)

# 总结

一般的定时任务只需要使用`Timer`就能够实现了，引入`Hangfire`主要是为了体现框架本身的可扩展性。~~分明是为了装逼~~

HTTP的捕捉，可以使用`Fiddler`等Web调试工具实现。~~又要自己学~~

例程中写死的字符串，应当通过文件配置进行保存，可以自行改造。

实例的项目代码，可以在源码仓库中的`Newbe.Mahua.Samples`解决方案下找到。

{% include NewbeMahuaNavigation.md %}

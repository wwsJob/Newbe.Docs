---
layout: post
title: Newbe.Mahua 1.6.0 开发便利性提升
categories: Docs Mahua ReleaseNodes
tags: Mahua SDK
mahua: true
releaseNodes: true
---

此次版本发布主要围绕"开发便利性提升"特性。可调试行、可追踪性都有进一步提升。

# 版本亮点

## 提供日志接口

可以通过`ILog Logger = Newbe.Mahua.Logging.LogProvider.For<T>()`创建日志接口的实例，并通过实例写日志。

日志接口通过[LibLog](https://github.com/damianh/LibLog)实现。

依托于该项目的灵活性，可以在流行的日志框架之间进行切换，包括：

- NLog
- Log4Net
- EntLib Logging
- Serilog
- Loupe

本SDK默认使用NLog，详细内容可以通过[LibLog](https://github.com/damianh/LibLog)进行了解。

## 支持全局异常事件

添加了`IExceptionOccuredMahuaEvent`接口，运行出现异常事件。

当插件运行过程中出现异常时，将会触发此事件。

开发者可以在此事件中了解异常的原因，同时提供了`ContinueThrows`参数，允许开发者阻止异常的抛出。

默认情况下，当框架出现异常时，将调用日志接口写下日志。

不再需要处处`try...catch`。

## 支持应用程序配置文件（app.config）

从 1.6 开始，将会支持 app.config 的配置。

由此，便可以实现 程序集重定向、AppSettings和ConnectionStrings等.Net高级配置内容。

详细的使用方法可以参照下文中的 [Newbe.Mahua.Samples.Sqlite SQLite操作实例]({{ site.baseurl }}/docs/mahua/2017/12/30/Newbe-Mahua-Samples-Sqlite.html) 。

## 支持调试框架源码

从 1.6 开始，框架将采用 Debug 模式进行版本发布。

同时，依托 VS2017.5 版本的"源链接支持"和"[SourceLink](https://github.com/ctaggart/SourceLink)"的支持，开发者可以实现不需要下载源码，便可以实现调试框架源码的目的。

![开启源链接支持]({{ site.baseurl }}/assets/i/20171230-001.png)

## 增加调用SQLite操作的例子和说明

为了响应社区要求，添加了操作SQLite数据库的教程。

通过 异步操作、依赖注入和单元测试等关键内容，为开发者给出开发建议。

教程链接： [Newbe.Mahua.Samples.Sqlite SQLite操作实例]({{ site.baseurl }}/docs/mahua/2017/12/30/Newbe-Mahua-Samples-Sqlite.html)

## 增加单元测试与调试SDK的说明

添加了 [Newbe.Mahua 测试与调试]({{ site.baseurl }}/docs/mahua/2017/12/25/Newbe-Mahua-Tests.html) 教程。

教程链接：[Newbe.Mahua 测试与调试]({{ site.baseurl }}/docs/mahua/2017/12/25/Newbe-Mahua-Tests.html)

# BUG修复

- 修复VS2015和VS2017同时安装在一台机器上时，build.bat运行出错的问题。
- 修复了如果没有安装平台扩展(例如：Newbe.Mahua.Administration)，build.bat运行出错的问题。

# 升级注意

从 1.5 版本直接更新全部的 Newbe.Mahua.* nuget 包，重新生成便可以。

升级过程中若出现需要覆盖build.ps1的提示，允许即可。

VS插件更新只需要安装VS提示进行操作即可。

{% include NewbeMahuaNavigation.md %}

---
layout: post
title: Newbe.Mahua的技术细节
categories: Docs Mahua
tags: Mahua SDK
mahua: true
---

Newbe.Mahua为开发人员提供了统一的开发接口，降低了开发人员开发QQ机器人的难度。本文将介绍该框架的技术实现细节，为想要对本框架进行改造或扩展的开发者提供指导。

若开发者只是希望使用该框架开发机器人，阅读本文也将大有好处。

# 托管代码与非托管代码

本框架对接的机器人平台大多为易语言实现的应用程序，这些平台通过提供非托管接口实现平台与插件的通信。

易语言开发产出的 DLL 和 C++ 编译生成的 DLL 本质上没有差异。对于 .Net 平台而言，都属于非托管代码。

## .Net 调用非托管代码

.Net Framework 在 `System.Runtime.InteropServices`名称空间下，提供了 `DllImportAtrribute` 配合静态方法，便可以实现 .Net 语言对非托管代码的调用，此部分内容读者可以参考链接文章：<http://blog.sina.com.cn/s/blog_3e51bb390102vv6b.html>

## 非托管代码调用 .Net

机器人平台大多没有特意实现此部分内容，但作为非托管代码，他们支持调用其他的非托管代码，因此只需要将 .Net 开发的程序集编译出相应的非托管程序集，便可以实现被机器人平台调用。

此部分内容相对较为复杂，开源项目[DllExport](https://github.com/3F/DllExport)为我们提供了便捷的实现方案，读者可以移步该项目查看如何使用。

# .Net AppDomain

# MessagePack 二进制序列化

# 命令模式与 MediatR

# IoC

# 日志

# SourceLink

{% include NewbeMahuaNavigation.md %}

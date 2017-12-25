---
layout: post
title: Newbe.Mahua 测试与调试
categories: Docs Mahua
tags: Mahua CQP Amanda MPQ SDK
mahua: true
---

测试与调试是开发过程当中不可缺少的环节。本教程将通过对"鹦鹉学舌"插件对"如何测试与调试Newbe.Mahua".

# 测试

测试分类多种多样，其中，"单元测试"是最开始的细粒度测试。

掌握单元测试的技能，将会在使用Newbe.Mahua进行开发时无往不利的成功秘诀。

本教程将使用VS2017作为开发IDE进行演示。

## 新建测试项目

![新建测试项目]({{ site.baseurl }}/assets/i/20171225-001.png)

## 引入测试框架

.Net测试框架众多，主流的有MSTest、NUnit和XUnit。本教程选择XUnit进行演示。

通过 nuget 安装以下包，全部安装最新版本即可：

- xunit
- xunit.runner.visualstudio
- FluentAssertions
- Autofac.Extras.Moq

可以不用先了解每个包时什么作用，看了代码，自然就会清楚。

## 添加单元测试代码

先看一下需要测试的"鹦鹉学舌"插件的核心逻辑，将消息回发给消息发送者。

<script src="https://gitee.com/yks/codes/cy8n95glp0ja6t3er27mw40/widget_preview?title=%E5%B0%86%E5%A5%BD%E5%8F%8B%E4%BF%A1%E6%81%AF%E4%BC%9A%E5%8F%91%E7%BB%99%E5%A5%BD%E5%8F%8B">
</script>

通过项目引用，引用"Newbe.Mahua.Plugins.Parrot"项目。

在新建的测试项目"Newbe.Mahua.Plugins.Parrot.Tests"中新建一个类"ParrotTest"，并填写以下代码：

<script src="https://gitee.com/yks/codes/vwyxfamq7k4lo25hjes9t81/widget_preview?title=ParrotTest">
</script>

通过阅读代码的注释，相信真正的勇士已经领会了其中的奥义。

## 运行测试代码

![运行测试]({{ site.baseurl }}/assets/i/20171225-002.png)

**来吧！真正的勇士，就绿了它们！**

## 需求变化

需求变了，只有消息当中有"收到回复"这个字符串，那么才需要回发，并且要删除其中的"收到回复"字符串。

在测试项目新加一个实现类，来实现上面的业务逻辑。

<script src="https://gitee.com/yks/codes/2kuaomewyxl01cj9zsh6b14/widget_preview?title=PrivateMessageFromFriendReceivedMahuaEventV2">
</script>

显然，这个业务逻辑，至少需要两个单元测试。一个测试的消息中包含"收到回复"，另一个则不包含。

由此，新建"ParrotTestV2"类，并填写以下代码：

<script src="https://gitee.com/yks/codes/8hl0pwimus7bf3yznjda237/widget_preview?title=ParrotTestV2">
</script>

自己手动尝试的过程中可能会出现，没出现"绿"的问题。不要放弃，要么测试错了，要么业务逻辑错误。电脑是不会错的。

其实上面的业务逻辑中是存在BUG的：QQ无法发送空的消息，所以，如果对方的消息只包含"收到回复"四个字，那么真正运行的时候会报错。

因此，要增加额外的逻辑判断和单元测试，来确保这个BUG不会发生。**真正的勇士，自己就会动手。**

## 最后

单元测试就是为了确保代码逻辑在小范围内绝对正确的开发行为，很有必要。

**单元测试只要Newbe.Mahua提供的接口稳定，自己的业务逻辑没有变化，那么你的业务逻辑就永远能够通过单元测试。也就是说，这段代码就是为了确保你有底气说出："我的代码不可能出错！"**

以上演示代码，均可以在本项目代码仓库中找到。

# 调试

单元测试是开发阶段最初的测试，但事实是，绝大多数的人更喜欢"跑一下看看"。因此调试，也就很有必要。

## 构建

在构建脚本`build.ps1`中，将`$configuration`从`Release`改为`Debug`，然后运行`build.bat`完成构建。

![修改构建参数]({{ site.baseurl }}/assets/i/20171225-003.png)

## 复制

将生成的所有内容复制到对应机器人平台。

## 启动调试

修改项目属性中的调试选项卡配置，并且将插件项目设置为启动项目，F5启动调试，下断点，命中，就这么简单。

![修改调试启动项目]({{ site.baseurl }}/assets/i/20171225-004.png)

至此，调试便可以正常进行了。

{% include NewbeMahuaNavigation.md %}

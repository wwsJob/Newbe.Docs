---
layout: post
title: 开始第一个插件【适用于v1.4及以上】
categories: Docs Mahua
tags: Mahua CQP Amanda MPQ SDK
top: true
---

本示例将会使用"鹦鹉学舌"这个小插件的实现来演示如何使用`Newbe.Mahua`实现第一个机器人插件。

# 插件功能

自动将发送者的消息回发给发送人，鹦鹉（英文：Parrot）学舌。

# 开发环境要求

- .Net Framework 4.5.2 及以上
- Visual Studio 2017（VS2015 update 3 理论上也能够开发，但开发遇到的问题，需自行解决）
- powershell 3.0及以上

# 设置Powershell执行策略限制

参考链接：<http://www.pstips.net/powershell-create-and-start-scripts.html>

简单来说，使用管理员权限在cmd中运行以下命令:

```cmd
powershell -command "Set-ExecutionPolicy RemoteSigned -Force"
```

# 安装VS扩展

从VS扩展商店下载最新的VS扩展，下载地址为：<https://marketplace.visualstudio.com/items?itemName=Newbe36524.NewbeMahuaVsExtensions>

若出现下载不畅通，也可以通过加入技术交流群，在群文件中进行下载。[点击加入Newbe.Mahua群【610394020】](https://jq.qq.com/?_wv=1027&k=4AMMCTx)

**安装过程可能需要花费若干分钟，需耐心等待。**

**安装完毕，需要重启所有VS方可生效。**

# 新建项目

项目名称**至少**需要包含三部分，形如AAA.BBB.CCC的形式。

新建项目时，可以根据"希望支持的插件平台"来选择特定后缀的项目模板来安装。

`Newbe.Mahua.Plugins.Template`是安装了所有平台支持包的项目模板。本示例将使用此项目模板进行演示。

本插件项目名称使用`Newbe.Mahua.Plugins.Parrot`。

![新建项目]({{ site.baseurl }}/assets/i/20171216-001.png)

# 修改插件基本信息

打开`PluginInfo.cs`文件，按照实际需求和注释内容进行修改。

<script src="https://gitee.com/yks/codes/m9hacduk3j50l2qnr6w7191/widget_preview?title=gistfile1.txt">
</script>

# 添加"接收好友消息事件"代码实现

在`MahuaEvents`处右键，选择"添加->新建项"。

> MahuaEvents文件夹是本SDK建议将事件放置的文件夹位置。也可以不接受建议而添加在其他地方。

![添加->新建项]({{ site.baseurl }}/assets/i/20171216-002.png)

如下图所示，选择"来自好友的私聊消息接收事件"。

![新建好友消息处理事件]({{ site.baseurl }}/assets/i/20171217-001.png)

在`PrivateMessageFromFriendReceivedMahuaEvent.cs`中，调用`IMahuaApi`，将好友消息回发给好友，实现鹦鹉学舌的效果。

<script src="https://gitee.com/yks/codes/cy8n95glp0ja6t3er27mw40/widget_preview?title=%E5%B0%86%E5%A5%BD%E5%8F%8B%E4%BF%A1%E6%81%AF%E4%BC%9A%E5%8F%91%E7%BB%99%E5%A5%BD%E5%8F%8B">
</script>

# 在模块中注册事件

打开`MahuaModule.cs`文件，在`MahuaEventsModule`中注册刚刚添加的`PrivateMessageFromFriendReceivedMahuaEvent`。

<script src="https://gitee.com/yks/codes/wlrkzocjhfidng2vytm6s64/widget_preview?title=%E6%B3%A8%E5%86%8C%E4%BA%8B%E4%BB%B6">
</script>

# 生成与打包

生成项目，然后双击位于项目根目录的`build.bat`文件。

![build.bat执行成功]({{ site.baseurl }}/assets/i/20171217-002.png)

# 复制文件到机器人平台

在`bin`目录下会按照当前安装的平台生成相应的目录。本示例将会生成CQP、Amanda和MPQ三个目录。

分别将三个目录中的文件复制到对应的**机器人平台根目录**。

各机器人软件下载地址：

名称     | 地址
------ | ------------------------------------------
CQP    | <https://cqp.cc/>
MPQ    | <https://f.mypcqq.cc/thread-2327-1-1.html>
Amanda | <http://www.52chat.cc/>

# 启用插件

各个机器人平台的启用方式各不相同。

## CQP

打开酷Q文件夹下的 `conf\CQP.cfg` 文件，并在文件末尾插入以下两行，即可开启开发者模式。

```ini
[Debug]
DeveloperMode=1
```

打开插件管理将插件启用。

## MPQ

打开插件管理将插件启用。

## Amanda

打开插件管理将插件启用。

# 成功！

发送消息给机器人，你就会收到机器人回发的信息。

> 机器人插件启动可能需要一段时间，并且大多数平台都会丢弃离线信息，可能需要等待一会儿在发送。

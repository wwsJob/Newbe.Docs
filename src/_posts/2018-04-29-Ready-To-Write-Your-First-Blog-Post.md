---
layout: post
title: 免费构建自己的博客-编写第一篇博客
categories: web
tags: jekyll web
NavBuildYourOwnBlogForFree: true
---

本节，将开始编写第一篇属于自己的博客。

# 先别着急写

首先可以先试试下载本站的源码，部署一下。

## 下载源码

点击右侧链接：<https://github.com/Newbe36524/Newbe.Docs>。

在界面的右上角点击 Star 获取下载权限。

![点击Star获取下载权限]({{ site.baseurl }}/assets/i/20180429-002.png)

点击完成之后，滚动滚轮到下图所示位置，依次点击"Clone and Download"和复制按钮，便成功获得了下载地址。

![获取下载地址]({{ site.baseurl }}/assets/i/20180429-003.png)

新建一个空的文件夹，双击进入文件夹，右键点击文件夹空白处，点击 GitExt Clone。

![点击GitExt Clone]({{ site.baseurl }}/assets/i/20180429-001.png)

在下图所示的位置，填入下载地址，然后点击右下角的`Clone`按钮。

![点击GitExt Clone]({{ site.baseurl }}/assets/i/20180429-004.png)

经过一段时间的等待之后，便可以在当前文件夹看到下载成功的源码。

~~其实存在国内加速地址：<https://gitee.com/yks/Newbe.Docs>~~

## 启动博客

右键点击`run.cmd`，点击"使用管理员身份运行"。

第一次启动时，Docker 会要求将设置磁盘共享，这是正常情况。要求当前系统用户的用户名和密码。

![Share Disk]({{ site.baseurl }}/assets/i/20180429-006.png)

![Enter Username And Password]({{ site.baseurl }}/assets/i/20180429-007.png)

第一次启动时，可能需要消耗40秒左右的时间，此时界面可能是空白的，可以等待控制台输出下图信息时，才表明已经启动成功。

![启动博客日志]({{ site.baseurl }}/assets/i/20180429-005.png)

经过一段时间的等待之后，浏览器就会自动打开 <http://127.0.0.1:4000> 。

控制台打开后即使手动关闭，docker 也会在后台运行，但建议不要手动关闭此控制台。

# 开始编写

接下来演示，如何在本站现有的结构上增加一片博客文章。

## 文件夹结构

首先介绍一下源代码的主要结构：

```bash

├─docs            # 用于存在最终生成的博客文件
└─src             # 源代码文件夹
    ├─assets      # 存放除了html之外的静态文件，例如css js等
    ├─modules     # 存放jekyll插件的源码，主要是他人的仓库，用于借鉴，可以不必存留
    ├─_includes   # 存放局部视图，将可复用的组件存放于此
    ├─_layouts    # 存放布局文件，用于对博客的大体页面结构进行控制
    ├─_plugins    # jekyll插件
    └─_posts      # 存放博客文章
```

## 添加博文

使用资源管理器，进入`src`文件夹。右键点击文件夹空白处，选择`Open With Atom`。

进入Atom之后，右键点击`_post`文件夹，选择`New File`，输入新博文的文件名。

文件名的格式要求是`时间-名称.md`。

比如，今天是2018年4月29日，博文的名称叫做My-First-Post，那么文件名就是`2018-04-29-My-First-Post.md`。

此次演示就输入2018-04-29-My-First-Post.md

![第一篇博文名称]({{ site.baseurl }}/assets/i/20180429-009.png)

点击回车之后，文件就创建好了，此时，若没有关闭上节中提到的控制台，那么在控制台的末尾将会输入下图所示的内容。

![触发自动生成]({{ site.baseurl }}/assets/i/20180429-008.png)

最后一行表示，已经自动生成了一片博文。此时博文的内容是看空的，在博客中还找不到。

但是，这就表明，博客编写的过程中，可以只关注与编写博客内容，复杂的生成过程会自动处理。

## 编写内容

添加过第一篇博文之后，在Atom中，双击打开刚刚添加的`2018-04-29-My-First-Post.md`文件。

在文件中输入以下内容：

```markdown

---
layout: post
title: 喜欢您来，肯打鸡欢迎您
categories: demo
tags: jekyll demo
---

喜欢您来，肯打鸡欢迎您。

是的，如果你希望答谢本站内容给你带来的帮助，那么可以通过以下途径支持本站。

是的，一整页都是关于如何资助本网站。

**可以分文不花就完成对本站的支持。**

--------------------------------------------------------------------------------

# 不！花！钱！

## 七牛认证

通过以下链接，注册七牛账号，通过实名认证，本站点将会获得每个月5G的下载流量。

<https://portal.qiniu.com/signup?code=3lh1xg5arudea>

## 挖矿？

<https://authedmine.com/media/miner.html?key=70pQBVoLVg88SblKomCh9mJHBeT8nOzk>

# ~~钱、钱、钱！~~

## 支付宝

![支付宝](http://www.newbe.pro/assets/i/zhifubao.jpg){:height="600px" width="400px"}

## 微信

![微信](http://www.newbe.pro/assets/i/weixin.png){:height="400px" width="400px"}

## 开源中国

<https://gitee.com/yks/Newbe.Mahua.Framework#project-donate-overview>{:target='_blank'}
```

按下`ctrl`+`s`保存文件。

此时，在控制台中，又会出现一行提示，表明博文已经重新加载。

然后在浏览器中打开 <http://127.0.0.1:4000/demo/2018/04/29/My-First-Post.html> ，便可以看到刚刚写好的博文效果。

至此，就已经添加好了第一篇博文的内容。若读者对markdown语法有基础的了解，便可以独立撰写博文了。

对于markdown语法不太了解的读者，[可以点击此处进行学习](http://amwiki.org/doc/?file=020-%E6%95%99%E7%A8%8B%E5%AD%A6%E4%B9%A0%E7%AF%87/005-%E5%AD%A6%E4%B9%A0markdown/01-Markdown%E5%BF%AB%E9%80%9F%E5%BC%80%E5%A7%8B)，此处不再过多说明。

由于安装了 tiny-markdown 插件，保存文章时，会自动进行格式化，是正常现象。

{% include Nav-Build-Your-Own-Blog-For-Free.md %}

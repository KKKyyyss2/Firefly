---
title: 零成本搭建 Umami 网站统计，每天多少人访问一目了然
published: 2026-07-09
description: 用 Vercel 免费部署开源 Umami 统计工具，零成本拥有自己的网站数据分析后台，附完整图文教程。
image: /assets/images/umami-cover.png
tags: [Umami, Vercel, 网站统计, 开源, 建站]
category: 网站搭建
---

很多人搭好了网站，却不知道每天有多少访客、用户从哪里来、哪个页面最受欢迎。如果你也有这些困扰，今天这个开源神器值得收藏。

## Umami 是什么？

[Umami](https://github.com/umami-software/umami) 是一款开源、轻量、隐私优先的网站统计工具，可以理解为 Google Analytics 的简洁替代方案。

**核心优势：**

- ✅ 开源免费
- ✅ 界面简洁易懂
- ✅ 实时访问统计
- ✅ 访客来源分析
- ✅ 热门页面排行
- ✅ 注重用户隐私
- ✅ 部署简单

对于博客站长、AI 导航站、企业官网、独立开发者、个人主页，都可以轻松了解网站流量情况，不再靠猜测运营。

## 零成本部署教程

无需购买服务器，直接部署到 Vercel 即可使用。几分钟就能拥有属于自己的网站统计后台。

### 第一步：注册 Vercel 账号

打开 [https://vercel.com/](https://vercel.com/) 免费注册一个账号。

### 第二步：Fork 项目到 GitHub

打开 Umami 项目地址，将代码 Fork 到自己的账号下：

```
https://github.com/umami-software/umami
```

![Fork 项目](https://cos.kjkkk.ccwu.cc/2026/07/5-2.webp)

### 第三步：Vercel 导入项目

注册登录 Vercel 后进入控制台，点击 **Projects**，再点击 **Add New**：

![Vercel 控制台](https://cos.kjkkk.ccwu.cc/2026/07/6-2.webp)

### 第四步：授权 GitHub

授权自己的 GitHub 账号，找到刚 Fork 的项目，点击 **Import**：

![Import 项目](https://cos.kjkkk.ccwu.cc/2026/07/7-2.webp)

### 第五步：直接部署

可以自由填写项目名称，其它全部保持默认，直接点击 **Deploy** 部署：

![Deploy](https://cos.kjkkk.ccwu.cc/2026/07/8-2.webp)

> 由于没有提供环境变量，Vercel 会提示部署失败。不用理会，重新部署关联数据库即可成功。

### 第六步：创建数据库

返回 Vercel 控制台，点击 **Storage** 建立数据库：

![Storage](https://cos.kjkkk.ccwu.cc/2026/07/9-2.webp)

类型选择 **Neon**：

![Neon](https://cos.kjkkk.ccwu.cc/2026/07/10-2.webp)

### 第七步：配置数据库

地区选择 **新加坡**（距离近），下拉底部点击 **Continue**：

![选择地区](https://cos.kjkkk.ccwu.cc/2026/07/12-2.webp)

数据库名字随意填，下拉点击完成：

![数据库名称](https://cos.kjkkk.ccwu.cc/2026/07/13-2.webp)

### 第八步：关联项目

点击进入刚创建的数据库 → 点击 **Connect to Project** → 选择 Umami 项目 → **Connect**：

![关联项目](https://cos.kjkkk.ccwu.cc/2026/07/14-2.webp)

![Connect](https://cos.kjkkk.ccwu.cc/2026/07/15.webp)

### 第九步：重新部署

返回管理面板点击 **Deployments**，找到部署失败的那次，点击 **Redeploy**：

![Redeploy](https://cos.kjkkk.ccwu.cc/2026/07/16.webp)

等待几分钟，看到绿色 ✅ 就部署成功了：

![部署成功](https://cos.kjkkk.ccwu.cc/2026/07/17.webp)

### 第十步：返回项目

回到 Projects，即可看到项目在跑了：

![项目运行](https://cos.kjkkk.ccwu.cc/2026/07/18.webp)

## 登录后台

部署成功后，访问 Vercel 分配的域名进入 Umami 登录页：

![登录页面](https://cos.kjkkk.ccwu.cc/2026/07/19.webp)

初始账号密码：

- **用户名**：`admin`
- **密码**：`umami`

> 进去后第一时间改密码！

登录后的后台界面：

![Umami 后台](https://cos.kjkkk.ccwu.cc/2026/07/20.webp)

这是搭好的 Umami，效果还不错，数据一目了然：

![数据面板](https://cos.kjkkk.ccwu.cc/2026/07/1-2.webp)

## 绑定自定义域名（可选）

在 Vercel 项目设置 → **Domains** → 添加你自己的域名。国内访问慢的话可以套一层 Cloudflare CDN。

## 视频教程

- YouTube：[https://youtu.be/29smYzsiYYA](https://youtu.be/29smYzsiYYA)
- 哔哩哔哩：[https://b23.tv/08CAkBx](https://b23.tv/08CAkBx)

## 总结

Umami + Vercel，真正零成本拥有一个专业网站统计后台。比 Google Analytics 更轻量、更隐私、更好看。

别再靠猜运营网站了，数据说话。

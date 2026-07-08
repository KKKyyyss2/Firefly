---
title: 零成本搭建 Umami 网站统计，每天多少人访问一目了然
published: 2026-07-09
description: 用 Vercel 免费部署开源 Umami 统计工具，零成本拥有自己的网站数据分析后台，访客来源、热门页面、实时统计全搞定。
image: assets/images/umami-cover.png
tags: [Umami, Vercel, 网站统计, 开源]
category: 网站搭建
---

很多人搭好了网站，却不知道每天有多少访客、用户从哪里来、哪个页面最受欢迎。如果你也有这些困扰，今天这个开源神器值得收藏。

## Umami 是什么？

[Umami](https://github.com/umami-software/umami) 是一款开源、轻量、隐私优先的网站统计工具，可以理解为 Google Analytics 的简洁替代方案。

**核心优势：**

- 开源免费，代码透明
- 界面简洁，一眼看懂数据
- 实时访问统计，不延迟
- 访客来源分析（国家、设备、浏览器）
- 热门页面排行
- 注重隐私，不追踪用户
- 几分钟部署完成

## 零成本部署到 Vercel

不需要买服务器，直接用 Vercel 免费托管。

### 第一步：Fork 项目

打开 GitHub 项目地址，Fork 到自己账号下：

```
https://github.com/umami-software/umami
```

### 第二步：Vercel 导入

1. 注册登录 [Vercel](https://vercel.com/)
2. 进入控制台，点击 **Add New → Project**
3. 授权 GitHub，找到 Fork 的项目，点击 **Import**
4. 项目名随意填，直接点 **Deploy**

> 注意：首次部署会失败，因为还没配数据库，正常现象。

### 第三步：创建数据库

1. Vercel 控制台 → **Storage** → 新建数据库
2. 类型选 **Neon**（免费额度够用）
3. 地区选 **新加坡**（国内访问快）
4. 创建完后点 **Connect to Project**，关联到 Umami 项目

### 第四步：重新部署

返回 **Deployments**，找到失败的部署记录，点 **Redeploy**。等几分钟，看到绿色 ✅ 就成功了。

### 第五步：登录后台

部署成功后访问项目域名，初始账号：

- **用户名**：`admin`
- **密码**：`umami`

进去第一件事改密码！

## 使用效果

这是我搭建的 Umami 后台，数据一目了然：

- 实时在线人数
- 每日/每周/每月访问趋势
- 访客国家和地区分布
- 热门页面 TOP 排行
- 设备、浏览器、操作系统占比

## 绑定自定义域名（可选）

在 Vercel 项目设置 → Domains → 添加你自己的域名，比如 `stats.你的域名.com`。

要是国内访问慢，可以套一层 Cloudflare CDN 加速。

## 总结

用 Umami + Vercel，零成本就拥有了一个专业的网站统计后台。对于博客站长、独立开发者、小型项目来说，比 Google Analytics 更轻量、更隐私、更好看。

别再靠猜运营网站了，数据说话。

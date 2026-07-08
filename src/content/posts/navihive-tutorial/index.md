---
title: Cloudflare 免费搭建个人导航网站，0 成本不用服务器
published: 2026-07-09
description: 用 NaviHive + Cloudflare Workers 搭建免费个人导航站，支持拖拽分组、访客模式，0 成本永久使用。
image: https://cos.kjkkk.ccwu.cc/2026/07/12121.webp
tags: [Cloudflare, Workers, 导航站, NaviHive, 建站]
category: 网站搭建
---

这款 [NaviHive](https://github.com/qq8099/daihang) 用 Cloudflare Workers 做导航站，不花钱、全球加速、支持拖拽分组和访客模式。适合个人网址收藏、管理学习资源、团队共享常用工具链接。

![NaviHive](https://cos.kjkkk.ccwu.cc/2026/07/36636.webp)

## 一键部署（推荐小白）

**项目地址**：[https://github.com/qq8099/daihang](https://github.com/qq8099/daihang)

### 第一步：Fork 仓库

Fork 本仓库到你的 GitHub 账号，修改 `wrangler.template.jsonc` 为 `wrangler.jsonc`。

### 第二步：点击部署按钮

点击项目 README 里的 **"Deploy to Cloudflare Workers"** 按钮，登录 Cloudflare 账号。

### 第三步：配置部署参数

在部署界面填写：

- **项目名称**：为你的导航站取个名字
- **D1 数据库**：新建一个，命名为 `navigation-db`
- **环境变量**：
  - `AUTH_ENABLED`：设为 `true` 启用登录认证
  - `AUTH_USERNAME`：管理员用户名
  - `AUTH_PASSWORD`：管理员密码
  - `AUTH_SECRET`：JWT 密钥（随机字符串即可）

点击 **部署**，完成后你会得到一个 `https://你的项目名.用户名.workers.dev` 的地址。

## 初始化数据库

部署完后，进入 Cloudflare Workers & Pages → 选择你的项目 → **设置** → **数据库** → 点击 `navigation-db` → **控制台**。

逐个执行以下 SQL：

```sql
-- 创建分组表
CREATE TABLE IF NOT EXISTS groups (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    order_num INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 创建站点表
CREATE TABLE IF NOT EXISTS sites (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    group_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    url TEXT NOT NULL,
    icon TEXT,
    description TEXT,
    notes TEXT,
    order_num INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (group_id) REFERENCES groups(id) ON DELETE CASCADE
);

-- 创建配置表
CREATE TABLE IF NOT EXISTS configs (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 初始化标志
INSERT INTO configs (key, value) VALUES ('DB_INITIALIZED', 'true');
```

全部执行成功后，访问你的导航站首页，用配置的管理员账号登录即可管理。


NaviHive + Cloudflare Workers = 零成本、全球加速、免维护的个人导航站。几分钟搞定，以后再也不用手动整理书签了。

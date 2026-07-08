import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

// ============================================================================
// 导航栏配置 - 根据顺序动态生成导航栏链接
// NavBar Configuration - Dynamically generate navigation bar links based on order
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 基础导航栏链接
	const links: NavBarLink[] = [
		// 主页
		LinkPresets.Home,
	];

	// 文章及其子菜单
	links.push({
		name: "文章",
		url: "#",
		icon: "material-symbols:article",
		children: [
			// 全部分类
			LinkPresets.Categories,

			// 六个分类直达
			{
				name: "网站搭建",
				url: "/archive/?category=%E7%BD%91%E7%AB%99%E6%90%AD%E5%BB%BA",
				icon: "material-symbols:folder-outline",
			},
			{
				name: "技术分享",
				url: "/archive/?category=%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB",
				icon: "material-symbols:folder-outline",
			},
			{
				name: "资源推荐",
				url: "/archive/?category=%E8%B5%84%E6%BA%90%E6%8E%A8%E8%8D%90",
				icon: "material-symbols:folder-outline",
			},
			{
				name: "AI 工具",
				url: "/archive/?category=AI%20%E5%B7%A5%E5%85%B7",
				icon: "material-symbols:folder-outline",
			},
			{
				name: "VPS 与服务器",
				url: "/archive/?category=VPS%20%E4%B8%8E%E6%9C%8D%E5%8A%A1%E5%99%A8",
				icon: "material-symbols:folder-outline",
			},
			{
				name: "折腾日记",
				url: "/archive/?category=%E6%8A%98%E8%85%BE%E6%97%A5%E8%AE%B0",
				icon: "material-symbols:folder-outline",
			},

			// 标签
			LinkPresets.Tags,
		],
	});

	// 友链
	links.push(LinkPresets.Friends);

	// 留言板
	links.push(LinkPresets.Guestbook);

	// 我的及其子菜单
	links.push({
		name: "我的",
		url: "#",
		icon: "material-symbols:person",
		children: [
			// 相册
			LinkPresets.Gallery,

			// 追番
			LinkPresets.Anime,

			// 番组计划
			LinkPresets.Bangumi,
		],
	});

	// 关于及其子菜单
	links.push({
		name: "关于",
		url: "#",
		icon: "material-symbols:info",
		children: [
			// 打赏
			LinkPresets.Sponsor,

			// 关于页面
			LinkPresets.About,
		],
	});

	// 自定义导航栏链接
	links.push({
		name: "链接",
		url: "#",
		icon: "material-symbols:link",
		// 子菜单
		children: [
			{
				name: "GitHub",
				url: "https://github.com/CuteLeaf/Firefly",
				external: true,
				icon: "fa7-brands:github",
			},
			{
				name: "Gitee",
				url: "https://gitee.com/CuteLeaf/Firefly",
				external: true,
				icon: "fa7-brands:gitee",
			},
			{
				name: "QQ交流群",
				url: "https://qm.qq.com/q/ZGsFa8qX2G",
				external: true,
				icon: "fa7-brands:qq",
			},
			{
				name: "Firefly文档",
				url: "https://docs-firefly.cuteleaf.cn",
				external: true,
				icon: "material-symbols:docs",
			},
		],
	});

	// 文档链接
	// links.push({
	// 	name: "文档",
	// 	url: "https://docs-firefly.cuteleaf.cn",
	// 	external: true,
	// 	icon: "material-symbols:docs",
	// });

	return { links } as NavBarConfig;
};

// 导航搜索配置
export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

// ============================================================================
// 链接预设 - 可自由自定义导航栏链接的名称、图标和URL
// Link Presets - Allows free customization of the name, icon, and URL of navigation bar links
// ============================================================================
export const LinkPresets: Record<string, NavBarLink> = {
	Home: {
		name: "主页",
		url: "/",
		icon: "material-symbols:home",
	},
	Categories: {
		name: "分类",
		url: "/categories/",
		icon: "material-symbols:folder-open-rounded",
	},
	Tags: {
		name: "标签",
		url: "/tags/",
		icon: "material-symbols:tag-rounded",
	},
	Friends: {
		name: "友链",
		url: "/friends/",
		icon: "material-symbols:group",
		pageKey: "friends",
	},
	Sponsor: {
		name: "打赏",
		url: "/sponsor/",
		icon: "material-symbols:favorite",
		pageKey: "sponsor",
	},
	Guestbook: {
		name: "留言",
		url: "/guestbook/",
		icon: "material-symbols:chat",
		pageKey: "guestbook",
	},
	About: {
		name: "关于我",
		url: "/about/",
		icon: "material-symbols:person",
	},
	Bangumi: {
		name: "番组计划",
		url: "/bangumi/",
		icon: "material-symbols:movie",
		pageKey: "bangumi",
	},
	Gallery: {
		name: "相册",
		url: "/gallery/",
		icon: "material-symbols:photo-library",
		pageKey: "gallery",
	},
	Anime: {
		name: "追番",
		url: "/anime/",
		icon: "material-symbols:live-tv",
		pageKey: "anime",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();

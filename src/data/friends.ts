// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface MusicItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: MusicItem[] = [
	{
		id: 1,
		title: " 始まりは君の空",
		imgurl: "https://images.genius.com/a2307bf4c4a980a32107a1721931237b.1000x1000x1.png",
		desc: "Liella",
		siteurl: "https://youtu.be/bjIRLovzc80?si=NSYHKCsxkQj7Qz_1",
		tags: ["lovelive"],
	},
	{
		id: 2,
		title: "春日影",
		imgurl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrY00JYEp3khld-o-2kRI5q4SrqLRAI4IBng&s",
		desc: "CRYCHIC",
		siteurl: "https://youtu.be/ZsvJUh03MwI?si=5cvBVoH6gcsItd_w",
		tags: ["mygo"],
	},
	{
		id: 3,
		title: "風前の灯火",
		imgurl:
			"https://cf.shopee.tw/file/tw-11134207-7rasb-m1zfx8tznekld0",
		desc: "楠木ともり",
		siteurl: "https://youtu.be/PsnMFVDaX60?si=DyvsQAj8Ny68iBvf",
		tags: ["siger"],
	},
	{
		id: 4,
		title: "いつでも、いつまでも",
		imgurl:
			"https://p2.bahamut.com.tw/HOME/creationCover/14/0006117414_B.WEBP",
		desc: "蓮ノ空女学院スクールアイドルクラブ ",
		siteurl: "https://youtu.be/ba_6zRe902c?si=OhNqUHFUBH5MFM3a",
		tags: ["lovelive"],
	},
];

// 获取所有友情链接数据
export function getFriendsList(): MusicItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): MusicItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

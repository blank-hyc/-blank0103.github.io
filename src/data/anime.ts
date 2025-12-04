// 本地番剧数据配置
export type AnimeItem = {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
};

const localAnimeList: AnimeItem[] = [
	{
		title: "Lycoris Recoil",
		status: "completed",
		rating: 4.9,
		cover: "/assets/anime/lkls.webp",
		episodes: "13 episodes",
		year: "2022",
		genre: ["動作", "科幻"],
		studio: "A-1 Pictures",
		link: "https://ani.gamer.com.tw/animeVideo.php?sn=30008",
		progress: 13,
		totalEpisodes: 13,
		startDate: "2022-07",
		endDate: "2022-09",
	},
	{
		title: "Love Live!虹咲學園 學園偶像同好會",
		status: "completed",
		rating: 4.9,
		cover: "/assets/anime/llnj1.jpg",
		episodes: "13 episodes",
		year: "2020",
		genre: ["校園", "青春","偶像","音樂"],
		studio: "SUNRISE",
		link: "https://ani.gamer.com.tw/animeVideo.php?sn=18435",
		progress: 13,
		totalEpisodes: 13,
		startDate: "2020-10",
		endDate: "2021-01",
	},
	{
		title: "Love Live! Sunshine!! ",
		status: "completed",
		rating: 4.7,
		cover: "/assets/anime/LLSS1.png",
		episodes: "13 episodes",
		year: "2016",
		genre: ["校園", "青春","偶像","音樂"],
		studio: "SUNRISE",
		link: "https://ani.gamer.com.tw/animeVideo.php?sn=18435",
		progress: 13,
		totalEpisodes: 13,
		startDate: "2021-10",
		endDate: "2021-11",
	},
	{
		title: "Love Live! Superstar!!  ",
		status: "completed",
		rating: 4.8,
		cover: "/assets/anime/llss.jpeg",
		episodes: "12 episodes",
		year: "2021",
		genre: ["校園", "青春","偶像","音樂"],
		studio: "SUNRISE",
		link: "https://ani.gamer.com.tw/animeVideo.php?sn=23333",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2021-07",
		endDate: "2021-09",
	},
	{
		title: "BanG Dream! It's MyGO!!!!!",
		status: "watching",
		rating: 4.9,
		cover: "/assets/anime/mygo.jpeg",
		episodes: "13 episodes",
		year: "2023",
		genre: ["校園", "青春","勵志","音樂"],
		studio: "三次元",
		link: "https://ani.gamer.com.tw/animeVideo.php?sn=34030",
		progress: 7,
		totalEpisodes: 13,
		startDate: "2025-11",
		endDate: "",
	},
	{
		title: "BanG Dream! Ave Mujica",
		status: "planned",
		rating: 4.9,
		cover: "/assets/anime/am.php",
		episodes: "13 episodes",
		year: "2025",
		genre: ["校園", "青春","勵志","音樂","黑暗"],
		studio: "三次元",
		link: "https://ani.gamer.com.tw/animeVideo.php?sn=41638",
		progress: 0,
		totalEpisodes: 13,
		startDate: "",
		endDate: "",
	},
];

export default localAnimeList;

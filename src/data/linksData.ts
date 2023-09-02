type Link = {
  title: string;
  url: string;
  thumbnail?: string;
};

type LinksData = {
  [category: string]: Link[];
};


export const linksData: LinksData = {
  programming: [
    {
      title: "Github",
      url: "https://github.com/hallwayraptor",
      thumbnail: "/thumbnails/github.png",
    },
    {
      title: "Tailwind Docs",
      url: "https://tailwindcss.com/docs/installation",
      thumbnail: "/thumbnails/tailwinddocs.png",
    },
  ],
  linux: [
    {
      title: "Gaming on Linux",
      url: "https://gamingonlinux.com",
      thumbnail:
        "https://api.thumbnail.ws/api/ab34892cf495323867143cea355ac1d583581aa01390/thumbnail/get?url=https://www.gamingonlinux.com/&width=940",
    },
    {
      title: "Its Foss",
      url: "https://itsfoss.com",
      thumbnail: "/thumbnails/itsfoss.png",
    },
    {
      title: "9 to 5 Linux",
      url: "https://9to5linux.com",
      thumbnail: "https://9to5linux.com/wp-content/uploads/2023/08/wr152.webp",
    },
    {
      title: "Arch Wiki",
      url: "https://wiki.archlinux.org/",
      thumbnail: "/thumbnails/archwiki.png",
    },
  ],
  games: [
    {
      title: "Baldur's Gate 3",
      url: "/bg3",
      thumbnail: "/thumbnails/bg3.webp",
    },
    {
      title: "Tekken",
      url: "/tekken",
      thumbnail: "/thumbnails/tekken.png",
    },
    {
      title: "Guild Wars 2",
      url: "/gw2",
      thumbnail: "/thumbnails/gw2.jpg",
    },
    {
      title: "World of Warcraft",
      url: "/wow",
      thumbnail: "/thumbnails/wow.jpg",
    },
  ],
};
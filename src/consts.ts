import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "sajdakabir.me",
  EMAIL: "sajda.kbir@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Saju",
  DESCRIPTION: "sajda",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};



export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/sajdakabir",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/sajdakabir"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/sajdakabir",
  }
];

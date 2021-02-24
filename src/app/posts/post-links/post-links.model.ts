export interface Link {
  year: string;
  months: Month[];
};

export interface Month {
  month: string;
  posts: PostLink[];
};

export interface PostLink {
  title: string;
  id: string;
};

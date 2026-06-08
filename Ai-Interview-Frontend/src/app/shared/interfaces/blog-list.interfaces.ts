export interface BlogCategory {
  id: number;
  name: string;
  active?: boolean;
}

export interface BlogPost {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  readTime: string;
}

export interface FeaturedBlog {
  image: string;
  title: string;
  description: string;
  author: string;
  role: string;
  authorImage: string;
}

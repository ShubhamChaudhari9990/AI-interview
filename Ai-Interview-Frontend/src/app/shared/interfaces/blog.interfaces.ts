export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogContentSection {
  heading: string;
  content: string;
}

export interface RelatedArticle {
  title: string;
  image: string;
  category: string;
  publishDate: string;
}

export interface BlogArticle {
  category: string;
  title: string;
  description: string;
  author: Author;
  heroImage: string;
  sections: BlogContentSection[];
  tags: string[];
  relatedArticles: RelatedArticle[];
}

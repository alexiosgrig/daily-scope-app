import { Article } from "./IArticle";

export interface FetchTopHeadLinesResponse {
  status: string;
  total: number;
  articles: Article[];
}

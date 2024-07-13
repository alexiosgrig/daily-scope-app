import { FetchTopHeadLinesResponse } from '../entities';

// api/api.ts
const baseUrl = 'https://newsapi.org/';
const apiKey = '2291e15414714bcb9bf50c332f2ebf40'; // Replace with your actual API key

export const fetchTopHeadLines = async (
  page = 1,
  pageSize = 20,
  query?: string,
  sortBy: 'relevancy' | 'popularity' | 'publishedAt' = 'publishedAt'
): Promise<FetchTopHeadLinesResponse> => {
  const searchQuery = query && query.trim() !== '' ? query : 'greece';

  const response = await fetch(
    `${baseUrl}v2/everything?q=${encodeURIComponent(
      searchQuery
    )}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}&sortBy=${sortBy}`
  );
  return response.json();
};

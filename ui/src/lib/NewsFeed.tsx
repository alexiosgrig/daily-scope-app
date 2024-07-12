// components/NewsFeed.tsx
import React, { useEffect, useState } from 'react';
import { Article } from './Article';
import { FetchTopHeadLinesResponse } from './entities/IFetchTopHeadlines';
import { fetchTopHeadLines } from './api/api';

interface NewsFeedProps {
  query: string;
}

export const NewsFeed: React.FC<NewsFeedProps> = ({ query }) => {
  const [articles, setArticles] = useState<IArticle[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [sortBy, setSortBy] = useState<
    'relevancy' | 'popularity' | 'publishedAt'
  >('publishedAt'); // Default sort is 'publishedAt'

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const data = await fetchTopHeadLines(currentPage, 20, query, sortBy);
        setArticles(data.articles);
        setHasMore(data.articles.length > 0);
      } catch (err) {
        console.error('Error fetching top headlines:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [query, currentPage, sortBy]);

  const loadMoreArticles = async () => {
    setLoading(true);
    try {
      const nextPage = currentPage + 1;
      const data = await fetchTopHeadLines(nextPage, 20, query, sortBy);
      setArticles((prevArticles) => [...prevArticles, ...data.articles]);
      setCurrentPage(nextPage);
      setHasMore(data.articles.length > 0);
    } catch (err) {
      console.error('Error fetching more headlines:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-4">
      <div className="mb-4">
        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(
              e.target.value as 'relevancy' | 'popularity' | 'publishedAt'
            )
          }
          className="bg-white border border-gray-300 rounded-md p-2"
        >
          <option value="publishedAt">Newest</option>
          <option value="popularity">Most Popular</option>
          <option value="relevancy">Most Relevant</option>
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {articles.map((article) => (
          <Article key={article.url} article={article} />
        ))}
      </div>
      {hasMore && (
        <div className="mt-4 flex justify-center">
          <button
            onClick={loadMoreArticles}
            className="bg-cyan-600 text-white py-2 px-4 rounded hover:bg-cyan-700"
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
    </main>
  );
};

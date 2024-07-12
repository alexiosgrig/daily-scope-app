import React from 'react';
import { IArticle } from './entities';

interface ArticleProps {
  article: IArticle;
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
  console.log(article.urlToImage)
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Article Image */}
      {article.urlToImage ? (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            // Handle image load error
            e.currentTarget.src =
              'https://via.placeholder. /400x300?text=Image+Not+Available';
          }}
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-600">
          No Image Available
        </div>
      )}

      <div className="p-4">
        {/* Article Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {article.title}
        </h2>

        {/* Article Description */}
        <p className="text-gray-600 mb-4">{article.description}</p>

        {/* Article Content */}
        <p className="text-gray-700 mb-4">{article.content}</p>

        {/* Article Meta Information */}
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <span>By {article.author}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>

      {/* Optional: Add a border or additional content */}
      <div className="p-4 border-t border-gray-200">
        <a
          href={article.url}
          className="text-cyan-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

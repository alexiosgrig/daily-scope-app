import React, { useMemo } from 'react';
import { IArticle } from './entities';

interface ArticleProps {
  article: IArticle;
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
  const { urlToImage, title, description, content, publishedAt, author, url } =
    article;

  const isTitleRemoved = useMemo(() => title !== '[Removed]', [title]);

  return (
    isTitleRemoved && (
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        {urlToImage && (
          <img
            src={urlToImage}
            alt={title}
            className="w-full h-48 object-cover"
            loading="lazy"
          />
        )}
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-gray-700 mb-4">{content}</p>
          <div className="flex items-center justify-between text-gray-500 text-sm">
            <span>By {author}</span>
            <span>{new Date(publishedAt).toLocaleDateString()}</span>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200">
          <a
            href={url}
            className="text-cyan-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    )
  );
};

// components/Search.tsx
import React, { useState } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
}

export const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(query); // Pass the query to the parent component
  };

  return (
    <div className="p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center"
      >
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for articles..."
          className="border border-gray-300 rounded-lg p-2 flex-1"
        />
        <button
          type="submit"
          className="bg-cyan-600 text-white py-2 px-4 rounded mt-2 sm:mt-0 sm:ml-2 hover:bg-cyan-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

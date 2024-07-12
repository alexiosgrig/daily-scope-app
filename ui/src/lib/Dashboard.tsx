// components/Dashboard.tsx
import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { NewsFeed } from './NewsFeed';
import { Search } from './Search';

export const Dashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Search onSearch={handleSearch} />
      <NewsFeed query={searchQuery} />
      <Footer />
    </div>
  );
};

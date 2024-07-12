import React from 'react';

interface FooterProps {
  name?: string; // This prop is not used in the current implementation
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="h-16 bg-cyan-800 text-white flex items-center justify-center px-4">
      <p className="text-sm">
        &copy; 2024 My Application. All rights reserved.
      </p>
    </footer>
  );
};

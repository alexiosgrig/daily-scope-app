import React from 'react';

interface HeaderProps {
  name?: string; // This prop is not used in the current implementation
}

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="h-16 bg-cyan-800 text-white flex items-center justify-between px-4">
      <h1 className="text-xl font-bold">My Application</h1>
      {/* Optional: Include a section for navigation or user profile */}
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

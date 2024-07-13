import React from 'react';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <img
        src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
        alt="Error"
        className="w-96 h-64 object-cover"
      />
      <h1 className="text-4xl text-gray-800 mt-4">
        Oops! Something went wrong.
      </h1>
      <p className="text-gray-600 mt-2">
        We're sorry for the inconvenience. Please try again later or contact
        support if the issue persists.
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Refresh Page
      </button>
    </div>
  );
};

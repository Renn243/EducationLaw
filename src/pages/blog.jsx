import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Blog = () => {
  return (
    <div className="bg-white text-gray-800 m-8">
      <main className="max-w-4xl mx-auto p-4 border border-gray-300 rounded-md mt-4 px-12">
        <div className="space-y-4">
          {[...Array(5)].map((_, index) => (
            <div className="bg-white shadow-md rounded-md p-4 flex items-center space-x-4 border border-gray-300" key={index}>
              <img
                alt="Blog image placeholder"
                className="w-24 h-24 rounded-md"
                src="https://placehold.co/100x100"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">Judul Blog</h2>
                <hr className="border-red-600 w-8/9 my-2" />
                <p className="text-gray-500">03/06/2025</p>
              </div>
              <button className="bg-red-500 text-white rounded-full p-2 mx-2">
                <FaChevronRight />
              </button>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center space-x-2 mt-4 p-4">
          <button className="bg-gray-200 text-gray-500 rounded-full p-2 mx-2">
            <FaChevronLeft />
          </button>
          
          <button className="bg-red-600 text-white px-3 py-1 rounded-md">1</button>
          <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded-md">2</button>
          <button className="border border-gray-300 text-gray-600 px-3 py-1 rounded-md">3</button>
          <button className="bg-red-500 text-white rounded-full p-2 mx-2">
            <FaChevronRight />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Blog;
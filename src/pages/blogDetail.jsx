import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const BlogDetail = () => {
  return (
    <div className="bg-white text-gray-800 m-8">
      <main className="max-w-4xl mx-auto p-4 border border-gray-300 rounded-md mt-4 px-12">
        <div className="space-y-4">
            <div className="bg-white  rounded-md p-4 flex items-center space-x-4 ">
              <img
                alt="Blog image placeholder"
                className="w-60 h-60 rounded-md"
                src="https://placehold.co/100x100"
              />
              <div className="flex-1 pl-8">
                <h2 className="text-2xl font-semibold">Judul Blog</h2>
                <hr className="border-red-600 border-2 w-full my-2" />
                <p className="text-gray-500">03/06/2025</p>
              </div>
            </div>
        </div>
        <div className="p-4 ">
            <p className="my-4">
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum
            </p>
            <p className="my-4">
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum
            </p>
            <p className="my-4">
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum
            </p>
        </div>
        <div className="container mx-auto p-4">
          <div className="border-t-4 border-red-500 w-full mb-4"></div>
          <h2 className="text-red-500 text-xl mb-4">Lihat berita lainnya</h2>
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                    src=""
                    alt="Placeholder image for blog post"
                    className="w-full h-48 object-cover bg-rose-600 rounded-lg"
                />
                <div className="p-4">
                    <h3 className="text-red-500 text-lg mb-2">Judul Blog</h3>
                    <p className="text-gray-500">03/06/2025</p>
                </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                    src=""
                    alt="Placeholder image for blog post"
                    className="w-full h-48 object-cover bg-rose-600 rounded-lg"
                />
                <div className="p-4">
                    <h3 className="text-red-500 text-lg mb-2">Judul Blog</h3>
                    <p className="text-gray-500">03/06/2025</p>
                </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 p-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                    src=""
                    alt="Placeholder image for blog post"
                    className="w-full h-48 object-cover bg-rose-600 rounded-lg"
                />
                <div className="p-4">
                    <h3 className="text-red-500 text-lg mb-2">Judul Blog</h3>
                    <p className="text-gray-500">03/06/2025</p>
                </div>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogDetail;
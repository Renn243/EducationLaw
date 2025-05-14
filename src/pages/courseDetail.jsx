import React, { useState } from 'react';
import { FaStar, FaChevronDown, FaChevronRight, FaUsers } from 'react-icons/fa';
import realcase from '../assets/realcase.png'
import feat2 from '../assets/feat2.png'
import time from '../assets/lifetime.png'


const CourseDetail = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100">
      <main className="container mx-auto mb-8">
      <section className="bg-gray-300 py-10 px-20 rounded-b rounded- shadow-md mx-10">
          <div className="bg-white p-6 rounded-lg shadow-md flex">
            <div className="w-2/5">
              <iframe
                width="100%"
                height="250"
                src=""
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-3/5 pl-6">
              <h1 className="text-2xl font-bold text-rose-800">Dasar Hukum</h1>
              <div className="flex items-center mt-2">
                <span className="text-red-600">
                  <FaStar /> 4.8
                </span>
                <span className="mx-2">|</span>
                <span>
                  Level: <span className="font-bold">Pemula</span>
                </span>
                <span className="mx-2">|</span>
                <span>
                  Durasi: <span className="font-bold">20 Jam</span>
                </span>
              </div>
              <div className="mt-2">
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">Kategori</span>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">Hukum</span>
              </div>
              <p className="mt-4 text-gray-700">
                Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum...
              </p>
              <div className="mt-4 text-2xl font-bold text-gray-800">Rp100.000</div>
              <button className="bg-red-600 text-white px-6 py-2 rounded-full mt-4">Daftar</button>
              <div className="flex items-center mt-4">
                <FaUsers className="text-red-600" />
                <span className="ml-2">186 pendaftar</span>
              </div>
            </div>
          </div>
        </section>
        <div className="border border-gray-500 rounded-lg p-10 mt-8 mx-20">
          <section className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-rose-800">Keuntungan?</h2>
            <div className="flex justify-around mt-4 border-b-2 border-red-600 pb-8">
              <div className="text-center">
                <div className=" w-16 h-16 mx-auto mb-2">
                  <img src={feat2} alt="" />
                </div>
                <p>Sertifikat</p>
              </div>
              <div className="text-center">
                <div className=" w-16 h-16 mx-auto mb-2">
                  <img src={time} alt="" />
                </div>
                <p>Akses seumur hidup</p>
              </div>
              <div className="text-center">
                <div className=" w-16 h-16 mx-auto mb-2">
                  <img src={realcase} alt="" />
                </div>
                <p>Studi kasus hukum nyata</p>
              </div>
            </div>
            
            <div className="flex mt-4">
              <div className="w-3/5 pt-5">
              <h2 className="text-xl font-bold text-rose-800 pb-8">Deskripsi</h2>
                <p className="text-gray-700">
                  Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum 
                  Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum 
                  Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum Dasar Hukum...
                </p>
                <div className="flex items-center mt-2">
                  <div className="flex-grow border-t-2 border-rose-800"></div>
                  <button className="flex text-rose-800 mx-2 item-center">
                    Tampilkan <FaChevronDown className='my-1 pl-1' />
                  </button>
                  <div className="flex-grow border-t-2 border-rose-800"></div>
                </div>
              </div>
              <div className="w-2/5 pt-5">
                <h2 className="text-xl font-bold text-rose-800 pb-8 pl-12">Instructor</h2>
                <div className="flex items-center ">
                  <div className="w-1/3">
                    <div className="bg-gray-200 rounded-full w-20 h-20 mx-auto mb-2"></div>
                  </div>
                  <div className="w-2/3">
                    <p>Nama Instruktur</p>
                    <a href="#" className="text-rose-800">
                      Lihat Detail
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-gray-200 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-rose-800">Daftar isi</h2>
            <div className="mt-4">
              {[1, 2, 3, 4].map((item, index) => (
                <div key={index} className="mb-4">
                  <div
                    className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggle(index)}
                  >
                    <div className="flex items-center">
                      <div className="bg-rose-800 text-white rounded-full w-8 h-8 flex items-center justify-center">{item}</div>
                      <span className="ml-4">Pendahuluan</span>
                    </div>
                    {activeIndex === index ? (
                      <FaChevronDown className="text-gray-600 border-l-2 border-rose-800" />
                    ) : (
                      <FaChevronRight className="text-gray-600 border-l-2 border-rose-800" />
                    )}
                  </div>
                  {activeIndex === index && (
                    <div className="bg-white p-4 rounded-lg shadow-md mt-2">
                      <p className="text-gray-700">
                        Isi dari Pendahuluan {item}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 p-6 bg-white ">
            <h2 className="text-xl font-bold text-rose-800">Testimoni</h2>
            <div className="flex justify-around mt-4">
              <div className="text-center bg-white border-gray-300 border p-4 rounded-lg shadow-md mr-8">
                <div className="bg-gray-200 rounded-full w-16 h-16 mx-auto mb-2"></div>
                <p>Nama User</p>
                <div className="flex justify-center items-center text-red-600">
                  <FaStar />
                  <span className="ml-2">4.8</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Testimoni Testimoni Testimoni Testimoni Testimoni Testimoni Testimoni Testimoni 
                  Testimoni Testimoni Testimoni Testimoni Testimoni Testimoni Testimoni Testimoni 
                  Testimoni Testimoni Testimoni Testimoni...
                </p>
              </div>
              <div className="text-center bg-white p-4 border-gray-300 border rounded-lg shadow-md ml-8">
                <div className="bg-gray-200 rounded-full w-16 h-16 mx-auto mb-2"></div>
                <p>Nama User</p>
                <div className="flex justify-center items-center text-red-600">
                  <FaStar />
                  <span className="ml-2">4.8</span>
                </div>
                <p className="mt-2 text-gray-700">
                  Testimoni Testimoni Testimoni Testimoni Testimoni Testimoni Testimoni Testimoni 
                  Testimoni Testimoni Testimoni Testimoni Testimoni Testimoni Testimoni Testimoni 
                  Testimoni Testimoni Testimoni Testimoni...
                </p>
              </div>
            </div>
          </div>
          </section>
          
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
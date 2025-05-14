import React from 'react';
import { FaChevronLeft, FaChevronRight, FaChevronDown } from 'react-icons/fa';
import Card from '../component/Card'


const Course = () => {
    const images = [
        "https://placehold.co/600x400?text=Course+1",
        "https://placehold.co/600x400?text=Course+2",
        "https://placehold.co/600x400?text=Course+3",
        "https://placehold.co/600x400?text=Course+4",
        "https://placehold.co/600x400?text=Course+5",
        "https://placehold.co/600x400?text=Course+6",
        "https://placehold.co/600x400?text=Course+7",
        "https://placehold.co/600x400?text=Course+8",
        "https://placehold.co/600x400?text=Course+9"
    ];

    return (
        <div>
            <div className="border border-gray-500 rounded-lg p-10 my-8 mx-20">
                <main className="container mx-auto py-8 px-6  bg-white">
                    <div className="flex justify-between items-center mb-6 border-b-2 py-4 border-red-600">
                        <h1 className="text-3xl font-bold text-rose-800">Daftar Course</h1>
                        <input type="text" placeholder="Cari Course..." className="border border-gray-300 rounded-full px-4 py-2 w-full max-w-md" />
                    </div>
                    <Section title="Course Terbaru" images={images.slice(0, 3)} />
                    <Section title="Course Terpopuler" images={images.slice(3, 6)} />
                    <DifficultySection images={images.slice(6, 9)} />
                    <CategorySection images={images.slice(0, 3)} />
                </main>
            </div>
        </div>
    );
};

const Section = ({ title, images }) => {
    return (
        <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <CourseCard key={index} imageUrl={image} />
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <button className="bg-gray-200 text-gray-500 rounded-full p-2 mx-2">
                    <FaChevronLeft />
                </button>
                <button className="bg-red-500 text-white rounded-full p-2 mx-2">
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
};

const CourseCard = ({ imageUrl }) => {
    return (
        <div>
            <Card imageUrl={imageUrl} />
        </div>
    );
};

const DifficultySection = ({ images }) => {
    return (
        <section className='mb-12'>
            <div className="flex justify-between items-center mb-6">
                <div className="w-1/5">
                    <h2 className="text-xl font-semibold">Tingkat Kesulitan</h2>
                </div>
                <div className="flex w-3/5 justify-center items-center space-x-4">
                    <div className="flex-grow border-t-2 border-red-600"></div>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-full">Pemula</button>
                    <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-full">Menengah</button>
                    <button className="bg-gray-200 text-gray-500 px-4 py-2 rounded-full">Lanjutan</button>
                    <div className="flex-grow border-t-2 border-red-600"></div>
                </div>
                <div className="w-1/5"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <CourseCard key={index} imageUrl={image} />
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <button className="bg-gray-200 text-gray-500 rounded-full p-2 mx-2">
                    <FaChevronLeft />
                </button>
                <button className="bg-red-500 text-white rounded-full p-2 mx-2">
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
};

const CategorySection = ({ images }) => {
    return (
        <section>
            <div className="flex justify-between items-center mb-6">
                <div className="w-1/5">
                    <h2 className="text-xl font-semibold">Tingkat Kesulitan</h2>
                </div>
                <div className="flex w-3/5 justify-center items-center space-x-4">
                    <div className="flex-grow border-t-2 border-red-600"></div>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-full flex">Pidana <FaChevronDown className='pl-1 my-1'/></button>
                    <div className="flex-grow border-t-2 border-red-600"></div>
                </div>
                <div className="w-1/5"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <CourseCard key={index} imageUrl={image} />
                ))}
            </div>
            <div className="flex justify-center mt-6">
                <button className="bg-gray-200 text-gray-500 rounded-full p-2 mx-2">
                    <FaChevronLeft />
                </button>
                <button className="bg-red-500 text-white rounded-full p-2 mx-2">
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
};

export default Course;
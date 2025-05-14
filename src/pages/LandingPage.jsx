import React from 'react'
import Button from '../component/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faGavel, faBalanceScale, faUniversity, faBook, faFileAlt, faHandshake } from "@fortawesome/free-solid-svg-icons";
import Card from '../component/Card';
import Testimoni from '../component/Testimoni';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
                <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
                    <div className="w-1/2 mb-10 lg:mb-0">
                        <h1 className="text-5xl font-bold mb-6">
                            <span className="text-red-500">Belajar Hukum</span> dengan
                            <span className="text-red-500"> Mudah & Fleksibel!</span>
                        </h1>
                        <p className="text-lg mb-8 text-gray-300 max-w-lg">
                            Dapatkan akses ke berbagai materi hukum dari para ahli, kapan saja dan di mana saja. Mulai perjalanan Anda dalam dunia hukum bersama kami.
                        </p>
                        <Button className="bg-red-500">Mulai Belajar!</Button>
                    </div>
                    <div className="lg:w-1/2">
                        <img
                            src="https://online-learning-college.com/wp-content/uploads/2022/12/Best-A-Levels-for-Studying-Law--scaled.jpg"
                            alt="Education Law Hero"
                            className="rounded-lg shadow-2xl w-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Why Us Section */}
            <div className="py-20 relative">
                <div className="absolute inset-0 before:absolute before:inset-0 before:bg-black/60 before:z-10">
                    <img
                        src="https://www.lawyer-monthly.com/wp-content/uploads/2020/05/iStock-1074217684-1024x683.jpg"
                        alt="Background"
                        className="w-full h-full object-cover brightness-75"
                    />
                </div>
                <div className="container mx-auto px-6 lg:px-20 relative z-10">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
                        <span className="bg-red-500 text-white px-6 py-2 rounded-lg">Kenapa Harus Belajar di EducationLaw</span>
                    </h2>

                    <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
                        <div className="flex flex-col gap-8 lg:w-1/2">
                            <div className="flex gap-6 items-center p-6 bg-white/20 rounded-xl backdrop-blur-lg shadow-lg">
                                <div className="h-16 w-16 flex items-center justify-center bg-red-500 text-white rounded-full">
                                    <FontAwesomeIcon icon={faGavel} size="2x" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-red-500 mb-2">Belajar dari Ahli</h4>
                                    <p className="text-white/80">Kursus dibuat oleh pengacara dan akademisi dengan pengalaman puluhan tahun dalam bidangnya.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-center p-6 bg-white/20 rounded-xl backdrop-blur-lg shadow-lg">
                                <div className="h-16 w-16 flex items-center justify-center bg-red-500 text-white rounded-full">
                                    <FontAwesomeIcon icon={faFileAlt} size="2x" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-red-500 mb-2">Bersertifikat</h4>
                                    <p className="text-white/80">Dapatkan sertifikat resmi setelah menyelesaikan kursus yang diakui oleh institusi hukum.</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-center p-6 bg-white/20 rounded-xl backdrop-blur-lg shadow-lg">
                                <div className="h-16 w-16 flex items-center justify-center bg-red-500 text-white rounded-full">
                                    <FontAwesomeIcon icon={faBook} size="2x" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-red-500 mb-2">Akses Materi Lengkap</h4>
                                    <p className="text-white/80">Video berkualitas tinggi, dokumen komprehensif, dan latihan soal interaktif untuk pengalaman belajar terbaik.</p>
                                </div>
                            </div>
                        </div>


                        <div className="lg:w-2/5">
                            <img
                                src="https://pavaedu.com/wp-content/uploads/2022/04/hukuk-egitimi-1-1024x538.jpg"
                                alt="Law Professional"
                                className="rounded-xl shadow-2xl w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Law Section */}
            <div className="py-20 bg-gray-100">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            <span className="border-b-4 border-red-500 pb-2">Pelajari Berbagai Bidang Hukum</span>
                        </h2>
                        <div className="flex gap-4">
                            <div className="w-32 h-2 bg-red-500 rounded-full"></div>
                            <div className="w-16 h-2 bg-red-300 rounded-full"></div>
                            <div className="w-8 h-2 bg-red-200 rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-10">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:w-3/4">
                            <div className="bg-white p-6 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:scale-105 hover:bg-red-50">
                                <div className="mb-4 h-16 w-16 flex items-center justify-center bg-red-500 text-white rounded-lg">
                                    <FontAwesomeIcon icon={faGavel} size="2x" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800">Hukum Pidana</h4>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:scale-105 hover:bg-red-50">
                                <div className="mb-4 h-16 w-16 flex items-center justify-center bg-red-500 text-white rounded-lg">
                                    <FontAwesomeIcon icon={faBalanceScale} size="2x" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800">Hukum Perdata</h4>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:scale-105 hover:bg-red-50">
                                <div className="mb-4 h-16 w-16 flex items-center justify-center bg-red-500 text-white rounded-lg">
                                    <FontAwesomeIcon icon={faUniversity} size="2x" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800">Hukum Tata Negara</h4>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:scale-105 hover:bg-red-50">
                                <div className="mb-4 h-16 w-16 flex items-center justify-center bg-red-500 text-white rounded-lg">
                                    <FontAwesomeIcon icon={faHandshake} size="2x" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800">Hukum Bisnis</h4>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:scale-105 hover:bg-red-50">
                                <div className="mb-4 h-16 w-16 flex items-center justify-center bg-red-500 text-white rounded-lg">
                                    <FontAwesomeIcon icon={faFileAlt} size="2x" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800">Hukum Pajak</h4>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg transition-all hover:shadow-2xl hover:scale-105 hover:bg-red-50">
                                <div className="mb-4 h-16 w-16 flex items-center justify-center bg-red-500 text-white rounded-lg">
                                    <FontAwesomeIcon icon={faBook} size="2x" />
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800">Hukum Internasional</h4>
                            </div>
                        </div>
                        <div className="lg:w-1/4 flex justify-center">
                            <button className="p-6 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300 flex items-center justify-center shadow-lg transform hover:scale-110">
                                <FontAwesomeIcon icon={faChevronRight} size="2x" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Courses Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="mb-16 flex items-center gap-4">
                        <h2 className="text-3xl lg:text-4xl font-bold text-white bg-red-500 px-6 py-3 rounded-lg">
                            Course Populer
                        </h2>
                        <div className="w-10 h-10 border-4 border-red-500 rounded-lg"></div>
                        <div className="w-10 h-10 border-4 border-red-300 rounded-lg"></div>
                    </div>
                    <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="flex justify-center">
                        <Button className="bg-red-500 text-white">
                            <Link to='/course'>Lihat lebih banyak!</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="mb-16 flex items-center gap-10">
                        <div className="flex-1 h-1 bg-red-500 rounded-full"></div>
                        <h2 className="text-3xl lg:text-4xl font-bold whitespace-nowrap text-red-500">Apa Kata Mereka?</h2>
                        <div className="flex-1 h-1 bg-red-500 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="flex flex-col gap-6">
                            <Testimoni />
                            <div className="flex gap-4 mt-6">
                                <div className="w-20 h-2 bg-red-500 rounded-full"></div>
                                <div className="w-10 h-2 bg-red-300 rounded-full"></div>
                                <div className="w-6 h-2 bg-red-200 rounded-full"></div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="flex gap-4 mb-6">
                                <div className="w-20 h-2 bg-red-500 rounded-full"></div>
                                <div className="w-10 h-2 bg-red-300 rounded-full"></div>
                                <div className="w-6 h-2 bg-red-200 rounded-full"></div>
                            </div>
                            <Testimoni />
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="py-20 bg-white">
                <div className="container mx-auto px-6 lg:px-20">
                    <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16">
                        <span className="border-b-4 border-red-500 pb-2">Pertanyaan Umum</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
                        <div className="md:w-1/3 relative">
                            <span className="absolute top-[-40px] left-1/4 text-red-500 text-6xl font-black rotate-12">?</span>
                            <span className="absolute top-[-30px] right-1/4 text-red-500 text-5xl font-black rotate-[-12deg]">?</span>
                            <img
                                src="https://testmaxprep.s3.us-west-2.amazonaws.com/images/web/blog/blog_image/blog_full_studying-law.jpg"
                                alt="FAQ"
                                className="rounded-xl shadow-xl"
                            />
                        </div>

                        <div className="md:w-2/3">
                            <div className="space-y-6">
                                <div className="bg-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:bg-red-50 relative">
                                    <span className="absolute top-[-10px] right-[-10px] text-red-500 text-4xl font-black rotate-12">?</span>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Apakah saya mendapatkan sertifikat?</h3>
                                    <p className="text-gray-600">Ya, setelah menyelesaikan kursus dan lulus ujian akhir, Anda akan mendapatkan sertifikat digital yang dapat diunduh dan dibagikan.</p>
                                </div>

                                <div className="bg-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:bg-red-50 relative">
                                    <span className="absolute top-[-10px] right-[-10px] text-red-500 text-4xl font-black rotate-12">?</span>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Bagaimana cara mengakses materi?</h3>
                                    <p className="text-gray-600">Setelah mendaftar, Anda dapat mengakses semua materi kursus melalui dashboard akun Anda. Materi dapat diakses dari komputer, tablet, atau smartphone.</p>
                                </div>

                                <div className="bg-gray-100 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:bg-red-50 relative">
                                    <span className="absolute top-[-10px] right-[-10px] text-red-500 text-4xl font-black rotate-12">?</span>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Berapa lama akses kursus ini tersedia?</h3>
                                    <p className="text-gray-600">Anda mendapatkan akses seumur hidup ke kursus yang telah dibeli, termasuk semua pembaruan materi di masa mendatang.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="py-16 bg-red-500 text-white">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-6">Siap Memulai Perjalanan Hukum Anda?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Bergabunglah dengan ribuan mahasiswa dan profesional yang telah meningkatkan pengetahuan dan karir mereka melalui EducationLaw.</p>
                    <Button className="bg-white text-red-500 hover:text-white">Mulai Belajar Sekarang!</Button>
                </div>
            </div>
        </div>
    )
}

export default LandingPage
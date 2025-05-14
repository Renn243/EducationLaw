import React from 'react';
import VideoPlayer from '../component/VideoPlayer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faList } from "@fortawesome/free-solid-svg-icons";
import Button from '../component/Button';

const Module = () => {
    return (
        <div className="mx-40 my-10 p-8 bg-white rounded-lg border border-gray-300 relative">
            <button className="fixed top-1/2 right-10 transform -translate-y-1/2 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition duration-300">
                <FontAwesomeIcon icon={faList} size="lg" />
            </button>

            <div className='mb-6'>
                <h1 className="text-3xl font-bold text-red-600 mb-4">Dasar Hukum</h1>
                <hr className="h-1 bg-red-500 border-none" />
            </div>

            <div className="mb-20">
                <VideoPlayer videoId="AXbPwELoXSk" />
            </div>

            <div className="px-10 mb-20 space-y-6 text-gray-800">
                <p>
                    <strong>Hukum</strong> adalah sistem aturan yang mengatur kehidupan masyarakat dan ditegakkan oleh lembaga berwenang. Hukum bertujuan untuk menciptakan ketertiban, keadilan, dan kepastian dalam kehidupan sosial.
                </p>

                <h2 className="text-xl font-semibold text-gray-900">1. Pengertian Hukum</h2>
                <p>
                    Hukum adalah seperangkat aturan yang mengatur perilaku manusia dalam masyarakat, bersifat mengikat, dan memiliki sanksi bagi pelanggarnya.
                </p>

                <h2 className="text-xl font-semibold text-gray-900">2. Sumber Hukum</h2>
                <p>
                    Sumber hukum adalah asal dari aturan hukum yang berlaku, meliputi:
                </p>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Undang-Undang:</strong> Aturan tertulis yang disahkan oleh pemerintah.</li>
                    <li><strong>Kebiasaan:</strong> Norma yang diterima sebagai hukum dalam masyarakat.</li>
                    <li><strong>Yurisprudensi:</strong> Keputusan hakim yang menjadi pedoman hukum.</li>
                    <li><strong>Traktat:</strong> Perjanjian antar negara yang memiliki kekuatan hukum.</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-900">3. Prinsip-Prinsip Hukum</h2>
                <p>Beberapa prinsip utama dalam hukum adalah:</p>
                <ul className="list-disc list-inside ml-4">
                    <li><strong>Legalitas:</strong> Tidak ada hukuman tanpa aturan hukum yang jelas.</li>
                    <li><strong>Keadilan:</strong> Hukum harus adil bagi semua pihak.</li>
                    <li><strong>Kepastian Hukum:</strong> Aturan hukum harus jelas dan bisa diterapkan.</li>
                    <li><strong>Kemanusiaan:</strong> Hukum harus menghormati hak asasi manusia.</li>
                </ul>

                <h2 className="text-xl font-semibold text-gray-900">4. Contoh Penerapan Hukum</h2>
                <p>
                    Hukum diterapkan dalam berbagai aspek kehidupan, contohnya:
                </p>
                <ul className="list-disc list-inside ml-4">
                    <li>Pemakaian helm bagi pengendara motor sesuai UU No. 22 Tahun 2009.</li>
                    <li>Kontrak kerja yang diatur dalam Undang-Undang Ketenagakerjaan.</li>
                    <li>Hak dan kewajiban warga negara dalam UUD 1945.</li>
                </ul>
            </div>

            <div className='flex justify-end gap-10'>
                <Button>Download PDF</Button>
            </div>
        </div>
    );
};

export default Module;

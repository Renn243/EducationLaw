import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="mx-20 flex flex-col items-center justify-center py-10">
            <hr className="w-full my-5 border-none h-1 bg-gray-200" />

            <div className="flex flex-wrap items-start justify-between w-full gap-12">
                <div className="h-12 w-12 bg-red-500 rounded-lg"></div>

                <ul className="flex flex-col gap-3 text-gray-700">
                    <li className="font-semibold">Navigasi</li>
                    <li className="hover:text-red-500 cursor-pointer">Tentang Kami</li>
                    <li className="hover:text-red-500 cursor-pointer">Sertifikat</li>
                    <li className="hover:text-red-500 cursor-pointer">Blog</li>
                    <li className="hover:text-red-500 cursor-pointer">FAQ</li>
                </ul>

                <ul className="flex flex-col gap-3 text-gray-700">
                    <li className="font-semibold">Kontak</li>
                    <li>WhatsApp: <span className="text-red-500 font-bold">+62 XXXX-XXXX-XXXX</span></li>
                    <li>Email: <span className="text-red-500 font-bold">support@EducationLaw.com</span></li>
                    <li>Alamat: <span className="text-red-500 font-bold">Jl. Hukum No. 1, Makassar</span></li>
                </ul>

                <div className="flex flex-col gap-3 text-gray-700">
                    <h1 className="font-semibold">Social Media</h1>
                    <div className="flex gap-4 text-2xl">
                        <a href="#" className="hover:text-blue-600"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#" className="hover:text-pink-500"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#" className="hover:text-blue-500"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="#" className="hover:text-red-600"><FontAwesomeIcon icon={faYoutube} /></a>
                    </div>
                </div>
            </div>

            <hr className="w-full my-5 border-none h-1 bg-gray-200" />

            <h4 className="text-gray-600">&copy; 2025 EducationLaw</h4>
        </div>
    );
};

export default Footer;

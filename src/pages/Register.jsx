import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Button from '../component/Button';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="p-10 w-full max-w-xl bg-white rounded-lg shadow-lg border border-gray-200">
                <h1 className="text-3xl font-bold text-red-500 mb-2">Register</h1>
                <hr className="h-1 w-20 bg-red-500 border-none rounded-lg mb-6" />

                <p className="mb-6 text-gray-600">Silakan isi data diri Anda</p>

                <div className="mb-4">
                    <label className="block text-sm font-bold text-red-500 mb-1">Username</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-bold text-red-500 mb-1">Nama</label>
                    <input
                        type="text"
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                </div>

                <div className="mb-4 relative">
                    <label className="block text-sm font-bold text-red-500 mb-1">Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        className="absolute right-3 top-10 text-gray-500 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                    />
                </div>

                <div className="mb-10 relative">
                    <label className="block text-sm font-bold text-red-500 mb-1">Konfirmasi Password</label>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                    />
                    <FontAwesomeIcon
                        icon={showConfirmPassword ? faEyeSlash : faEye}
                        className="absolute right-3 top-10 text-gray-500 cursor-pointer"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    />
                </div>

                <Button className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
                    Daftar
                </Button>

                <div className="mt-4 text-center">
                    <p className="text-sm">
                        Sudah punya akun?{" "}
                        <Link to="/login" className="text-red-500 font-bold hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;

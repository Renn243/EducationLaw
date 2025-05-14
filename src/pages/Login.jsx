import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import Button from '../component/Button';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="h-screen flex">
            <div className="w-1/2 bg-[#888888] d-500 flex items-center justify-center">
            </div>

            <div className="w-1/2 flex items-center justify-center p-10 bg-gray-100">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-red-500 mb-2">Selamat Datang</h1>
                    <hr className="h-1 w-20 bg-red-500 border-none rounded-lg mb-6" />

                    <p className="mb-6 text-gray-600">Silakan login terlebih dahulu</p>

                    <div className="mb-4">
                        <label className="block text-sm font-bold text-red-500 mb-1">Username</label>
                        <input className="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400" />
                    </div>

                    <div className="mb-2 relative">
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

                    <div className="mb-6 text-right">
                        <Link to="" className="text-sm text-red-500 hover:underline">
                            Lupa password?
                        </Link>
                    </div>

                    <Button className="w-full py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300">
                        Login
                    </Button>

                    <div className="mt-4 text-center">
                        <p className="text-sm">
                            Belum punya akun?{" "}
                            <Link to="/register" className="text-red-500 font-bold hover:underline">
                                Daftar sekarang
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

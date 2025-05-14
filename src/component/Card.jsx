import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUser, faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Card = ({ imageUrl }) => {
    const handleTitleClick = () => {
        window.location.href = "/coursedetail";
    };

    return (
        <div className="border-2 border-gray-300 rounded-lg">
            <div className="relative bg-gray-500 w-full h-60 flex items-center justify-center">
                <img src={imageUrl} alt="Course thumbnail image" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                <div className="absolute top-2 left-2 flex items-center gap-3 text-white text-sm ">
                    <div className="flex items-center gap-1 bg-black/50  px-2 py-1 rounded-lg">
                        <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                        <span>4.8</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-lg">
                        <FontAwesomeIcon icon={faUser} />
                        <span>1.2K</span>
                    </div>
                    <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-lg">
                        <FontAwesomeIcon icon={faClock} />
                        <span>2 Jam</span>
                    </div>
                </div>
                <div className="absolute bottom-2 left-2 text-white text-sm ">
                    <div className="flex items-center gap-1 bg-black/50 px-2 py-1 rounded-lg">
                        <span>Hukum Pidana</span>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <h4 onClick={handleTitleClick} className="mb-2 text-lg font-bold text-red-500 cursor-pointer">Dasar Hukum</h4>
                <p className="mb-2 text-sm">Dasar Hukum Dasar Hukum Dasar HukumDasar Hukum...</p>
                <h4 className="text-lg font-semibold">Rp100.000</h4>
            </div>
        </div>
    );
};

export default Card;
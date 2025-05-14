import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Testimoni = () => {
    return (
        <div className="relative p-6 bg-white rounded-lg shadow-md">
            <FontAwesomeIcon icon={faQuoteRight} className="absolute top-4 right-4 text-red-500 text-3xl" />

            <div className="mb-4 flex gap-4 items-center">
                <div className="h-10 w-10 bg-gray-500 rounded-full"></div>
                <div>
                    <h1 className="font-bold text-lg">Martin Odegaard</h1>
                    <h4 className="text-gray-500 text-sm">Course "Dasar Hukum"</h4>
                </div>
            </div>

            <p className="mb-4 text-xs text-gray-700">
                Belajar hukum dari nol terasa lebih mudah dengan course ini. Pembahasannya ringan tapi tetap berbobot, sangat direkomendasikan bagi siapa saja
                yang ingin memahami hukum lebih dalam!
            </p>

            <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faStar} className="text-yellow-400 text-lg" />
                <span className="text-gray-700 font-medium">4.8</span>
            </div>
        </div>
    );
};

export default Testimoni;

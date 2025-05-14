import React from "react";

const Button = ({ children, onClick, className, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-8 py-4 text-lg font-bold rounded-md transition-all duration-300 hover:bg-red-600 active:scale-95 ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;

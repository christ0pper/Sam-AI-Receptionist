import React from "react";

export default function Footer() {
  return (
    <footer
      className="text-white py-8 sm:py-12"
      style={{ backgroundColor: "rgba(147, 51, 234, 1)" }}
    >
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex items-center">
            <button className="flex items-center bg-transparent border-none">
              <div
                className="flex items-center justify-center w-12 h-8 sm:w-14 sm:h-10 bg-purple-600 rounded-lg transition-all duration-150"
                style={{
                  backgroundImage: "url(/logo1.png)",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </button>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            <a
              href="#home"
              className="text-white-300 hover:text-white text-sm font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white-300 hover:text-white text-sm font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-white-300 hover:text-white text-sm font-medium"
            >
              Services
            </a>
            <a
              href="#demo"
              className="text-white-300 hover:text-white text-sm font-medium"
            >
              Demo
            </a>
            <a
              href="#contact"
              className="text-white-300 hover:text-white text-sm font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div
              className="w-20 h-14 bg-primary rounded-lg flex items-center justify-center"
              style={{
                backgroundImage: "url(/logo.png)",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-primary font-work-sans font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary font-work-sans font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-primary font-work-sans font-medium"
            >
              Services
            </a>
            <a
              href="/demo"
              className="text-gray-700 hover:text-primary font-work-sans font-medium"
            >
              Demo
            </a>
            <a
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-white font-work-sans font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

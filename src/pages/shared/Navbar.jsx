import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="logo">
            <a
              href="#"
              className="text-2xl font-bold hover:text-blue-300 transition-all duration-300"
            >
              MyLogo
            </a>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="hover:text-blue-300 transition-all duration-300 transform hover:scale-105"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-blue-300 transition-all duration-300 transform hover:scale-105"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-blue-300 transition-all duration-300 transform hover:scale-105"
            >
              Services
            </a>
            <a
              href="#"
              className="hover:text-blue-300 transition-all duration-300 transform hover:scale-105"
            >
              Contact
            </a>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>
        {isOpen && (
          <div className="block mt-4 md:hidden">
            <a
              href="#"
              className="block hover:text-blue-300 transition-all duration-300 transform hover:scale-105 px-2 py-1"
            >
              Home
            </a>
            <a
              href="#"
              className="block hover:text-blue-300 transition-all duration-300 transform hover:scale-105 px-2 py-1"
            >
              About
            </a>
            <a
              href="#"
              className="block hover:text-blue-300 transition-all duration-300 transform hover:scale-105 px-2 py-1"
            >
              Services
            </a>
            <a
              href="#"
              className="block hover:text-blue-300 transition-all duration-300 transform hover:scale-105 px-2 py-1"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

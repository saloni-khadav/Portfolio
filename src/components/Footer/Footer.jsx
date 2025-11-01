
import React from "react";

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 sm:px-10 lg:px-20 font-sans">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          {/* Brand/Name Section */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-purple-400 tracking-wide">
              Saloni Khadav
            </h2>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-start space-x-4 sm:space-x-6 lg:space-x-8 mt-4 md:mt-0">
            {[
              { name: "About", id: "about" },
              { name: "Skills", id: "skills" },
              { name: "Projects", id: "projects" },
              { name: "Education", id: "education" },
            ].map((item, index) => (
              <button
                key={index}
                onClick={() => handleScroll(item.id)}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-300 ease-in-out font-medium text-sm sm:text-base my-1"
              >
                {item.name}
              </button>
            ))}
          </nav>
          
          {/* Social Media Icons */}
          <div className="flex justify-center space-x-5 mt-6 md:mt-0">
            {[
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                ),
                link: "https://www.linkedin.com/in/saloni-khadav-24819228b" 
              },
              { 
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.809 1.305 3.493.998.108-.77.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.8.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                ), 
                link: "https://github.com/saloni-khadav" 
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition-transform transform hover:scale-125 duration-300 ease-in-out"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Separator Line */}
        <hr className="my-8 border-gray-700" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2025 Saloni Khadav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

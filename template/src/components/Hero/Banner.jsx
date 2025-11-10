// Banner.jsx
import React from "react";

const Banner = ({
  imageUrl = "https://via.placeholder.com/1200x500",
  linkUrl = "#",
  title = "Your Title Here",
  paragraph = "You can customize this",
  buttonText = "Explore Now",
  onButtonClick = null,
}) => {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-xl overflow-hidden shadow-lg">
        
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-64 sm:h-80 md:h-96 object-cover transition-transform duration-500 hover:scale-105"
            />
          </a>

         
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black/60 w-full h-full"></div>
            <div className="absolute px-6 py-8 text-center text-white max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 drop-shadow">
                {title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg opacity-95 mb-6">{paragraph}</p>

              <div className="flex justify-center">
                {onButtonClick ? (
                  <button
                    onClick={onButtonClick}
                    className="px-6 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium"
                  >
                    {buttonText}
                  </button>
                ) : (
                  <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium"
                  >
                    {buttonText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;

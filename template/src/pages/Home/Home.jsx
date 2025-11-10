import React from 'react';
import { FaGithub, FaLinkedin, FaGlobe, FaUserCircle } from 'react-icons/fa';

const Home = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center p-4">
            <div className="max-w-xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all hover:-translate-y-1 hover:shadow-3xl">
                <div className="h-32 bg-linear-to-r from-blue-500 to-purple-600"></div>

                <div className="px-6 pb-6 flex flex-col">
   
                    <div className="  w-32 h-32 mx-auto left-0 right-0 flex items-center justify-center">
                        <div className="w-full h-full bg-white rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                            <FaUserCircle className="w-full h-full text-gray-400" />
                        </div>
                    </div>

                    <div className="mt-5 text-center">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            Abir Abdullah
                        </h1>
                        <p className="text-gray-600 mb-4">Full Stack Developer</p>
                        
                        <div className="flex justify-center gap-4 mb-6">
                            <a 
                                href="https://github.com/abirabdullahs" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                <FaGithub size={24} />
                            </a>
                            <a 
                                href="https://linkedin.com/in/abirabdullahofficial" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a 
                                href="https://abirabdullah.me" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                            >
                                <FaGlobe size={24} />
                            </a>
                        </div>

                        {/* View Portfolio Button */}
                        <a 
                            href="https://abirabdullah.me" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-linear-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity"
                        >
                            View Portfolio
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
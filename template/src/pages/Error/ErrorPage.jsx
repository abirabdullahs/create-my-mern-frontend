import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="text-center space-y-6">
                <h1 className="text-9xl font-bold text-gray-800">404</h1>
                <div className="space-y-2">
                    <h2 className="text-4xl font-semibold text-gray-700">Page Not Found</h2>
                    <p className="text-gray-500">Sorry, we couldn't find the page you're looking for.</p>
                </div>
                <Link 
                    to="/" 
                    className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                    Go to Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;
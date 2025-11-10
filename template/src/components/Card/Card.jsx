import React from 'react';

const Card = () => {
    return (
        <div
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
            data-aos="fade-up"
        >

            <img
                src="insert your image url here"
                alt=""
                className="h-48 w-full object-cover hover:scale-105 transition duration-300"
            />

            <div className="p-4">
                <p className="text-sm text-purple-500 font-medium mb-1">tag</p>
                <h3 className="text-lg font-semibold mb-1">card Name</h3>
                <p className="text-gray-600 text-sm mb-2">name</p>

                <div className="flex justify-between items-center text-sm text-gray-700">
                    <span>option 1</span>
                    <span>option 2</span>
                </div>

                <Link
                    to="insert your desired url here"
                    className="block mt-4 w-full text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition duration-200"
                >
                    Button text
                </Link>
            </div>
        </div>


    );
};

export default Card;
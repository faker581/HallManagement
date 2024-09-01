import React from 'react';

const CenteredShapes: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-96 h-96 bg-[#e7d0d2]">
        {/* Rectangles on the left */}
        <div id="left-in" className="absolute top-1/4 left-1/4 w-8 h-48 bg-green-500">
          <div className="flex flex-col justify-between h-full w-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-full h-8 bg-white">
                <button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer w-8 h-8 transform transition-transform duration-300 hover:scale-110"></button>
              </div>
            ))}
          </div>
        </div>

        {/* Rectangles on the right */}
        <div id="right-in" className="absolute top-1/4 right-1/4 w-8 h-48 bg-red-500">
          <div className="flex flex-col justify-between h-full w-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-full h-8 bg-white">
                <button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer w-8 h-8 transform transition-transform duration-300 hover:scale-110"></button>
              </div>
            ))}
          </div>
        </div>

        {/* Rectangles at the top */}
        <div id="top" className="absolute top-0 left-1/4 w-48 h-8 bg-yellow-500">
          <div className="flex justify-between h-full w-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-8 h-8 bg-white">
                <button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer w-8 h-8 transform transition-transform duration-300 hover:scale-110"></button>
              </div>
            ))}
          </div>
        </div>

        {/* Rectangles at the bottom */}
        <div id="bottom" className="absolute bottom-0 left-1/4 w-48 h-8 bg-purple-500">
          <div className="flex justify-between h-full w-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-8 h-8 bg-white">
                <button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer w-8 h-8 transform transition-transform duration-300 hover:scale-110"></button>
              </div>
            ))}
          </div>
        </div>

        {/* Additional rectangles */}
        <div id="top-in" className="absolute top-1/4 left-1/4 w-48 h-8 bg-yellow-500">
          <div className="flex justify-between h-full w-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-8 h-8 bg-white">
                <button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer w-8 h-8 transform transition-transform duration-300 hover:scale-110"></button>
              </div>
            ))}
          </div>
        </div>

        <div id="bottom-in" className="absolute bottom-1/4 left-1/4 w-48 h-8 bg-purple-500">
          <div className="flex justify-between h-full w-full">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="w-8 h-8 bg-white">
                <button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer w-8 h-8 transform transition-transform duration-300 hover:scale-110"></button>
              </div>
            ))}
          </div>
        </div>

        {/* Diagonal rectangles */}
        <div id="diagonal-top-left" className="absolute top-0 left-0 w-12 h-12 bg-pink-500">
          <button className="bg-pink-500 hover:bg-blue-600 text-white cursor-pointer w-12 h-12 transform transition-transform duration-300 hover:scale-110"></button>
        </div>

        <div id="diagonal-bottom-right" className="absolute bottom-0 right-0 w-12 h-12 bg-orange-500">
          <button className="bg-orange-500 hover:bg-blue-600 text-white cursor-pointer w-12 h-12 transform transition-transform duration-300 hover:scale-110"></button>
        </div>

        <div id="small-above-orange" className="absolute bottom-16 right-0 w-8 h-8 bg-teal-500">
          <button className="bg-blue-500 hover:bg-blue-600 text-white cursor-pointer w-8 h-8 transform transition-transform duration-300 hover:scale-110"></button>
        </div>

        <div id="small-below-pink" className="absolute top-16 left-0 w-8 h-8 bg-purple-600">
          <button className="bg-amber-500 hover:bg-blue-600 text-white cursor-pointer w-8 h-8 transform transition-transform duration-300 hover:scale-110"></button>
        </div>
      </div>
    </div>
  );
};

export default function RoomManager() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[500px] h-[500px] bg-muted border-2 border-muted-foreground rounded-lg flex items-center justify-center">
        <CenteredShapes />
      </div>
    </div>
  );
}

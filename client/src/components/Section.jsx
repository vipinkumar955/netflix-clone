import React from 'react';
function Section() {
  return (
    <div className="flex bg-black w-full h-[700px] pt-[200px] justify-around items-center border border-3 border-solid border-gray-500">
      <div
        className="flex flex-col items-start mx-10  justify-center"
      >
        <h1 className="text-red-500 text-6xl mb-4">Enjoy on your TV.</h1>
        <h4 className="text-white text-2xl">Watch on smart TVs, Playstation, Xbox</h4>
        <h4 className="text-white text-2xl">Chromecast, Apple TV, Blu-ray players</h4>
        <h4 className="text-white text-2xl">and more.</h4>
      </div>
      <div>
        <img 
          src="/images1/image3.png" 
          className="w-[400px] h-[400px] transition-transform duration-300 ease-in-out transform hover:scale-110" 
          alt="Enjoy on your TV" 
        />
      </div>
    </div>
  );
}
export default Section;

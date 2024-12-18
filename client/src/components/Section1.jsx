import React from 'react';

function Section1() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around  p-8 lg:p-[100px] bg-black border-4 border-solid border-gray-500">
      <div className="flex justify-center items-center"> {/* Center both image and text */}
        <img 
          src="/images1/image4.png" 
          className="w-[600px] h-[500px] mr-10 transition-transform duration-300 ease-in-out transform hover:scale-110" 
          alt="Download your shows to watch offline" 
        />
        <div className="ml-4 text-left"> {/* Add margin to the left for spacing */}
          <h1 className="text-5xl font-bold text-white">Download your shows <br /> to watch offline.</h1>
          <h4 className="text-3xl text-white">Save your favorites easily and</h4>
          <h4 className="text-3xl text-white">always have something to watch.</h4>
        </div>
      </div>
    </div>
  );
}

export default Section1;

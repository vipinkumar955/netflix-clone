import React from 'react';

function Side() {
  return (
    <div className="flex p-4 bg-black text-white justify-around items-center border-4 border-solid border-gray-500">
      <div className="text-center mb-6  ">
        <h1 className="text-4xl font-bold">Watch Everywhere.</h1>
        <h4 className="text-3xl">Stream unlimited movies and TV shows</h4>
        <h4 className="text-3xl">on your phone, tablet, laptop, and TVs</h4>
        <h4 className="text-3xl">and more.</h4>
      </div>
      <div>
        <img src="./images1/image2.png" className="w-[600px] max-w-md transition-transform duration-300 ease-in-out transform hover:scale-110" alt="Watch Everywhere" />
      </div>
    </div>
  );
}

export default Side;

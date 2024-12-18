import React, { useRef, useState } from 'react';

const Header = () => {
  const [email, setEmail] = useState('');
  const refelement = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    refelement.current.focus();
  };
  return (
    <div className='h-full'>
      <img 
        src="/images1/bg.png"  
        alt="Description of the background image" 
        className="absolute inset-0 object-cover w-full h-full bg-black bg-opacity-25  transition-opacity duration-500 ease-in"
      />
      <header className="relative">
        <nav className='flex justify-between items-center py-4'>
          <img 
            src="/images1/image1.png" 
            alt="Description of image1"
            className='w-[150px] h-[60px] ml-10 font-semibold'/>
          <div className='flex items-center mr-10'>
            <button className='text-white font-bold text-xl h-[40px] w-[100px]  rounded-lg shadow-lg border border-solid border-red-500  mr-10 mb-1'>English</button>
            <button className='w-[80px] h-[30px] bg-red-700  rounded-lg shadow-lg text-white hover:bg-red-600 transition duration-300'>Sign In</button>
          </div>
        </nav> 
      </header>
      <div className="flex flex-col relative gap-1 mt-10 justify-center items-center">
        <h1 className='text-white text-5xl  transform transition duration-500 ease-in-out hover:scale-105'>Unlimited Movie TV,</h1>
        <h1 className="text-white text-5xl  transform transition duration-500 ease-in-out hover:scale-105">Shows and More.</h1>
        <h1 className="text-white text-xl"> Watch anywhere and cancel anytime<br/>
        Ready to watch? Enter your email to <br/>create or restart
        your membership.</h1>
        <div className="text-white">
          <input 
            ref={refelement}
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="text-white w-[360px] h-[50px] rounded-lg shadow-lg bg-black mr-6 mt-10 p-2 font-3xl transition duration-300 ease-in-out hover:bg-gray-300" 
            placeholder="Enter your email"  
            required
          /> 
          <span>
            <button 
              onClick={handleSubmit} 
              className='w-[200px] bg-red-600 h-[50px]  rounded-lg shadow-lg  font-3xl mr-4 hover:bg-black transition duration-300'>
              Get Started
            </button>
          </span>
        </div>            
      </div>
    </div>
  );
};
export default Header;

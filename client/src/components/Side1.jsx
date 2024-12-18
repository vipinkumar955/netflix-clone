import React from 'react'

function Side1() {
  return (
        <div className="flex justify-around items-center bg-black border-4 border-solid border-gray-500 p-10 ">
        <div>
            <img src="./images1/image5.png" className='w-[600px] h-[400px] transition-transform duration-300 ease-in-out transform hover:scale-110'/>
        </div> 
        <div>
            <h1 className="text-5xl text-white mb-4 font-bold">Create profile for childrens.</h1>
            <h4 className="text-3xl text-white">Send children on adventures with their</h4>
            <h4 className="text-3xl text-white">favourite characters in a space made</h4>
            <h4 className="text-3xl text-white">just for them-free with your membership.</h4>
        </div>   
    </div>
  )
}

export default Side1
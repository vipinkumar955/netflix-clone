import React, { useState ,useRef} from 'react';
function Side3() {
  const faqs = [
    { question: 'What is Netflix?', answer: '+' },
    { question: 'How much does Netflix cost?', answer: '+' },
    { question: 'Where can I watch?', answer: '+' },
    { question: 'How do I cancel?', answer: '+' },
    { question: 'What can I watch on Netflix?', answer: '+' },
    { question: 'Is Netflix good for kids?', answer: '+' },
  ];
  const [email, setEmail] = useState('');
  const refelement = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    refelement.current.focus();
  };
  
  return (
    <div className="bg-black flex flex-col items-center h-[700px]  p-[100px] border-t border-solid border-gray-500">
      {faqs.map((faq, index) => (
  <div key={index} className="flex justify-between items-center w-[1000px] bg-gray-800 p-4 mb-2">
    <div className='text-white text-3xl'>{faq.question}</div>
    <button className='text-white text-2xl'>{faq.answer}</button>
  </div>
))}
 <div className="text-white">
          <input 
            ref={refelement}
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="text-white w-[500px]  text-white text-xl h-[50px] bg-black rounded-lg shadow-lg border border-solid border-white mr-6 mt-10 p-2 font-3xl transition duration-300 ease-in-out hover:bg-gray-300" 
            placeholder="Enter your email"  
            required
          /> 
          <span>
            <button 
              onClick={handleSubmit} 
              className='w-[200px] bg-red-700 h-[60px] rounded-lg shadow-lg   font-3xl mr-4 hover:bg-red-600 transition duration-300'
            >
              Get Started
            </button>
          </span>
        </div>           
      
    </div>
    
  );
}

export default Side3;

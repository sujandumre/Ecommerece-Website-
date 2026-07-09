import React from 'react'
import dash1 from "../assets/dash1.png"; 

function Hero() {
  return (
    <div className='hero bg-blue-200 h-[550px] flex items-center justify-center'>
      <img
                  src={dash1}
                  alt="dashboard banner"
                   className="w-350 h-full object-cover"
                />
      </div>
  )
}

export default Hero
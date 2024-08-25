import React from 'react'
import Image from 'next/image';
import  logo from "/public/github.svg";
export default function  Topbar() {

return(
  <div className='bg-green-300 h-20'>
    <div className='flex '>
      <Image src={logo} alt='github'width={60}/>
      <h1 className='font-bold text-2xl ml-5 pt-5 md: '>GitHub Follower Analyser</h1>
    </div>
  </div>
)

}
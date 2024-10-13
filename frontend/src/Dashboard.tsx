import React from 'react'
import "./Split.css";
import GeneratedMusic from './GeneratedMusic';
import GeneratedMusic2 from './GeneratedMusic2';
import GeneratedMusic3 from './GeneratedMusic3'; // Ensure this file exists in the same directory

function Dashboard() {
  return (
    <div className='flex min-h-screen h-screen split-background flex-col'>
        <div className='p-4 poppins-bold text-white'>
            <h2 className='text-4xl'>Welcome, Michael</h2>
            <h4 className='text-2xl text-gray-200'>michaelzhao314@gmail.com</h4>
        </div>
        <div className='m-4'>
            <GeneratedMusic />
            <GeneratedMusic2 />
            <GeneratedMusic3 />
        </div>
    </div>
    
  )
}

export default Dashboard
import React from 'react'
import "./Split.css";
import GeneratedMusic from './GeneratedMusic';

function Dashboard() {
  return (
    <div className='flex min-h-screen h-screen split-background flex-col'>
        <div className='p-4 poppins-bold text-white'>
            <h2 className='text-4xl'>Welcome, user</h2>
            <h4 className='text-2xl'>email</h4>
        </div>
        <div className='m-4'>
            <GeneratedMusic />
        </div>
    </div>
    
  )
}

export default Dashboard
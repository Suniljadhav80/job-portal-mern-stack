import React from 'react'
import { ImDrawer } from "react-icons/im";
const Email = () => {
  return (
    <div className='mb-5 flex flex-col justify-start'>
        <h4 className="font-semibold text-primary py-1 flex">
        <ImDrawer className='text-lg text-primary mr-2' />
            Subscription</h4>
        <div className='py-2 items-center'>
            <p className='mb-2 text-sm text-primary'>Subscrib us to get latest events and news.</p>
            <input type='email' name='email' id='email' placeholder='name@example.com' className='mb-2 px-2 py-2 border font-semibold text-primary w-full block focus:outline-none' />
            <button className='py-1 px-2 text-white bg-blue-600 rounded block w-full font-semibold'>Subscribe</button>
        </div>
    </div>
  )
}

export default Email
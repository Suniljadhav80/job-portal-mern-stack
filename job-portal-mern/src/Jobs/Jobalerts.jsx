import React from 'react'
import { HiOutlineBuildingOffice } from "react-icons/hi2";
const JobAlerts = ({result}) => {
    console.log('Job Alerts: ', result);
  return (
    <div className='flex flex-col justify-start'>
        <h4 className="font-semibold text-primary py-1 flex">
            <HiOutlineBuildingOffice className='text-lg text-primary mr-2'/>
            Job Alerts
        </h4>
        
            {
                result.map((name, i) => {
                    return <div key={i} className='border px-2 pr-0 py-2 mb-1 rounded flex justify-between'>
                            <h4 className='font-semibold text-gray-600'>{name.companyName}</h4>
                            <h4 className='bg-blue-500 text-white text-xs font-semibold rounded-s-full px-2 py-1'>{name.vacancy}</h4>
                           </div>
                })
            }
    </div>
  )
}

export default JobAlerts
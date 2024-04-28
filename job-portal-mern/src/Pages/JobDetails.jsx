import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const JobDetails = () => {
    const {id} = useParams();
    const [job, setJob] = useState([]);
    // Fetch the job details when
    useEffect(() => {
       fetch(`http://localhost:2128/all-jobs/${id}`)
       .then(resp => resp.json())
       .then((data) => setJob(data))
       .catch(err => console.log(err)) 
    },[]);
    console.log('JOB DETAILS', job);

    // button
    const handleApply = async() => {
        // use sweet alert
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
          });
          if (url) {
            Swal.fire(`Entered URL: ${url}`);
          }
    }
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <h2>JobDetails: {id}</h2>
        <h1>{job.jobTitle}</h1>

        <button className='bg-blue-600 px-8 py-2 text-white mt-4' onClick={handleApply}>Apply Now</button>
    </div>
  )
}

export default JobDetails
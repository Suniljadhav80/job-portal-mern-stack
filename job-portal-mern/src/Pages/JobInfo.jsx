import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const JobInfo = () => {
    const {id} = useParams();
    const [job, setJob] = useState([]);

    // get job data from url id
    useEffect(() => {
        fetch(`http://localhost:2128/all-jobs/${id}`)
        .then(resp => resp.json())
        .then(data => setJob(data))
        .catch(err => console.log(err))
    }, []);
    console.log('job info data: ', job);
  return (
    <div>
        <h3>JobId: {id}</h3>
        <h1>{job.jobTitle}</h1>
    </div>
  )
}

export default JobInfo
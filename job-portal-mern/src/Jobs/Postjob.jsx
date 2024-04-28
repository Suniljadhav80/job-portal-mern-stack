import React from 'react'
import Email from './Email'
import JobAlerts from './Jobalerts'
import Jobevents from './Jobevents'

const Postjob = ({result}) => {
  return (
    <>
      <Email />
      <JobAlerts  result={result}/>
      <Jobevents result={result} />
    </>
  )
}

export default Postjob
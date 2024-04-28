import React, { useEffect, useState } from "react";
import {Link} from 'react-router-dom';
import { RiEdit2Fill } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
const MyJobs = () => {
  // states
  const [jobs, setJobs] = useState([]); // posted or applied jobs info
  const [searchText, setSearchText] = useState(""); // filter jobs
  const [isLoading, setIsLoading] = useState(true); // loading component

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:2128/my-jobs/vinay2128@gmail.com")
      .then((resp) => resp.json())
      .then((data) => {
        // console.log("data: ", data);
        setJobs(data);
        // handleFilterData();
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
      
  }, [searchText]);

  // filter job
  let filterJobs = jobs.filter(
    (item) =>
      item.jobTitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
  );
  useEffect(() => {
    
    console.log('filtered by input: ', filterJobs);
    console.log(searchText);
    setJobs(filterJobs)
  },[])

  // filter data on button
  const handleFilterData = () => {
    setIsLoading(true);
    
     setJobs(filterJobs);
    // console.log('filtered by button: ', jobs);
    setIsLoading(false);
  };

  // delete job from list
  const handleDelete = (id) => {
    // setIsLoading(true);
    console.log('deleted id = ', id);
    fetch(`http://localhost:2128/job-delete/${id}`, {
      method: "DELETE",
    })
    .then(resp => resp.json())
    .then((data) => {
      if(data.acknowledged === true){
        alert('Job Deleted Successfully');
        window.location.reload();
      }
      // setIsLoading(false);
     }
     )
    .catch(err => console.log(err));
    setIsLoading(false);
  }

  return (
    <div className="max-w-screen-2xl container mx-auto py-4 xl:px-24 px-4">
      <h1 className="font-semibold text-primary text-center mb-2">
        All My Jobs
      </h1>
      {/* filter section */}
      <div className="text-center">
        <input
          type="text"
          id="search"
          placeholder="Ex: Web Developer"
          name="search"
          onChange={(e) => setSearchText(e.target.value)}
          className="border rounded-sm py-1.5 pl-2 lg:w-6/12 w-full focus:outline-none"
        />
        <button
          className="bg-blue-600 text-white px-4 py-1.5 cursor-pointer focus:outline-none"
          onClick={() => {
            handleFilterData();
          }}
        >
          Search
        </button>
      </div>
      {/* job  listing in table format */}
      <div>
        {/* jobcount: {jobs.length} */}
        {/* tables */}
        <section className="py-1 bg-blueGray-50">
          <div className="xl:w-8/12 w-full mb-12 xl:mb-0 px-4 mx-auto mt-5">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blueGray-700">
                      All Job
                    </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <button
                      className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                    >
                      <Link to='/job-post'>Post A Job</Link>
                    </button>
                  </div>
                </div>
              </div>

              <div className="block w-full overflow-x-auto">
                <table className="items-center bg-transparent w-full border-collapse ">
                  <thead>
                    <tr>
                      <th className="job-table-header">Id</th>
                      <th className="job-table-header">Title</th>
                      <th className="job-table-header">Company</th>
                      <th className="job-table-header text-right">Salary</th>
                      <th className="job-table-header text-right">Action</th>
                    </tr>
                  </thead>
                    {
                      isLoading
                      ? (<div className="flex justify-center items-center h-20 text-primary font-semibold">loading...</div>) 
                      : (<tbody>
                        {
                          jobs.map((job, index) => (
                            <tr key={index}>
                                  <td className="border-t-0 px-6 align-middle border-l-0  border-r-0 text-xs whitespace-nowrap p-4 ">{index + 1}</td>
                                  <td className="border-t-0 px-6 align-middle border-l-0  border-r-0 text-xs whitespace-nowrap p-4 text-left">{job.jobTitle}</td>
                                  <td className="border-t-0 px-6 align-middle border-l-0  border-r-0 text-xs whitespace-nowrap p-4 text-left">{job.companyName}</td>
                                  <td className="border-t-0 px-6 align-middle border-l-0  border-r-0 text-xs whitespace-nowrap p-4 text-right">{job.minPrice} - {job.maxPrice}</td>
                                  <td className="border-t-0 px-6 align-middle border-l-0  border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                    <button className="px-3 py-1.5 mr-2">
                                      <Link to={`/edit/${job?._id}`}><RiEdit2Fill className="text-lg font-semibold text-gray-600"/><span className="hidden">Edit</span></Link>
                                    </button>
                                    <button className="px-3 py-1.5" onClick={() => handleDelete(job._id)}><MdDelete className="text-lg font-semibold text-gray-600"/><span className="hidden">Delete</span></button>
                                  </td>
                            </tr>
                          ))
                        }
                        
                      </tbody>)
                    }
                  
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MyJobs;

{/*
  <tr>
                      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                        1
                      </th>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        web developer
                      </td>
                      <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      cmp name
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        min. sal - max.sal
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        btn edit
                      </td>
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        btn delete
                      </td>
                    </tr> */
}

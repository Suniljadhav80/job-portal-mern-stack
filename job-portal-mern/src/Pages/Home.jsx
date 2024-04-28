import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Jobs from "./Jobs";
import Sidebar from "../sidebar/sidebar";
import Postjob from "../Jobs/Postjob";
// import jobProfile from "../../public/jobs.json";
const Home = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  // items per page
  const itemsPerpage = 4;

  useEffect(() => {
    setIsLoading(true);
    // fetch("jobs.json")
    fetch("http://localhost:2128/all-jobs")
      .then((resp) => resp.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log('job outside of the fetch: ', jobs);

  // filter by job title
  let filterItems = jobs.filter(
    (jobs) => jobs.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  // console.log("filterItems: ", filterItems);

  // calculate pages
  const calculatePages = () => {
    let startIndex = (currentPage - 1) * itemsPerpage;
    let endIndex = startIndex + itemsPerpage;
    return {startIndex, endIndex};
  };
  
  // next page
  const nextPage = () => {
    if(currentPage <  Math.ceil(filterItems.length / itemsPerpage)){
      setCurrentPage(currentPage + 1);
    }
  }
  
  // previous page
  const previousPage = () => {
    if(currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  // Handle Radio Buttons ----------------------
  const handleChange = (event) => {
    console.log("data: ", event.target.value);
    // calculatePages();
    setSelectedCategory(event.target.value);
  };
  // Handle Clicks Buttons ----------------------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  // main functin
  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    // filter input items
    if (query) {
      filteredJobs = filterItems;
    }
    // category filtering
    if (selected) {
      // debugger;
      console.log('selected: ', selected);
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          salaryType,
          maxPrice,
          experienceLevel,
          employmentType,
          postingDate
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          // postingDate <= selected ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() 
      );
    }
   
    // extract data items
    const {startIndex, endIndex} = calculatePages();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data, i) => (
      // console.log('map data: ', data)
      <Cards key={i} data={data} />
    ));
  };
  
  const result = filteredData(jobs, selectedCategory, query);

  // job search handler
  const inputHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div>
        <Banner query={query} inputHandler={inputHandler} />
        <div>
          {/* main content */}

          {/* <Jobs result = {result} /> */}
          <div className="bg-[#e0e0e0] md:px-24 px-4 grid grid-cols-4 md:py-4 py1 gap-4">
            <div className="bg-white p-4 rounded">
              <Sidebar handleChange={handleChange} handleClick={handleClick} />
            </div>
            <div className="bg-white p-1 rounded col-span-2">
              {isLoading ? (
                <p className="text-base text-primary/60 font-semibold">
                  Loading...
                </p>
              ) : result.length > 0 ? (
                <Jobs result={result} />
              ) : (
                <p className="text-base text-primary/80 font-semibold">
                  Job not found
                </p>
              )}
              {/* pagination */}
                {
                  result.length > 0
                  ? (
                    <div className="flex justify-center mt-4 mb-2 space-x-8">
                      <button className="text-xs text-primary font-semibold" onClick={previousPage} disabled = {currentPage === 1}>Previous</button>
                      <span className="text-xs text-gray-700 font-semibold">Pages: {currentPage} 0f {Math.ceil(filterItems.length / itemsPerpage)}</span>
                      <button className="text-xs text-primary font-semibold hover:underline" onClick={nextPage} disabled = {currentPage === Math.ceil(filterItems.length / itemsPerpage )}>Next</button>
                    </div>
                  )
                  : ''
                }

              {/* 
                <div className="flex justify-center mt-5 mb-5 space-x-8">
                
                <span>Page count</span>
                
              </div>
              */}
            </div>
            <div className="bg-white p-4 rounded">
              <Postjob result = {jobs} />
                

            </div>
          </div>

          {/* <div className="bg-[#fafafa] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12 ">
            <div className="bg-white p-4 rounded">left</div>
            <div className="col-span-2 bg-white p-4 rounded-sm"><Jobs result = {result}/></div>
            <div className="bg-white p-4 rounded">right</div>
          </div> */}
        </div>
      </div>
    </>
  );
};
export default Home;

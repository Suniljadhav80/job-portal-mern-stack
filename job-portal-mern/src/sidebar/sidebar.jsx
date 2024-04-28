import EmploymentTypes from "./Employment";
import JobPosting from "./Jobposting";
import Locations from "./Locations";
import Salaries from "./Salaries";
import WorkExperience from "./WorkExperience";

const Sidebar = ({handleChange, handleClick}) => {
    return (
        <>
            <h3 className="font-semibold text-gray-800">Filters</h3>
            {/* Location */}
            <Locations handleChange = {handleChange} />
            {/* salary type */}
            <Salaries handleChange = {handleChange} handleClick = {handleClick} />
            {/* Job Posting */}
            <JobPosting handleChange = {handleChange} />
            {/* Work Experience */}
            <WorkExperience handleChange = {handleChange} />
            {/* Employment Type */}
            <EmploymentTypes handleChange = {handleChange} />


        </>
    )
}

export default Sidebar;
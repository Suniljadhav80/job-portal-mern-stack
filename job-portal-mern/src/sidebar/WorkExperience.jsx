import Inputs from "./Inputs";

const WorkExperience = ({handleChange}) => {
    return(
        <>
            <h4 className="font-semibold text-primary py-1">Work Experience</h4>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          onChange={handleChange}
          value=''
          defaultChecked = {true}
        />
        <span className="checkmark"></span> All
      </label>
      <Inputs handleChange ={handleChange} value="Internship" title = "Internship" name = "test" />
      <Inputs handleChange ={handleChange} value="Work remotely" title = "Work remotely" name = "test" />
      <Inputs handleChange ={handleChange} value="Any experience" title = "Any experience" name = "test" />
        </>
    )
}

export default WorkExperience;
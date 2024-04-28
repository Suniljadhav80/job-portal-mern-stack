import Inputs from "./Inputs";

const EmploymentTypes = ({handleChange}) => {
    return(
        <>
            <h4 className="font-semibold text-primary py-1">Employment Type</h4>
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
      <Inputs handleChange ={handleChange} value="Part-time" title = "Part-time" name = "test" />
      <Inputs handleChange ={handleChange} value="Full-time" title = "Full-time" name = "test" />
      <Inputs handleChange ={handleChange} value="Temporary" title = "Temporary" name = "test" />
        </>
    )
}

export default EmploymentTypes;
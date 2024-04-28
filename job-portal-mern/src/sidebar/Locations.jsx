import Inputs from "./Inputs";

const Locations = ({ handleChange }) => {
  return (
    <>
      <h4 className="font-semibold text-primary py-1">Locations</h4>
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
      <Inputs handleChange ={handleChange} value="london" title = "London" name = "test" />
      <Inputs handleChange ={handleChange} value="boston" title = "Boston" name = "test" />
      <Inputs handleChange ={handleChange} value="seattle" title = "Seattle" name = "test" />
      <Inputs handleChange ={handleChange} value="pune" title = "Pune" name = "test" />
    </>
  );
};

export default Locations;

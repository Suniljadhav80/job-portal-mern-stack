const Inputs = ({handleChange, value, name, title}) => {
  return (
    <>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name={name}
          onChange={handleChange}
          value={value}
        />
        <span className="checkmark"></span> {title}
      </label>
    </>
  );
};

export default Inputs;

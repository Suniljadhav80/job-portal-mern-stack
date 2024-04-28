import Inputs from "./Inputs";

const JobPosting = ({ handleChange }) => {
    const cdate = new  Date();
    // console.log('now: ', now);
    // date categories with conversion
    const today = new Date(cdate - 24 * 60 * 60 * 1000);
    const sevenDays = new Date(cdate - 7 * 24 * 60 * 60 * 1000);
    const thirtyDays = new Date(cdate - 30 * 24 * 60 * 60 * 1000);
    // converting Date object into string;
    const Today = today.toISOString().slice(0, 10);
    const SevenDays = sevenDays.toISOString().slice(0, 10);
    const ThirtyDays = thirtyDays.toISOString().slice(0, 10);
    console.log('today: ', Today);
    console.log('sevenDays: ', SevenDays);
    console.log('thirtyDays: ', ThirtyDays);

  return (
    <>
      <h4 className="font-semibold text-primary py-1">Job Posting</h4>
      <label className="sidebar-label-container">
        <input
          type="radio"
          name="test"
          onChange={handleChange}
          value=""
        />
        <span className="checkmark"></span> All time
      </label>
      <Inputs handleChange ={handleChange} value={Today} title = "Today" name = "test" />
      <Inputs handleChange ={handleChange} value={SevenDays} title = "Last 7 days" name = "test" />
      <Inputs handleChange ={handleChange} value={ThirtyDays} title = "Last 30 days" name = "test" />
    </>
  );
};

export default JobPosting;

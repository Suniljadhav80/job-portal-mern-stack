import { Link } from "react-router-dom";
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi";
const Cards = ({ data }) => {
  // console.log(`data: `, data);
  const {
            _id,jobTitle, companyName, companyLogo, minPrice,
            maxPrice, salaryType, jobLocation, postingDate,
            experienceLevel, employmentType, description
        } = data;
  
  return (
    <>
       <section >
            <div className="card ">
                
                <Link to={`/job-info/${_id}`}>
                <div className="flex items-start gap-2">
                <img src= {companyLogo} alt="" />
                <div>
                    <h4 className="text-primary text-base py-1">{companyName}</h4>
                    <h3 className="font-semibold text-black mb-1">{jobTitle}</h3>
                    <div className="flex gap-1">
                        <span className="text-primary text-sm items-center flex gap-1"><FiMapPin /> {jobLocation}</span>
                        <span className="text-primary text-sm items-center flex gap-1"><FiDollarSign/>{minPrice} - {maxPrice}</span>
                        <span className="text-primary text-sm items-center flex gap-0"><FiClock/>{employmentType}</span>
                        <span className="text-primary text-sm  items-center flex gap-1"><FiCalendar/>{postingDate}</span>
                    </div>
                    <p className="text-primary text-base py-2">{description}</p>
                </div>
                </div>
                </Link>
            </div>
       </section>



























      {/* <section className="card">
        <Link to={"/"} className="flex gap-4 flex-col sm:flex-row items-start">
          <img src={companyLogo} alt="" />
          <div>
            <h4 className="text-primary mb-1">{companyName}</h4>
            <h4 className="text-lg font-semibold mb-2">{jobTitle}</h4>
            <div className="flex flex-wrap gap-2 mb-2 text-primary/90 text-base">
              <span className="flex items-center gap-2"><FiMapPin />{jobLocation}</span>
              <span className="flex items-center gap-2"><FiClock />{employmentType}</span>
              <span className="flex items-center gap-2"><FiDollarSign />{minPrice} - {maxPrice}</span>
              <span className="flex items-center gap-2"><FiCalendar />{postingDate}</span>
            </div>
            <p className="text-primary text-base">{description}</p>
          </div>
        </Link>
      </section> */}
    </>
  );
};

export default Cards;

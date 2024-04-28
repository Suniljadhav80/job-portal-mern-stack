import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Salary = ({title, page}) => {

  // salary state
  const [salary, setSalary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('salary.json')
    .then(resp => resp.json())
    .then((data) => setSalary(data))
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="max-w-screen-2xl mx-auto container lg:px-24 px-4 py-10">
      <div className="bg-[#f0f0f0] lg:py-24 sm:py-12 py-8 flex justify-center items-center flex-col">
        <h1 className="text-4xl text-blue-600 font-semibold mb-2">{title}</h1>
        <p className="block text-sm">
          <Link to ="/" className="underline text-primary text-sm px-1">Home</Link>/<span className="text-sm font-semibold text-gray-900">{page}</span>
        </p>
      </div>
      {/* salary ui */}
      <section className="mt-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 items-center grid">
            {
              salary.map((items, index) => (
                <div key={index} className="border shadow-sm rounded-sm px-4 py-4 text-center">
                  <h4 className="text-gray-700 font-semibold text-lg">{items.title}</h4>
                  <h2 className="text-xl text-blue-700 underline">{items.salary}</h2>
                  <p className="text-sm text-primary">{items.status}</p>
                  <p className="text-sm text-primary">{items.skills}</p>
                </div>
              ))
            }
      </section>
    </div>
  )
}

export default Salary;

import { MdOutlineSearch } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
const Banner = (props) => {
    const {query, inputHandler} = props;
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4 md:py-5 py-14">
        <h1 className="text-5xl font-bold text-gray-800 mb-3">
          Find your <span className="text-blue-600">dream job</span> today!
        </h1>
        <p className="text-lg mb-8 text-black/70">
          Millions of jobs in FullStack, Software and technology sector are
          waiting for you.
        </p>
        {/* job search category fields */}
        <div className="flex justify-start gap-0 md:flex-row flex-col">
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/2 w-full">
            <input
              type="text"
              placeholder="what you are looking for?"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-grey-400 focus:right-0 sm:text-sm sm:leading-6"
              value = {query}
              onChange={(e) => inputHandler(e)}
            />
                <MdOutlineSearch className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          <div className="flex md:rounded-s-md rounded shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 md:w-1/3 w-full">
            <input
              type="text"
              placeholder="Location"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 placeholder:text-grey-400 focus:right-0 sm:text-sm sm:leading-6"
            />
                <GrLocation className="absolute mt-2.5 ml-2 text-gray-400" />
          </div>
          <button className="py-2 px-5 border rounded bg-blue-500 text-white ml-1">Find</button>
        </div>
      </div>
    </>
  );
};

export default Banner;

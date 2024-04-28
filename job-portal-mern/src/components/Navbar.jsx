import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark  } from "react-icons/fa6";
const Navbar = () => {
  // Hide/Show Toggle button
  const [isMenuOpen, setMenuOpen] = useState(false);

  // button handler
  const handleToggle = () => {
    setMenuOpen(!isMenuOpen);
  } 

  const navLink = [
    { path: "/", title: "Search Job" },
    { path: "/my-jobs", title: "My Job" },
    { path: "/job-salary", title: "Salary Estimate" },
    { path: "/job-post", title: "Post A Job" },
  ];

  return (
    <>
      <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
        <nav className="flex justify-between items-center py-6">
          <a href="/" className="flex items-center gap-2 text-2xl text-darkPink ">Job Portal</a>
          <ul className="hidden md:block gap-2 justify-between">
            {navLink.map(({ path, title }) => (
              <li key={path} className="inline-block px-6 text-black font-bold">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                  isActive ? "active" :  ""
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
            <Link to="/login" className="py-2 px-5 border rounded">Login</Link>
            <Link className="py-2 px-5 border rounded bg-blue-500 text-white">Sign In</Link>
          </div>

          {/* mobile menu */}
          <div className="md:hidden block">
            <button onClick={handleToggle}>
              {
                isMenuOpen ? < FaXmark className="w-5 h-5 text-gray-950" /> : <FaBarsStaggered  className="w-5 h-5 text-gray-950" />
              }
            </button>
          </div>
        </nav>
        {/* navitems for mobile */}
        <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
            {navLink.map(({ path, title }) => (
              <li key={path} className="text-base text-white first:text-white py-1">
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                  isActive ? "mobile-active" :  ""
                  }
                >
                  {title}
                </NavLink>
              </li>
            ))}
           <li> <Link to="/login" className="py-1  text-white">Login</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Navbar;

import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";
import 'react-tooltip/dist/react-tooltip.css'
import useAxiosSecure from "../Providers/useAxiosSecure";

const Navbar = () => {
  const { logOut, user } = useAuth();
  const axiosSecure=useAxiosSecure()

  const handleLogOut = async () => {
    try {
      await logOut();
      axiosSecure.post('/logout')
      .then(res=>console.log(res.data))
      
      toast.success("Good Bye");
    } catch (error) {
      toast.error(error.message);
      console.error(error);
    }
  };

  const navLinks = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/need-volunteer">Need Volunteer</Link></li>
      {user?'': (<li><Link to="/login">Login</Link></li>
      )}
      {user && (
        <li>
          <div className="dropdown  dropdown-center">
            <div tabIndex={0} role="button" className="cursor-pointer">
              My Profile
            </div>
            <ul className="menu menu-sm dropdown-content bg-white rounded-lg shadow-lg w-56 z-[1000] p-2 mt-2">
              <li><Link to="/add-volunteer">Add Volunteer Post</Link></li>
              <li><Link to={`/my-post/${user?.email}`}>Manage My Post</Link></li>
              <li><Link to={`/my-request/${user?.email}`}>My Requested Posts</Link></li>
            </ul>
          </div>
        </li>
      )}
    </>
  );

  return (
    <div className="navbar bg-white border-b shadow-md px-4 py-2 sticky top-0 z-50">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content mt-3 z-[999] p-2 shadow bg-white rounded-box w-60 text-gray-700">
            {navLinks}
          </ul>
        </div>
        {/* Brand Name */}
        <Link to="/" className="text-2xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          helpMates
        </Link>
      </div>

      {/* Navbar Center (hidden on small screens) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2 font-medium text-gray-700">
          {navLinks}
        </ul>
      </div>

      {/* Navbar End (Avatar) */}
      <div className="navbar-end">
        {user && (
          <div tabIndex={0} className="btn  dropdown dropdown-left dropdown-hover btn-ghost btn-circle avatar">
            <div
              className="w-10 h-10 rounded-full ring   ring-pink-400 "
             
            >
              <img
                src={
                  user?.photoURL ||
                  "https://www.repro.cam.ac.uk/sites/default/files/images/profile/no-photo.png"
                }
                alt="User"
                className="w-full h-full object-cover"
              />

              <ul  tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52  shadow-sm">
                 {user && <li><button onClick={handleLogOut} className="hover:text-red-600">Logout</button></li>}
                {
                  user && <li><button>{user.displayName}</button></li>
                }
                
                 
              </ul>
              
                

            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

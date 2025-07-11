import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const Navbar = () => {
  const { logOut, user } = useAuth();
  

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("Good Bye");
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  const navLinks = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={'/need-volunteer'}>Need Volunteer</Link>
      </li>
      {user ? (
        <li >
          {" "}
          <button onClick={handleLogOut}>Logout</button>
        </li>
      ) : (
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      )}

      <li>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="cursor-pointer">
            My Profile
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to={"/add-volunteer"}>Add Volunteer Post</Link>
            </li>
            <li>
              <Link to={`/my-post/${user?.email}`}>Manage My Post</Link>
            </li>
            <li>
              <Link to={`/my-request/${user?.email}`} >My Volunteer Requested Post</Link>
            </li>
          </ul>
        </div>
      </li>
    </>
  );

  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={'/'} className="font-bold text-xl">helpMates</Link>
      </div>
      {/* <div className="navbar hidden lg:flex">
    
  </div> */}
      <div className="navbar-end">
        <ul className="menu menu-horizontal px-1 hidden lg:flex  ">
          {navLinks}
        </ul>

        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={`${user?.photoURL? user.photoURL: 'https://www.repro.cam.ac.uk/sites/default/files/images/profile/no-photo.png'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

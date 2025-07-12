import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import useAuth from "../Hooks/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const { googleLogIn, signIn } = useAuth();
  const location=useLocation()
  const navigate=useNavigate()
  console.log(location)

  const handleGoogleLogIn = async () => {
    try {
      await googleLogIn();
      toast.success("Success");

      location?.state?navigate(location.state):navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
   
    try {
      const result = await signIn(email, password);
      console.log(result);
      location?.pathname?navigate(location.pathname):navigate('/')
    } catch (error) {
        toast.error(error.message)
      
    }
  };
  return (
    <div className="flex justify-center items-center my-10">
      <div className=" w-96 bg-gray-200 p-12 rounded-2xl ">
        <h1 className="text-center font-bold text-3xl mb-10">Log In</h1>
        <form onSubmit={handleLogIn}>
          <label>Email</label>
          <input type="text" className="input block" name="email"  />
          <label>Password</label>
          <input type="text" name="password" className="input block" />
          <input
            className="btn btn-block mt-4 bg-black text-white"
            type="submit"
            value="Login"
          />
        </form>
        <p className="mt-2">
          Don't have an account yet?{" "}
          <span className="ml-2 btn-link text-blue-600">
            <Link to={"/register"}>Register</Link>
          </span>{" "}
        </p>
        <div className="flex justify-center items-center gap-6 mt-5">
          <Link onClick={handleGoogleLogIn}>
            <FcGoogle size={30}></FcGoogle>
          </Link>
          <Link>
            <FaGithub size={30}></FaGithub>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;

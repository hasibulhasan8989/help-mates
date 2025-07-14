import axios from "axios";
import { useEffect } from "react";
import useAuth from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  withCredentials: true,
  baseURL: "https://help-mates-server.vercel.app",
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
   axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (err) => {
        if (err.response.status === 401 || err.response.status === 403) {
            
          logOut().then(() => navigate("/login"));
        }
        return Promise.reject(err);
      }
    );
   
   
  }, [navigate,logOut]);

  return axiosSecure;
};

export default useAxiosSecure;

import VolunteerCard from "./VolunteerCard";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../Providers/useAxiosSecure";
import NoDataFound from "../NoData/NoData";

import { CiBoxList } from "react-icons/ci";
import { BsGrid } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NeedVolunteer = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [volunteers, setVolunteer] = useState([]);
  const [currentPage,setCurrentPage]=useState(1)
  const [allItem, setAllItem] = useState(0);
  const [toggle,setToggle]=useState(true)

  const itemPerPage = 4;
  useEffect(() => {
    axiosSecure.get(`/volunteer-count?text=${search}`).then((res) => setAllItem(res.data));
  }, [search]);

  const Pages = [...Array(Math.ceil(allItem / itemPerPage)).keys()];

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1)
  };

  const handlePage = (pageNo) => {
   setCurrentPage(pageNo)
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/search-volunteer?text=${search}&currentPage=${currentPage}&itemPerPage=${itemPerPage}`)
      .then((res) => setVolunteer(res.data));
  }, [search,currentPage,itemPerPage]);

  return (
    <div>
      <div className="mt-4 mb-2">
        <Helmet>
				<title>Need Volunteer | HelpMates</title>
			</Helmet>
        <div className=" w-full gap-2  flex items-center max-w-xs mx-auto">
          <input
            onChange={handleSearch}
            type="search"
            name="search"
            placeholder="Search Volunteer..."
            className="w-full py-2 pl-10 pr-4 text-sm border rounded-full shadow-sm outline-none transition focus:ring-2 focus:ring-pink-500 focus:border-pink-500 "
          />
          {
            toggle?<CiBoxList onClick={()=>{setToggle(!toggle)}}  className="cursor-pointer" size={30}color="red" />:<BsGrid onClick={()=>{setToggle(!toggle)}}  className="cursor-pointer" size={30}color="red" ></BsGrid>
          }
        </div>
      </div>

    {
      toggle?   <div className="grid mt-4 mb-4 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {volunteers.map((volunteer) => (
          <VolunteerCard
            key={volunteer._id}
            volunteer={volunteer}
          ></VolunteerCard>
        ))}
        {/* pagination button*/}
        
      </div>: <div className=" mt-4 mb-12">

        <div className="overflow-x-auto">
  <table className="table">
    {/* head post_title,
    need_volunteer,
    thumbnail,
    deadline,
    location*/}
    <thead>
      <tr className="">
        <th>
          sl no.
        </th>
        <th>Title</th>
        <th>Location & Deadline</th>
        <th>Volunteer Need</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

       {volunteers.map((volunteer,idx) => (
          <tr key={volunteer._id}  className={`${idx%2===1?'bg-red-50':'bg-blue-50'}`}>
        <td>
          {idx+1}
        </td>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={volunteer.thumbnail}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{volunteer.organizer.name}</div>
              <div className="text-sm opacity-50">Dhaka,Bangladesh</div>
            </div>
          </div>
        </td>
        <td>
          {volunteer.location}
          <br />
          <span className="badge badge-ghost badge-sm">{volunteer.deadline}</span>
        </td>
        <td>{volunteer.need_volunteer}</td>
        <th>
           <Link
          to={`/view-details/${volunteer._id}`}
          className="block text-center mt-4  py-2 bg-gradient-to-r from-indigo-300 to-purple-600 text-white rounded-md hover:brightness-110 transition"
        >
          View Details
        </Link>
        </th>
      </tr>
        ))}


      
      
      
    </tbody>
    {/* foot */}
 
  </table>
</div>
      </div>
    }


    
      {
        volunteers.length>0 ? <div className="flex justify-center mb-5">
          <div className="join ">
          <button onClick={()=>{if(currentPage>1){setCurrentPage(currentPage-1)}} } className="btn rounded-l-2xl  ">prev</button>

          {Pages.map((page) => (
            <button  onClick={() => handlePage(page+1)} className={`btn ${currentPage===page+1 && "btn-accent" }`} key={page}>
              {page + 1}
            </button>
          ))}
          <button onClick={()=>{if(currentPage<Pages.length){setCurrentPage(currentPage+1)}} }    className="btn rounded-r-2xl">next</button>
        </div>
        </div> :<NoDataFound></NoDataFound>
      }
    </div>
  );
};

export default NeedVolunteer;

import VolunteerCard from "./VolunteerCard";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../Providers/useAxiosSecure";
import NoDataFound from "../NoData/NoData";
import { Helmet } from "react-helmet";

const NeedVolunteer = () => {
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [volunteers, setVolunteer] = useState([]);
  const [currentPage,setCurrentPage]=useState(1)
  const [allItem, setAllItem] = useState(0);

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
        <div className=" w-full max-w-xs mx-auto">
          <input
            onChange={handleSearch}
            type="search"
            name="search"
            placeholder="Search Volunteer..."
            className="w-full py-2 pl-10 pr-4 text-sm border rounded-full shadow-sm outline-none transition focus:ring-2 focus:ring-pink-500 focus:border-pink-500 "
          />
        </div>
      </div>
      <div className="grid mt-4 mb-4 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {volunteers.map((volunteer) => (
          <VolunteerCard
            key={volunteer._id}
            volunteer={volunteer}
          ></VolunteerCard>
        ))}
        {/* pagination button*/}
        
      </div>
      {
        volunteers.length>0 ? <div className="flex justify-center mb-5">
          <div className="join ">
          <button className="btn rounded-l-2xl  ">prev</button>

          {Pages.map((page) => (
            <button  onClick={() => handlePage(page+1)} className={`btn ${currentPage===page+1 && "btn-accent" }`} key={page}>
              {page + 1}
            </button>
          ))}
          <button className="btn rounded-r-2xl">next</button>
        </div>
        </div> :<NoDataFound></NoDataFound>
      }
    </div>
  );
};

export default NeedVolunteer;

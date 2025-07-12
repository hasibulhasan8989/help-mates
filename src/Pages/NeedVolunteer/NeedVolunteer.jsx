
import VolunteerCard from "./VolunteerCard";
import { IoIosSearch } from "react-icons/io";
import { useEffect, useState } from "react";
import axios from "axios";

const NeedVolunteer = () => {
 
  const [search, setSearch] = useState("");
  const [volunteers,setVolunteer]=useState([])

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(()=>{
    axios.get(`http://localhost:3000/search-volunteer?text=${search}`)
    .then(res=>setVolunteer(res.data))
  },[search])

  console.log(search)

  return (
    <div>
      <div className="mt-4 mb-8">
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
      <div className="grid my-20 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {volunteers.map((volunteer) => (
          <VolunteerCard
            key={volunteer._id}
            volunteer={volunteer}
          ></VolunteerCard>
        ))}
      </div>
    </div>
  );
};

export default NeedVolunteer;

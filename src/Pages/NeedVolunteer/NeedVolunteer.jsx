import { useLoaderData } from "react-router-dom";
import VolunteerCard from "./VolunteerCard";


const NeedVolunteer = () => {
    const volunteers=useLoaderData()
  
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            volunteers.map(volunteer=><VolunteerCard key={volunteer._id} volunteer={volunteer}  ></VolunteerCard>)
          }
        </div>
    );
};

export default NeedVolunteer;
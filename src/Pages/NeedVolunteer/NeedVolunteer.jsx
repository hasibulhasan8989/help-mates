import { useLoaderData } from "react-router-dom";
import VolunteerCard from "./VolunteerCard";


const NeedVolunteer = () => {
    const volunteers=useLoaderData()
  
    return (
        <div className="grid my-20 grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {
            volunteers.map(volunteer=><VolunteerCard key={volunteer._id} volunteer={volunteer}  ></VolunteerCard>)
          }
        </div>
    );
};

export default NeedVolunteer;
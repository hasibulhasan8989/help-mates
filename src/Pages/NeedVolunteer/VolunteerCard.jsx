import { Link } from "react-router-dom";

const VolunteerCard = ({ volunteer }) => {
  const {
    _id,
    post_title,
    need_volunteer,
    
    location,
  } = volunteer;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post_title}</h2>
        <p className="font-semibold">
          Volunteer Need : {need_volunteer}
        </p>
        <p className="font-semibold">Location :{location}</p>
        <div className="card-actions justify-end">
         <Link to={`/view-details/${_id}`}  className="btn btn-block bg-black text-white">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;

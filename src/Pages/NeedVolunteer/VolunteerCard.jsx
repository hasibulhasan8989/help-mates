import { Link } from "react-router-dom";

const VolunteerCard = ({ volunteer }) => {
  const {
    _id,
    post_title,
    need_volunteer,
    thumbnail,
    deadline,
    location,
  } = volunteer;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <img
          src={thumbnail}
          alt={post_title}
          className="w-full h-56 object-cover"
        />
        <div className="absolute top-2 left-2 bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded-md shadow-md">
          Volunteers Needed: {need_volunteer}
        </div>
      </div>
      <div className="p-5 space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{post_title}</h2>
        <p className="text-sm text-gray-600">
          📍 <span className="font-medium">{location}</span>
        </p>
        <p className="text-sm text-gray-600">
          ⏰ <span className="font-medium">Deadline:</span> {deadline}
        </p>
        <Link
          to={`/view-details/${_id}`}
          className="block text-center mt-4 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md hover:brightness-110 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default VolunteerCard;

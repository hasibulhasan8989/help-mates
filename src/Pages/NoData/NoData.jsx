import { Link } from "react-router-dom";

const NoDataFound = ({manage}) => {
  return (
    <div className="flex flex-col  my-10 items-center justify-center h-[60vh] text-center px-4">
      <img
        src="https://i.ibb.co/TMp1H7YY/9170826.jpg"
        alt="No Data Found"
        className="w-60 mb-6"
      />
      <h2 className="text-2xl font-semibold mb-2">No Data Found</h2>
      <p className="text-gray-500 mb-4">Looks like there's nothing here right now.</p>
     {
        manage?<Link to="/add-volunteer" className="btn btn-primary">
        Add Post
      </Link>:<Link to="/need-volunteer" className="btn btn-primary">
        Request
      </Link>
     }
    </div>
  );
};

export default NoDataFound;

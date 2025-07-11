import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const volunteer = useLoaderData();
  const {
    _id,
    thumbnail,
    post_title,
    location,
    need_volunteer,
    deadline,
    organizer,
    category,
    description
  } = volunteer;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6 mt-12 mb-32">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Image Banner */}
        <img
          src={thumbnail}
          alt="Post Thumbnail"
          className="w-full h-64 object-cover"
        />

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Title & Meta */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-2xl font-bold text-gray-800">{category}</h1>
            <span className="text-sm text-gray-500">Deadline: {deadline}</span>
          </div>

          {/* Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-lg font-semibold text-gray-700">{post_title}</p>
              <p className="text-sm text-gray-600">
                <strong>Location:</strong>{location}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Volunteers Needed:</strong> {need_volunteer} 
              </p>
            </div>
            <div>
              <h3 className="text-md font-medium text-gray-700 mb-1">
                Organizer
              </h3>
              <p className="text-sm text-gray-600">
                <strong>Name:</strong> {organizer.name}
              </p>
              <p className="text-sm text-gray-600">
                <strong>Email:</strong>{organizer.email}
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-md font-medium text-gray-700 mb-1">
              Description
            </h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>

          {/* Action */}
          <div className="pt-4">
            <Link to={`/be-volunteer/${_id}`} className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

import axios from "axios";
import React, { useEffect, useState } from "react";
import VolunteerCard from "../../NeedVolunteer/VolunteerCard";
import { Link } from "react-router-dom";

const NeedNow = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/deadline-volunteer")
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <div className="my-20">
      <div className="text-center space-y-4 my-20">
        <h1 className="font-serif text-3xl font-bold">
          Be the Change – Volunteer Opportunities
        </h1>
        <p className="w-2/3 mx-auto">
          Be a part of something meaningful! Explore current opportunities where
          your time and effort can make a real difference. Find a cause that
          speaks to you and sign up today!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:grid-cols-3">
        {posts.map((post) => (
          <VolunteerCard
            volunteer={post}
            need={true}
            key={post._id}
          ></VolunteerCard>
        ))}
      </div>
      <div className="flex justify-center my-4">
        <Link
          to="/need-volunteer"
          className="inline-block px-6 py-3 text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 font-semibold"
        >
          See All
        </Link>
      </div>
    </div>
  );
};

export default NeedNow;

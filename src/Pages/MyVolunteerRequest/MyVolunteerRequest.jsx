import axios from "axios";
import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import NoDataFound from "../NoData/NoData";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Providers/useAxiosSecure";
import { Helmet } from "react-helmet";




const MyVolunteerRequest = () => {
  const { email } = useParams();
  const axiosSecure=useAxiosSecure()
 
    const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/my-request/${email}`)
      .then((res) => setPosts(res.data));
  }, []);



  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:3000/request-delete/${id}`).then(() => {
          const remainPost = posts.filter((post) => post._id !== id);
          setPosts(remainPost);
        });

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  if (posts.length === 0) {
    return <NoDataFound></NoDataFound>;
  }
  return (
    <div>
      <Helmet>
				<title>My Request | HelpMates</title>
			</Helmet>
      <div className="container p-2 mt-2 mx-auto  sm:p-4 dark:text-gray-800">
        <h2 className="mb-4 text-2xl font-semibold leading-tight">
          Volunteer Request
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-300">
              <tr className="text-left">
                <th className="p-3">SL No.</th>
                <th className="p-3">Title</th>
                <th className="p-3">Deadline</th>
                <th className="p-3">Location</th>
                <th className="p-3 text-right">Update</th>
                <th className="p-3">Delete</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post, idx) => (
                <tr
                  key={post._id}
                  className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50"
                >
                  <td className="p-3">
                    <p>{idx + 1}</p>
                  </td>
                  <td className="p-3">
                    <p>{post.post_title}</p>
                  </td>
                  <td className="p-3">
                    <p>{post.deadline}</p>
                    <p className="dark:text-gray-600">
                      {new Date(post.deadline).toLocaleDateString("en-US", {
                        weekday: "long",
                      })}
                    </p>
                  </td>
                  <td className="p-3">
                    <p>{post.location}</p>
                  </td>
                  <td className="p-3 text-right">
                    <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                      <span>{post.status}</span>
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <span
                      onClick={() => handleDelete(post._id)}
                      className="px-3 py-1 cursor-pointer font-semibold rounded-md dark:bg-red-600 dark:text-gray-50"
                    >
                      <span>Cancel</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyVolunteerRequest;

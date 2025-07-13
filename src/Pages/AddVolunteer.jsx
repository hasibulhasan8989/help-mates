import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const AddVolunteer = () => {
  const [category, setCategory] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  // const [error, setError] = useState("");
  const { user } = useAuth();

  console.log(startDate.toLocaleDateString());

  const handleCategory = (e) => {
    const category = e.target.value;
    setCategory(category);
  };

  const handleVolunteerPost = async (e) => {
    e.preventDefault();
    const thumbnail = e.target.thumbnail.value;
    const post_title = e.target.post_title.value;
    const location = e.target.location.value;
    const need_volunteer = parseInt(e.target.need_volunteer.value);
    const name = e.target.organizer_name.value;
    const email = e.target.organizer_email.value;
    const description = e.target.description.value;

    if (!/^\d+$/.test(need_volunteer)) {
      return toast.error('Volunteer Must Be A Number')
    }
    const volunteer = {
      thumbnail,
      post_title,
      location,
      need_volunteer,
      deadline: startDate.toLocaleDateString(),
      organizer: { name, email },
      category,
      description,
    };

    const { data } = await axios.post(
      `http://localhost:3000/add-volunteer`,
      volunteer
    );
    if (data.insertedId) {
      toast.success("Posted");
      e.target.reset();
      setStartDate(new Date())
    }
  };

  return (
    <div className="my-10 px-4 md:px-10 py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg">
      <Helmet>
				<title>AddVolunteer | HelpMates</title>
			</Helmet>
  <form onSubmit={handleVolunteerPost} className="space-y-10">
    <h2 className="text-3xl font-bold text-center text-gray-800">Create a Volunteer Post</h2>

    <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
      {/* Column 1 */}
      <div className="bg-white p-6 rounded-2xl shadow space-y-4">
        <label className="block font-medium text-gray-700">Thumbnail</label>
        <input name="thumbnail" type="text" placeholder="Image URL..." className="input input-bordered w-full" />

        <label className="block font-medium text-gray-700">Post Title</label>
        <input name="post_title" type="text" placeholder="Volunteer for Beach Cleanup" className="input input-bordered w-full" />

        <label className="block font-medium text-gray-700">Description</label>
        <textarea name="description" rows={4} placeholder="Brief description of the post" className="textarea textarea-bordered w-full"></textarea>
      </div>

      {/* Column 2 */}
      <div className="bg-white p-6 rounded-2xl shadow space-y-4">
        <label className="block font-medium text-gray-700">Category</label>
        <select
          required
          onChange={handleCategory}
          className="select select-bordered w-full"
        >
          <option value="">Select Category</option>
          <option value="Health Care">Health Care</option>
          <option value="Education">Education</option>
          <option value="Social Service">Social Service</option>
          <option value="Animal Welfare">Animal Welfare</option>
        </select>

        <label className="block font-medium text-gray-700">Location</label>
        <input name="location" type="text" placeholder="City, Area..." className="input input-bordered w-full" />

        <label className="block font-medium text-gray-700">No. of Volunteers Needed</label>
        <input name="need_volunteer" type="number" min="1" className="input input-bordered w-full" />
      </div>

      {/* Column 3 */}
      <div className="bg-white p-6 rounded-2xl shadow space-y-4">
        <label className="block font-medium text-gray-700">Deadline</label>
        <DatePicker
          className="input input-bordered w-full"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

        <label className="block font-medium text-gray-700">Organizer Name</label>
        <input
          disabled
          defaultValue={user?.displayName}
          name="organizer_name"
          type="text"
          className="input input-bordered w-full bg-gray-100"
        />

        <label className="block font-medium text-gray-700">Organizer Email</label>
        <input
          disabled
          defaultValue={user?.email}
          name="organizer_email"
          type="email"
          className="input input-bordered w-full bg-gray-100"
        />
      </div>
    </div>

    {/* Submit Button */}
    <div className="flex justify-center">
      <input
        type="submit"
        value="Post"
        className="btn btn-wide bg-black text-white hover:bg-gray-800 transition-all duration-300 shadow-lg mt-6"
      />
    </div>
  </form>
</div>

  );
};

export default AddVolunteer;

import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const BeVolunteer = () => {
  const volunteerPost = useLoaderData();
  const { user } = useAuth();
  const navigate=useNavigate()
  const {
    _id,
    thumbnail,
    post_title,
    location,
    need_volunteer,
    deadline,
    organizer,
    category,
    description,
  } = volunteerPost;

  const handleBeVolunteer = (e) => {
    e.preventDefault();
    const thumbnail = e.target.thumbnail.value;
    const post_title = e.target.post_title.value;
    const location = e.target.location.value;
    const need_volunteer = parseInt(e.target.need_volunteer.value);
    const name = e.target.organizer_name.value;
    const email = e.target.organizer_email.value;
    const description = e.target.description.value;
    const deadline=e.target.deadline.value;
    const suggestion=e.target.suggestion.value;
    const volunteer_email=e.target.volunteer_email.value;
    const volunteer_name=e.target.volunteer_name.value;
    const category=e.target.category.value;
    const beVolunteer={
        thumbnail,
        post_title,
        location,
        need_volunteer,
        description,
        deadline,
        category,
        suggestion,
        volunteer:{volunteer_name,volunteer_email},
        organizer:{name,email},
        status:'Requested'
    }
    if(email===volunteer_email){
        return toast.error("You are not allowed Try from another account!!")
    }
    if(need_volunteer<=0){
        return toast.error('No Volunteer Require')
    }

   axios.post(`http://localhost:3000/be-volunteer?id=${_id}`,beVolunteer)
   .then(res=>{
    if(res.data.insertedId){
        toast.success("Applied Success")
        navigate(-1)
        
    }
   })

  };

  return (
    <div className="my-10 px-4 md:px-10 py-16 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-lg">
      <form onSubmit={handleBeVolunteer} className="space-y-10">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Apply For a Volunteer Post
        </h2>

        <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
          {/* Column 1 */}
          <div className="bg-white p-6 rounded-2xl shadow space-y-4">
            <label className="block font-medium text-gray-700">Thumbnail</label>
            <input
              disabled
              defaultValue={thumbnail}
              name="thumbnail"
              type="text"
              placeholder="Image URL..."
              className="input input-bordered w-full"
            />

            <label className="block font-medium text-gray-700">
              Post Title
            </label>
            <input
              disabled
              defaultValue={post_title}
              name="post_title"
              type="text"
              placeholder="Volunteer for Beach Cleanup"
              className="input input-bordered w-full"
            />

            <label className="block font-medium text-gray-700">
              Description
            </label>
            <textarea
              disabled
              defaultValue={description}
              name="description"
              rows={4}
              placeholder="Brief description of the post"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          {/* Column 2 */}
          <div className="bg-white p-6 rounded-2xl shadow space-y-4">
            <label className="block font-medium text-gray-700">Category</label>
            <select
             name="category"
              required
              value={category}
              disabled
              className="select select-bordered w-full"
            >
              <option value="">Select Category</option>
              <option value="Health Care">Health Care</option>
              <option value="Education">Education</option>
              <option value="Social Service">Social Service</option>
              <option value="Animal Welfare">Animal Welfare</option>
            </select>

            <label className="block font-medium text-gray-700">Location</label>
            <input
              disabled
              defaultValue={location}
              name="location"
              type="text"
              placeholder="City, Area..."
              className="input input-bordered w-full"
            />

            <label className="block font-medium text-gray-700">
              No. of Volunteers Needed
            </label>
            <input
              disabled
              defaultValue={need_volunteer}
              name="need_volunteer"
              type="number"
              min="1"
              className="input input-bordered w-full"
            />
          </div>

          {/* Column 3 */}
          <div className="bg-white p-6 rounded-2xl shadow space-y-4">
            <label className="block font-medium text-gray-700">Deadline</label>
            <input
              disabled
              name="deadline"
              defaultValue={deadline}
              className="input"
              type="text"
            />

            <label className="block font-medium text-gray-700">
              Organizer Name
            </label>
            <input
              disabled
              defaultValue={organizer.name}
              name="organizer_name"
              type="text"
              className="input input-bordered w-full bg-gray-100"
            />

            <label className="block font-medium text-gray-700">
              Organizer Email
            </label>
            <input
              disabled
              defaultValue={organizer.email}
              name="organizer_email"
              type="email"
              className="input input-bordered w-full bg-gray-100"
            />
          </div>
          {/* Column 4 */}
          <div className="bg-white p-6 rounded-2xl shadow space-y-4">
            <label className="block font-medium text-gray-700">
              Volunteer Name
            </label>
            <input
              disabled
              defaultValue={user?.displayName}
              name="volunteer_name"
              type="text"
              className="input input-bordered w-full bg-gray-100"
            />

            <label className="block font-medium text-gray-700">
              Volunteer Email
            </label>
            <input
              disabled
              defaultValue={user?.email}
              name="volunteer_email"
              type="email"
              className="input input-bordered w-full bg-gray-100"
            />

            <label className="block font-medium text-gray-700">
              Suggestion
            </label>
            <textarea
              name="suggestion"
              required
              rows={4}
              placeholder="Any Suggestion For Us??"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <input
            type="submit"
            value="Request"
            className="btn btn-wide bg-black text-white hover:bg-gray-800 transition-all duration-300 shadow-lg mt-6"
          />
        </div>
      </form>
    </div>
  );
};

export default BeVolunteer;

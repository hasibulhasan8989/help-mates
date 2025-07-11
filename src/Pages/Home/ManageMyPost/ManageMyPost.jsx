import axios from "axios";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const ManageMyPost = () => {
    const [posts,setPosts]=useState(useLoaderData())
    

    const handleDelete=(id)=>{
    axios.delete(`http://localhost:3000/post-delete/${id}`)
    .then(()=>{
     const remainPost=posts.filter(post=>post._id !== id)
     setPosts(remainPost)
    })
    }
    


    return (
       <div className="container p-2 mx-auto mb-20 sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
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
				{
                    posts.map((post,idx)=><tr key={post._id} className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>{idx+1}</p>
					</td>
					<td className="p-3">
						<p>{post.post_title}</p>
					</td>
					<td className="p-3">
						<p>{post.deadline}</p>
						<p className="dark:text-gray-600">{new Date(post.deadline).toLocaleDateString('en-US', { weekday: 'long' })}</p>
					</td>
					<td className="p-3">
						<p>{post.location}</p>
						
					</td>
					<td className="p-3 text-right">
						<Link to={`/update/${post._id}`} className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
							<span>Update</span>
						</Link>
					</td>
					<td className="p-3 text-right">
						<span className="px-3 py-1 cursor-pointer font-semibold rounded-md dark:bg-red-600 dark:text-gray-50">
							<span onClick={()=>handleDelete(post._id)} >Delete</span>
						</span>
					</td>
				</tr>)
                }
				
			</tbody>
		</table>
	</div>
</div>
    );
};

export default ManageMyPost;
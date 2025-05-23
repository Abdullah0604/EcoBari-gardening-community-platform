import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import AuthContext from "../contexts/AuthContext";
import Swal from "sweetalert2";

function MyTips() {
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
  const [myTips, setMyTips] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(`https://ecobari-server.vercel.app/my-tips/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMyTips(data);
        console.log(data);
      });
  }, [user.email]);

  const handleDeleteTip = (id) => {
    console.log(id);
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
        fetch(`https://ecobari-server.vercel.app/delete-tip`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ id }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your tip has been deleted.",
                icon: "success",
              });
              const remainingTips = myTips.filter((tip) => tip._id !== id);
              setMyTips(remainingTips);
            }
          });
      }
    });
  };
  return (
    <div className="px-2 my-34">
      {/* header */}
      <div className="text-center ">
        <h2 className="text-2xl  md:text-2xl lg:text-4xl font-bold mb-6 ">
          Your Shared Garden Tips
          <span className=" block mt-3 mx-auto w-24 h-[2px] bg-green-600"></span>
        </h2>
        <p className="text-sm md:text-lg font-extrlight max-w-[1000px] mx-auto opacity-70">
          View, update, or delete the tips you've shared. Manage both public and
          private tips in one place!
        </p>
      </div>
      {/* table data */}
      {loading ? (
        <div className="w-5xl min-h-[300px] flex justify-center items-center">
          <h2 className="font-semibold text-xl">Loading...</h2>
        </div>
      ) : (
        <div className="my-20 bg-base-100 py-10 px-2 overflow-x-auto max-w-[1080px] mx-auto rounded-box border-2 border-base-content/5 ">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Plant Type</th>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Availability</th>

                <th>Tips Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {myTips.map((tip, i) => (
                <tr key={i}>
                  <td>
                    <img
                      className="w-12 h-12 object-cover rounded-md"
                      src={tip.image}
                      alt=""
                    />
                  </td>
                  <td>{tip.plantType}</td>
                  <td>{tip.title.slice(0, 20)}...</td>
                  <td>{tip.description.slice(0, 30)}...</td>
                  <td>{tip.category}</td>
                  <td>{tip.availability}</td>
                  <td className="flex">
                    <button
                      onClick={() => handleDeleteTip(tip._id)}
                      className="px-2 py-1 rounded-md bg-green-500 cursor-pointer text-slate-200"
                    >
                      <FaEdit size={18} />
                    </button>

                    <button
                      onClick={() => handleDeleteTip(tip._id)}
                      className="mx-2 px-2 py-1 rounded-md bg-green-500 cursor-pointer text-slate-200"
                    >
                      <FaTrash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyTips;

import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import AuthContext from "../contexts/AuthContext";
import Swal from "sweetalert2";
import ShareTipsInput from "../components/ShareTipsInput/ShareTipsInput";
function MyTips() {
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);
  const [myTips, setMyTips] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currentModalData, setCurrentModalData] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(`https://ecobari-server.vercel.app/my-tips/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setMyTips(data);
        // console.log(data);
      });
  }, [user.email]);

  const handleDeleteTip = (id) => {
    // console.log(id);
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

  const handleUpdateTip = (e, id) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const plantType = form.plantType.value;
    const description = form.description.value;
    const difficulty = form.difficultyLevel.value.toLowerCase();
    const availability = form.availability.value;
    const category = form.category.value;

    const image = form.photo.value;
    const updatedTip = {
      id,
      title,
      plantType,
      description,
      difficulty,
      availability,
      category,
      image,
    };
    // console.log(id, updatedTip);

    fetch(`https://ecobari-server.vercel.app/update-tip`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTip),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Successfully Your tip has been updated.",
            icon: "success",
          });
          fetch(`https://ecobari-server.vercel.app/my-tips/${user.email}`)
            .then((res) => res.json())
            .then((data) => {
              setLoading(false);
              setMyTips(data);
              // console.log(data);
            });
          setOpenModal(false);
          setCurrentModalData(null);
        }
        // console.log(data);
      });
  };
  const getOldTipDataForModal = (id) => {
    const oldTip = myTips.find((tip) => tip._id === id);
    setCurrentModalData(oldTip);
    // console.log(oldTip);
  };
  return (
    <div className="px-2 py-34">
      {/* modal for updating tip */}
      {openModal && (
        <div className="fixed inset-0 px-2 md:px-6  bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-black/80 rounded-lg p-6 w-full max-w-4xl shadow-lg overflow-auto max-h-[90vh]">
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setCurrentModalData(null);
                  setOpenModal(false);
                }}
                className="text-red-500 p-2 my-5 rounded-full bg-red-100 shadow-md"
              >
                <RxCross2 size={24} />
              </button>
            </div>
            <form onSubmit={(e) => handleUpdateTip(e, currentModalData._id)}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <ShareTipsInput
                  label="title"
                  inputType="text"
                  readValue={currentModalData?.title}
                />
                <ShareTipsInput
                  label="plant Type"
                  inputType="text"
                  readValue={currentModalData?.plantType}
                />
                <ShareTipsInput
                  label="difficulty Level"
                  inputType="select"
                  selectValue={["Easy", "Medium", "Hard"]}
                  readValue={currentModalData?.difficulty}
                />
                <ShareTipsInput
                  label="description"
                  inputType="text"
                  readValue={currentModalData?.description}
                />
                <ShareTipsInput
                  label="availability"
                  inputType="select"
                  selectValue={["Public", "Hidden"]}
                  readValue={currentModalData?.availability}
                />
                <ShareTipsInput
                  label="category"
                  inputType="select"
                  selectValue={[
                    "Composting",
                    "Plant Care",
                    "Vertical Gardening",
                  ]}
                  readValue={currentModalData?.category}
                />
                <ShareTipsInput
                  label="email"
                  readValue={user.email}
                  inputType="email"
                />
                <ShareTipsInput
                  label="name"
                  readValue={user.displayName}
                  inputType="email"
                />
              </div>

              <div className="mt-7">
                <ShareTipsInput
                  label="photo"
                  inputType="text"
                  readValue={currentModalData?.image}
                />
                <fieldset className="bg-base-200 border-base-300 rounded-box w-full border p-4 mt-7">
                  <input
                    type="submit"
                    className="btn bg-green-600 text-slate-200 font-semibold text-lg w-full"
                    value="Update Tips"
                  />
                </fieldset>
              </div>
            </form>
          </div>
        </div>
      )}

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
              {myTips.length
                ? myTips.map((tip, i) => (
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
                          onClick={() => {
                            getOldTipDataForModal(tip._id);
                            setOpenModal(!openModal);
                          }}
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
                  ))
                : ""}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyTips;

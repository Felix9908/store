import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { ProductContext } from "../../../Context/ProductContext";

function CommentBox({ productId }) {
  const [comment, setComment] = useState("");
  const [comentEdit, setComentEdit] = useState("");
  const [comments, setComments] = useState([]);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const clientName = sessionStorage.getItem("dataUser");
  const { logged } = useContext(ProductContext);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (dateString) => {
    const options = { hour: "numeric", minute: "numeric", second: "numeric" };
    return new Date(dateString).toLocaleTimeString(undefined, options);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      await axios
        .get(`http://localhost:9999/comments/${productId}`)
        .then((res) => {
          setComments(res.data);
        });
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim() !== "") {
      const newComment = {
        productId,
        clientName,
        text: comment.trim(),
        formattedFecha: Date(),
      };
      try {
        await axios
          .post("http://localhost:9999/comments/create", newComment)
          .then((res) => {
            if (res.status === 200) {
              fetchComments();
              setComment("");
            } else {
              console.error("Error creating comment:", res.data.error);
            }
          });
      } catch (error) {
        console.log("Error creating comment:", error);
      }
    }
  };

  const handleCommentDelete = async (commentId) => {
    try {
      const response = await axios.delete(
        `http://localhost:9999/comments/delete/${commentId}`
      );
      if (response.status === 200) {
        setComments(comments.filter((comment) => comment.id !== commentId));
      } else {
        console.error("Error deleting comment:", response.data.error);
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const handleCommentEdit = async (commentId, newText) => {
    try {
      const response = await axios.put(
        `http://localhost:9999/comments/edit/${commentId}`,
        { text: newText }
      );
      if (response.status === 200) {
        setComments((prevComments) =>
          prevComments.map((comment) => {
            if (comment.id === commentId) {
              setEditingCommentId(null);
              return { ...comment, text: newText };
            }
            return comment;
          })
        );
      } else {
        console.error("Error editing comment:", response.data.error);
      }
    } catch (error) {
      console.error("Error editing comment:", error);
    }
  };

  return (
    <div className="flex flex-col items-center rounded-xl p-5 mt-8 bg-[#161827] w-[1000px]">
      <h3 className="text-lg font-semibold mb-2 text-white">Comentarios:</h3>
      {comments.length === 0 ? (
        <>
          <p className="text-white text-3xl">No hay comentarios aun</p>
        </>
      ) : (
        <ul className="bg-[#262837] w-[900px]">
          {comments.map((comment) => (
            <li key={comment.id} className="mb-4 border-b">
              <h6 className="text-white">{comment.clientName}</h6>
              {editingCommentId === comment.id ? (
                <input
                  onChange={(e) => {
                    setComentEdit(e.target.value);
                  }}
                  placeholder="Enter your comment"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              ) : (
                <p className="text-gray-700">{comment.text}</p>
              )}
              <p className="text-sm text-gray-500">
                {formatDate(comment.fecha)} at {formatTime(comment.fecha)}
              </p>
              <div
                className={`${
                  clientName === comment.clientName ? "" : "hidden"
                }`}
              >
                {editingCommentId === comment.id ? (
                  <div>
                    <button
                      onClick={() => handleCommentEdit(comment.id, comentEdit)}
                      className="text-blue-500 ml-2"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setEditingCommentId(null);
                      }}
                      className="text-red-500 ml-2"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div>
                    <button
                      onClick={() => setEditingCommentId(comment.id)}
                      className="text-blue-500 ml-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleCommentDelete(comment.id)}
                      className="text-red-500 ml-2"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
      <form
        onSubmit={handleCommentSubmit}
        className={`mt-4 ${logged ? "" : "hidden"}`}
      >
        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Enter your comment"
          className="w-full border border-gray-300 rounded-md p-2"
        ></textarea>
        <button
          type="submit"
          className="mt-2 bg-[#ec7c6a] hover:bg-[#fc8c7a] text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CommentBox;

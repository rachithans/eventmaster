// https://stackoverflow.com/questions/41936524/validation-of-form-input-fields-in-react
// Accessed on: 10 June, 2023
// How to use html validation

// https://dev.to/esedev/how-to-pass-and-access-data-from-one-route-to-another-with-uselocation-usenavigate-usehistory-hooks-1g5m
// Accessed on: 10 Jun, 2023
// Used to learn about how to redirect from one page to another and also how to pass the data

// https://react-bootstrap.github.io/components 
// Accessed on: 24th July, 2023


import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


const Discussion = ({ userId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetchComments();
  }, []);

  //The following function helps to fetch all comments by previous users
  const fetchComments = async () => {
    try {
      const response = await axios.get("https://eventmaster.onrender.com/discussion/discussions");
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  //The following function helps to add the comment made by the user
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      try {
            const email = localStorage.getItem("email")
    
        await axios.post("https://eventmaster.onrender.com/discussion/discussions/${userId}", { content: newComment , email:email});
        setNewComment("");
        fetchComments();
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    }
  };


  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Discussion</h2>
      <form onSubmit={handleSubmit} className="row mb-4">
        <div className="col-8">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comment..."
            className="form-control"
          />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary">Post</button>
        </div>
      </form>
      <div>
        <h3>Comments:</h3>
        {comments.length === 0 ? (
          <p>No comments yet.</p>
        ) : (
          <ul className="list-group">
            {comments.map((comment, index) => (
              <li key={index} className="list-group-item">
                <p>Comment By:{comment.email}<br></br></p>{comment.content} <p> Date : {new Date(comment.createdAt).toLocaleDateString()}</p></li>
              
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Discussion;



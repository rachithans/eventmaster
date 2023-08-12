//Author : Ayush Awasthi
//Date created : 25th July, 2023

// https://chat.openai.com
//Accessed on 26th July,2023  
// Used to solve some errors I was facing in the POST request

// https://react-bootstrap.github.io/components 
// Accessed on: 26th July, 2023


import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";


const Discussion = ({ userId }) => {
  //array to store the comments fetched from the server
  const [comments, setComments] = useState([]);
  // string to store the text of the comment typed by the user
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    fetchComments();
  }, []);

  //The following function makes a GET request to the server to obtain comments
  const fetchComments = async () => {
    try {
      const response = await axios.get("https://eventmasterapi.onrender.com/discussion/discussions");
      setComments(response.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  //The following function makes a POST request to the server
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      try {
            const email = localStorage.getItem("email")
    
        await axios.post("https://eventmasterapi.onrender.com/discussion/discussions/${userId}", { content: newComment , email:email});
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



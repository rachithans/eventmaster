// Author: Bhavya Jain
import React, { useState, useEffect } from 'react';
import { Card } from "react-bootstrap";

function ProfilePage({ loggedIn, isAdmin, userId}) {
  const id = userId;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user details from the API endpoint
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://eventmaster.onrender.com/loginInfo/users/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserData();
  }, [id]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Card className="container my-5 col-md-6  col-lg-6 p-4 rounded border mt-5" text="light" bg="dark">
    
      <h1 className="text-center">Profile</h1>
      <div>
        <p><strong>Profile Type:</strong> 
        {(isAdmin === 0 && loggedIn)  ? (<> Attendee </>): (isAdmin === 1 && loggedIn)  ? (<> Admin </>): (<></>)}</p>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Username:</strong> {userData.username}</p>
      </div>
    </Card>
    </>
    
  );
}

export default ProfilePage;

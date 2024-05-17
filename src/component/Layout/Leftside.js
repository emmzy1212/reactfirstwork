import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { fetchComments, fetchPosts } from '../api/api';

const Leftside = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchComments()
      .then((data) => {
        console.log(data);
        setUsers(data);
        
      })
      .catch((error) => console.error("Error fetching comments:", error));

    fetchPosts()
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <>
      {/* Render users */}
      {users.map((user) => (
      <ListGroup key={user.id} variant="flush">
      <ListGroup.Item>{user.login}</ListGroup.Item>
      {/* <ListGroup.Item>{user.gravatar_id}</ListGroup.Item> */}
      <ListGroup.Item>{user.repos_url}</ListGroup.Item>
    </ListGroup>
      ))}
    </>
  );
};

export default Leftside;



// import ListGroup from 'react-bootstrap/ListGroup';

// function FlushExample() {
//   return (
//     <ListGroup key={user.id} variant="flush">
//       <ListGroup.Item>{user.login}</ListGroup.Item>
//       <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//       <ListGroup.Item>Morbi leo risus</ListGroup.Item>
//       <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
//     </ListGroup>
//   );
// }

// export default FlushExample;


// import {fetchComments} from '../api/api'

// const SideBar = () => {
//   const [user, setfetchComments] = useState ([]);

//   // How fetch api from  backend 
//   useEffect(() => {
//     fetchComments() // Corrected the API URL
//       .then((response) => response.json())
//       .then((data) => setfetchComments(data))
//       .catch((error) => console.error("Error fetching comments:", error));
//   }, []);

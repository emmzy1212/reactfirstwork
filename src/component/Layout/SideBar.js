import React, { useState, useEffect } from "react";
import Image from "react-bootstrap/Image";
import Emmzo from '../../assets/jpgtopngconverter-com (77).jpg'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
// after i created the api file i imported the fetchUsers here from the api.js statement in where i need it which is the fetch user import here
import { fetchUsers } from "../api/api";
// import Userfollow from "../Pages/Userfollow";

// then i gave the fetching of the api a value here
const SideBar = () => {
   const [user, setUsers] = useState ([]);

//  then i pass fetch user to useeffect here  to pass the function
    useEffect(() => {
      fetchUsers()
        .then((data) => {
          console.log(data);
          setUsers(data);
        })
        .catch((error) => console.error("Error fetching posts:", error));
    }, []);
 

  return (
    <div style={{ backgroundColor: "grey", color: "white", minHeight: "100vh", padding: "20px" }}>
      {/* Link to Userprofile */}
      <Link to='/Userprofile' style={{ textDecoration: "none", color: "white", marginBottom: "20px", display: "block" }}>
        {/* Image and username */}
        <Image src={Emmzo} roundedCircle style={{ width: "60px", height: "60px", marginRight: "10px"}} />
        <span style={{ fontSize: "1.2rem" }}>Lionel Messi</span>
      </Link>

      {/* how to link this image src emmzo from api to navigate to another page after its clicked switching and making sure its takes same info of users as its in emmzo to the next page its swtich to */}
      {/* then i pass the main declaration of the variable i want from the api link https://api.github.com/users and the user here 
      {user.map((user) => to the {user.avatar_url} which avatar_url where was the name of what am fetching from the api and user at the user.avatar_url was a value i gave it myself i can give it anything its same user as noted in 
      const SideBar = () => {
   const [user, setUsers] = useState ([]); */}
   {/* which i can name the user anything as its corresponds with the rest as stated  */}

   {/* then i will pass it inside where i need the navigating of the page to work */}
   {user.map((user) => (

    <>
    <Link to={`/Userprofile/${user.id}`}  style={{ textDecoration: "none", color: "white" }}>
        <div key={user.id} style={{ marginBottom: "10px" }}>
          <Image src={user.avatar_url} roundedCircle style={{ width: "60px", height: "60px", marginRight: "10px"}} />
          <span>{user.login}</span>
        </div>
        </Link>
        </>
      ))}
    </div>
  );
};


export default SideBar; 


// how to pass the same info that will display in {user.map((user) => (
//   <Link to={`/Userfollow/${user.id}`} key={user.id} style={{ textDecoration: "none", color: "white" }}>
//       <div key={user.id} style={{ marginBottom: "10px" }}>
//         <Image src={user.avatar_url} roundedCircle style={{ width: "60px", height: "60px", marginRight: "10px"}} />
//         <span>{user.login}</span> should be display in another nav page .js showing same thing as in the sidebar with the other js after its clicked and applying it to all user in sidebar
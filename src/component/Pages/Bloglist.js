// to pass an api we must make sure we call this usestate useEffect
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// i will define the user state here to call the api 
const Bloglist = () => {
  const [blogs, setBlogs] = useState([]);

  // How fetch api from  backend 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts") // Corrected the API URL
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  // how to pass the return for the api
  return (
    <>
      {blogs.map((blog) => (
        <Card key={blog.id} className="text-center m-5">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>{blog.body}</Card.Text>
            <Button variant="primary">{blog.id} read more</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      ))}
    </>
  );
};


// if we are using class component

// import React, { Component } from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

// class Bloglist extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       blogs: []
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((data) => this.setState({ blogs: data }))
//       .catch((error) => console.error("Error fetching posts:", error));
//   }

//   render() {
//     const { blogs } = this.state;
//     return (
//       <>
//         {blogs.map((blog) => (
//           <Card key={blog.id} className="text-center m-5">
//             <Card.Header>Featured</Card.Header>
//             <Card.Body>
//               <Card.Title>{blog.title}</Card.Title>
//               <Card.Text>{blog.body}</Card.Text>
//               <Button variant="primary">{blog.id} read more</Button>
//             </Card.Body>
//             <Card.Footer className="text-muted">2 days ago</Card.Footer>
//           </Card>
//         ))}
//       </>
//     );
//   }
// }

// export default Bloglist;


export default Bloglist;

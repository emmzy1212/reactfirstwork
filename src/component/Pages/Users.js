import React, { useState, useEffect } from "react";
import { fetchUsers } from "../api/api";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
const Users = () => {
  const [users, setUsers] = useState(["fdffdf"]);

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        console.log(data);
        setUsers(data);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);
  return (
    <Container>
      {users.map((user) => (
        <Card style={{ width: "12rem" }}>
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Title>{user.login}</Card.Title>

            <Button variant="primary">{user.followers_url}</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Users;

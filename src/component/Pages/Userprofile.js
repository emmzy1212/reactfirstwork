import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Placeholder from 'react-bootstrap/Placeholder';
import SideBar from '../Layout/SideBar';
import LeftsideBar from '../Layout/Leftside';
import PopupButton from './PopupButton';
import { fetchUser } from '../api/api';
import avatar from '../../assets/avata.jpg';

function Userprofile() {
  const { id } = useParams();
  const [user, setUser] = useState(null); // Corrected the initialization

  useEffect (()=> {
    const fetchUserProfile = async () => {
      try {
        const data = await fetchUser(id);
        setUser(data);
        console.log(data + "gooooooooo");
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  },[id]);

  return (
    <Container>
      <Row>
        <Col>
          <SideBar/>
        </Col>
        <Col ms={6}>
          {user ? ( 
            <Card style={{ width: "30rem", textAlign: "center" }}>
              <Card.Img variant="top" src={user.avatar_url} />{" "}
              <Card.Body>
                <Card.Title>{user.login}</Card.Title>
                <Card.Text>
                  {user.bio}
                </Card.Text>
                <Button variant="primary" className="m-5">{" "}
                  Followers300M
                </Button>
                <Button variant="primary" className="m-2">
                  {" "}
                  Following300M
                </Button>
                <Button variant="primary" className="m-2">
                  {" "}
                  <PopupButton />
                </Button>
              </Card.Body>
            </Card>
          ) : (
            // Placeholder when user data is being fetched or not available
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={avatar} />
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                  <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
              </Card.Body>
            </Card>
          )}
        </Col>
        <Col>
          <LeftsideBar/>
        </Col>
      </Row>
    </Container>
  );
}

export default Userprofile;

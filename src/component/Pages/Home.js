import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Leftside from '../Layout/Leftside';
import Bloglist from '../../component/Pages/Bloglist'
import SideBar from '../Layout/SideBar';

// we have to import all ths written below from boostrap


function Home() {
  return (
    // this is a way to move pages into other pages and this container here gives space and if we remove the container their will be no space 
    <Container>
      <Row>
        <Col><SideBar /></Col>
        <Col xs={6}><Bloglist /> </Col>
        <Col> <Leftside /></Col>
      </Row>
    </Container>
  );
}

export default Home;
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import MyProfile from './components/MyProfile'
import BannerCarousel from './components/Carousel'
import flowers, { imageFiles } from './data/flower'


function App() {
  return (
      <div className="app-shell">
        <Navbar expand="lg" className="top-nav">
          <Container>
            <Navbar.Brand href="#home">Single Page Application</Navbar.Brand>
            <Navbar.Toggle aria-controls="main-nav" />
            <Navbar.Collapse id="main-nav" className="justify-content-start">
              <Nav className="ms-3">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#orchids">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="py-3">
          <BannerCarousel imageFiles={imageFiles} />
        </Container>

        <Container id="orchids" className="pb-4">
          <Row className="g-4">
            {flowers.map((flower) => (
              <Col key={flower.id} xs={12} sm={6} md={3}>
                <MyProfile flower={flower} />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
}

export default App

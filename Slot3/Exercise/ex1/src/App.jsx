import './App.css'
import MyProfile from './components/MyProfile'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import students from './data/students.js'
function App() {

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">List of Profiles</h2>
      <Row xs={1} sm={2} md={3} className="g-4">
        {students.map((student, index) => (
          <Col key={index}>
            <MyProfile person={student} />
          </Col>
        ))}
      </Row>
    </Container>
  )

}

export default App
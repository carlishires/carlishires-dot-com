import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from "react-bootstrap/Nav"
import Navbar from 'react-bootstrap/Navbar'

function App() {
   return (
      <>
         <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
            <Container>
               <Navbar.Brand>Carli Shires</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                     <Nav.Link href="#home">Home</Nav.Link>
                  </Nav>

               </Navbar.Collapse>
            </Container>
         </Navbar>
      </>
   );
}

export default App;

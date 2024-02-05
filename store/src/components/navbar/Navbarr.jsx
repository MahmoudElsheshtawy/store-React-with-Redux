
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbarr = () => {
 
 
  const cart = useSelector((state)=>state.cart)
  // console.log(select);
  return (
    <>
<Navbar fixed="top"   expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/cart">Cart{cart.length}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>





    </>
  )
}

export default Navbarr
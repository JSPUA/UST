import React,{useState, useRef} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import {Navbar, Container,Nav, NavDropdown,Button,Image,Carousel,Dropdown} from 'react-bootstrap'
import { FaGlobe,FaSignInAlt,FaUser } from 'react-icons/fa';
import LoginPage from '../pages/LoginPage'
import Upload from '../pages/upload';
const Home = () => {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const ResourcesdropdownRef = useRef(null);

  const handleResourcesMouseEnter = () => {
    setIsResourcesDropdownOpen(true);
  };

  const handleResourcesMouseLeave = () => {
    setIsResourcesDropdownOpen(false);
  };
  return (
    <div>
      <div>
        
      </div>
          <div>
      <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      
      <Navbar.Brand href="#home">
      <Image src="./MML.png" alt="Logo" fluid style={{ width: '100px', height: 'auto' }} /> 
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <Nav onMouseEnter={handleResourcesMouseEnter} onMouseLeave={handleResourcesMouseLeave}>
            <NavDropdown
        show={isResourcesDropdownOpen}
        title="RESOURCES"
        id="basic-nav-dropdown"
        ref={ResourcesdropdownRef}
      >
        <NavDropdown.Item href="#action/public">For Public</NavDropdown.Item>
        <NavDropdown.Item href="#action/hp">
          For Healthcare Professional
        </NavDropdown.Item>
      </NavDropdown>
      </Nav>
            {/* <Link to="/research"><Nav.Link to="/research">RESEARCH</Nav.Link></Link> */}
            <Nav.Link as={Link} to="/research" className="no-underline-link">RESEARCH</Nav.Link>            
          </Nav>
          
          
          
          <Nav onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <NavDropdown
        show={isDropdownOpen}
        title={(
        "LANGUAGE"
        )}
        id="basic-nav-dropdown"
        ref={dropdownRef}
      >
        <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">BM</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">华文</NavDropdown.Item>
      </NavDropdown>
    </Nav>
          
          <Nav>
  <Link to="/login">
    <Button
      variant="primary"
      style={{
        backgroundColor: isButtonHovered ? 'darkblue' : 'blue',
        color: 'white',
        width: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      onMouseEnter={() => setIsButtonHovered(true)}
      onMouseLeave={() => setIsButtonHovered(false)}
    >
      <span>Login</span>
      <FaSignInAlt />
    </Button>
  </Link>
</Nav>
        </Navbar.Collapse>
      
     
    </Navbar>
    </div>
    
    


    <Carousel data-bs-theme="dark" interval={5000}>
  <Carousel.Item className="custom-carousel-item">
    
      <img
        className="d-block w-100"
        src="malaysia2.jpg"
        alt="First slide"
        width="600" // Set your desired width
        height="600" // Set your desired height
      />
    
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="custom-carousel-item">
    
      <img
        className="d-block w-100"
        src="malaysia1.png"
        alt="Second slide"
        width="600" // Set your desired width
        height="600" // Set your desired height
      />
   
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="custom-carousel-item">
    
      <img
        className="d-block w-100"
        src="malaysia3.jpg"
        alt="Third slide"
        width="600" // Set your desired width
        height="600" // Set your desired height
      />
    
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  
    
    <div>AAA</div>
  </div>
      <div>
      {/* <Link  to={`/booklist`}>
      <Button
            variant="primary"
            style={{
              backgroundColor: isButtonHovered ? 'darkblue' : 'blue',
              color: 'white', // Text color
            }}
            onMouseEnter={() => setIsButtonHovered(true)}
            onMouseLeave={() => setIsButtonHovered(false)}
          >
            Show Book
          </Button>
</Link>  */}
<Link  to={`/upload`}><Button variant="outline-primary">Make application</Button></Link>
{/* <Link  to={`/applyList`}><Button variant="outline-primary">Apply list</Button></Link>
<Link  to={`/applyListFilter`}><Button variant="primary">Apply list filter</Button></Link> */}
<Link  to={`/sampleTable`}><Button variant="primary">Applying List</Button></Link>
<Link  to={`/uploadPDF`}><Button variant="primary">Research Upload</Button></Link>
<Link  to={`/researchList`}><Button variant="primary">Research List</Button></Link>
<Link  to={`/addPatient`}><Button variant="primary">Add Patient</Button></Link>

<Link  to={`/showPatient`}><Button variant="primary">Patient List</Button></Link>


      </div>
    </div>
  )
}
//p=2 bg-sky-300 m-8 
export default Home
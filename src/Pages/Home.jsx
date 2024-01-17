import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'
import Mangacard from '../Components/Mangacard';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div>
        <Row className="homepage">
        <Col md={6} className="left-section p-5">
          <h1>ManageMe</h1>
          <p>This is the left section with a paragraph.</p>
        </Col>
        <Col md={6} className="right-section p-5">
          <Image src="https://i.pinimg.com/736x/5c/c7/20/5cc7204ffda47d3cb65fcc3f36f5a0c6.jpg"
          width={"300px"} height={"80px"}
          className='mb-3'
           alt="Your Image" fluid />
          <br />
          <Button variant="primary">Click Me</Button>
        </Col>
      </Row>
      </div>
      {/* all manga */}
      <div className='all-manga mt-5'>
        <h1 className='text-center mb-5'>Explore</h1>
        <marquee scrollAmount={10}>
          <Row>
            <Col sm={12} md={6} lg={4}><Mangacard/></Col>
          </Row>
        </marquee>
        <div className='text-center'> <Link to={'/Manga'}>View More Manga</Link>
        </div>
      </div>
    </>

    )
}

export default Home
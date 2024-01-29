import React from 'react';
import { Row, Col, Image, Button,Carousel } from 'react-bootstrap';
import './Home.css'
import Mangacard from '../Components/Mangacard';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div>
        <Row className="homepage align-items-center">
        <Col md={6} className="left-section p-5">
          <h1>ManageMe</h1>
          <p className='m-5'>Welcome to [Website Name], the ultimate manga management solution tailored just for you! Easily organize and keep track of the manga you read. Our user-friendly platform simplifies your manga experience, letting you focus on the stories you love. Sign up now to take control of your manga collection!</p>
          <Link to={'/login'} className='btn btn-dark' variant="primary">Start to Explore</Link>

        </Col>
        <Col md={6} className="right-section p-5">
<Carousel interval={1000} fade>
      <Carousel.Item>
        <Image text="First slide" />
        <Image src="https://i.pinimg.com/736x/5c/c7/20/5cc7204ffda47d3cb65fcc3f36f5a0c6.jpg"
          width={"300px"} height={"80px"}
          className='mb-3'
           alt="Your Image" fluid />
      </Carousel.Item>
      
      <Carousel.Item>
        <Image text="Second slide" />
        <Image src="https://i.pinimg.com/564x/7e/f5/62/7ef562466fc94db6dfbc8fd47e9edd46.jpg"
          width={"300px"} height={"80px"}
          className='mb-3'
           alt="Your Image" fluid />
      </Carousel.Item>

      <Carousel.Item>
        <Image text="Third slide" />
        <Image src="https://i.pinimg.com/564x/c5/23/ad/c523add185788135125d288edd04d418.jpg"
          width={"300px"} height={"80px"}
          className='mb-3'
           alt="Your Image" fluid />
      </Carousel.Item>

      {/* <Carousel.Item>
        <Image text="Third slide" />
        <Image src="https://i.pinimg.com/564x/fc/d5/91/fcd5911cde68ddeb084b11e2ca8aa675.jpg"
          width={"300px"} height={"80px"}
          className='mb-3'
           alt="Your Image" fluid />
      </Carousel.Item> */}

      <Carousel.Item>
        <Image text="Third slide" />
        <Image src="https://i.pinimg.com/564x/90/f9/78/90f978d9f9ae1a4e41762aa683d22b1d.jpg"
          width={"300px"} height={"80px"}
          className='mb-3'
           alt="Your Image" fluid />
      </Carousel.Item>

    </Carousel>    
          <br />
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
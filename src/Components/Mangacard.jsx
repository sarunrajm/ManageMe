import React,{useState} from 'react';
import { Card,Modal,Row,Col } from 'react-bootstrap';
import MangaImage from '../Assets/Ryomen Sukuna.jpeg'


function Mangacard() {
    const [show,setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Card className='shadow mb-2 btn' style={{width:'280px',height:'420px'}} onClick={handleShow}>
      <Card.Img variant="top" src="https://i.pinimg.com/564x/2a/68/c9/2a68c9335e8a28c181f409b0c76cd19f.jpg" style={{width:'230px'}}
     />
      <Card.Body>
        <Card.Title>Manga Title</Card.Title>
        {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
      </Card.Body>
    </Card>

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Manga Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={4}>
                <img style={{height:'220px',width:'170px'}} className='img-fluid' src={MangaImage} alt="Manga Image" />
                </Col>
                <Col md={6}>
                    <h2>Manga title</h2>
                    <p>Manga Overview : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem m laudantium, consequatur blanditiis.</p>
                    <p>Language: <span className='fw-bold'>English,Japanese</span></p>
                    
                </Col>
            </Row>
            <div className='mt-3'>
                        <a href="https://github.com/sarunrajm/ManageMe" target='_blank' className='btn'>
                        <i class="fa-brands fa-github fa-2x"></i>
                        </a>
                        <a href="https://mangareader.to/jujutsu-kaisen-168" target='_blank' className='btn'>
                        <i class="fa-solid fa-link fa-2x"></i>
                        </a>
                    </div>
        </Modal.Body>
      </Modal>

    </div>
  )
}

export default Mangacard
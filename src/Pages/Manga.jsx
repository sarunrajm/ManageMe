import React from 'react';
import Header from '../Components/Header';
import { Row,Col } from 'react-bootstrap';
import Mangacard from '../Components/Mangacard';


function Manga() {
  return (
    <>
      <Header/>
      <div style={{marginTop:'130px'}} className='manga'>
        <h1 className="text-center mb-5">All Manga</h1>
        <div className="d-flex justify-content-center align-items center w-100">
          <div className="d-flex border w-50 rounded">
            <input type="text" className='form-control' placeholder='Search Manga by Name'/>
            <i style={{marginLeft:"-50px"}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
          </div>
        </div>
        <Row className='mt-5 ms-5 container-fluid'>
          <Col sm={12} md={6} lg={4}>
            <Mangacard/>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Manga
import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";


function Auth({register}) {
  const isRegisterForm = register?true:false
  return (
    <div
      style={{ width: "100%", height: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="w-75 container">
        <Link to={"/"} style={{ textDecoration: "none", color: "blue" }}>
          <i class="fa-solid fa-arrow-left"></i> Back to Home
        </Link>
        <div
          className="card shadow p-5 bg-success"
          style={{ borderRadius: "15px" }}
        >
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                src="http://www.tropiqana.com/fundsmanager/app-assets/img/gallery/login.png"
                className="rounded-start w-100"
                alt="auth pic"
              />
            </div>
            <div className="col-lg-6">
              <div className="d-flex align-items-center flex-column">
              
                <h1><i class="fa-brands fa-meetup me-2"/>ManageMe!</h1>
                <h5 className="fw-bolder mt-4 pb-3 text-light">
                  {isRegisterForm ? "Sign up to your Account" : "Sign in to your Account"}
                </h5>
                <Form className="text-light w-100">
                {
                isRegisterForm && 
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Username" />
                  </Form.Group>
                }
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter Email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="password" placeholder="Enter Password" />
                  </Form.Group>
                  {
                    isRegisterForm ? 
                    <div>
                        <button className="btn btn-light mb-2">Register</button>
                        <p>Already have account? Click here to <Link to={'/login'}>Login</Link> </p>
                    </div>:
                    <div>
                    <button className="btn btn-light mb-2">Login</button>
                    <p>New User? Click here to <Link to={'/register'}>Register</Link> </p>
                    </div>
                  }
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;

import React from 'react';
import './Footer.css';

function Footer() {
  return (
   
<>
<div className="mt-5 pt-5 pb-5 footer w-100">
<div className="container">
  <div className="row">
    <div className="col-lg-5 col-xs-12 about-company">
      <h2>ManageMe</h2>
      <p className="pr-5 text-white-50">
In conclusion, [Website Name] is your dedicated companion for seamless manga management. We've crafted a user-friendly space where you can effortlessly organize and keep track of the manga you love. Elevate your reading experience, stay updated on the latest releases, and connect with fellow manga enthusiasts. Join us in this exciting journey, and let [Website Name] be your go-to platform for a curated and personalized manga adventure.</p>
      <p><a href="#"><i className="fa fa-facebook-square mr-1"></i></a><a href="#"><i className="fa fa-linkedin-square"></i></a></p>
    </div>
    <div className="col-lg-3 col-xs-12 links">
      <h4 className="mt-lg-0 mt-sm-3">Links</h4>
        <ul className="m-0 p-0">
          <li>- <a href="#">Home</a></li>
          <li>- <a href="#">About</a></li>
          <li>- <a href="#">Contact us</a></li>
          <li>- <a href="#">Fusce scelerisque</a></li>
          <li>- <a href="#">Sed faucibus</a></li>
          <li>- <a href="#">Mauris efficitur nulla</a></li>
        </ul>
    </div>
    <div className="col-lg-4 col-xs-12 location">
      <h4 className="mt-lg-0 mt-sm-4">Location</h4>
      <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
      <p className="mb-0"><i className="fa fa-phone mr-3"></i>(541) 754-3010</p>
      <p><i className="fa fa-envelope-o mr-3"></i>info@hsdf.com</p>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col copyright">
      <p className=""><small className="text-white-50">© 2019. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>
</>

  )
}

export default Footer
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-32">
      <div className="container mx-auto py-10 px-4">
        <div className="flex justify-between">
          <div className="footer-div-1">
            <h3 className="text-3xl">Download Our App</h3>
            <h1 className="text-5xl font-bold">M<span className="text-yellow-500">oo</span>vie</h1>
          </div>

          <div className="footer-div-3">
            <h3 className="text-3xl">Navigation</h3>
            <p>Home</p>
            <p>My List</p>
            <p>About Us</p>
          </div>

          <div className="footer-div-3">
            <h3 className="text-3xl">Legal</h3>
            <p>General Terms</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>

          <div className="footer-div-3">
            <h3 className="text-3xl">Contact Us:</h3>
            <p>Email: support@moovie.com</p>
            <p>Phone: +1 123-456-7890</p>
            <p>Follow Us:</p>
            <div className="flex">
              <a href="#" className="mr-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="mr-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="mr-2">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          <div className="footer-div-3">
            <h3 className="text-3xl">Share Website Via:</h3>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
        <hr className="my-6" />
        <p className="text-center text-gray-500 text-sm">
          &copy; 2023 Moovie. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

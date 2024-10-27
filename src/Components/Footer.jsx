import React from "react";
// import image1 from "../assets/images/jksd-white-logo.png";
// import msme from "../assets/images/msme3.png";
// import iso from "../assets/images/iso4.png";
// import copy from "../assets/images/copyright.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (

    <footer className="bg-[#12555B] text-white pt-4">

      <div className="flex flex-col md:flex-row justify-around w-full px-4 md:px-0">
        {/* Logo and Contact Information */}
        <div className="logo w-full h-[180px] md:w-[30%] mb-0">
          {/* <img className="h-24 w-auto mx-auto md:mx-0" src='./Images/fournetwork.png' alt="" /> */}
          <div className="pt-2 pb-4 text-center md:text-left">
            {/* Telephone Icon */}
            <h1 className="flex items-center justify-center md:justify-start">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-white h-6 mr-2 hover:text-[#ffa75c]"
              />
              <a href="tel:+919106406707">
                +91 9106406707
              </a>
            </h1>

            {/* Email Icon */}
            <h1 className="flex items-center justify-center md:justify-start gap-2 pt-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white h-6 mr-1 hover:text-[#ffa75c]"
              />
              <a
                href="mailto:info@jksd.in?subject=Subject%20Here&body=Body%20Here"
              >
               info@fourcornernetwork.co.in
              </a>
            </h1>

            {/* Address Icon */}
            <h1 className="flex items-center justify-center md:justify-start gap-1 pt-2">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-white h-7 mr-2 hover:text-[#ffa75c]"
              />
              <a
                href="https://www.google.com/maps/place/JKSD+Infotech+Pvt.+Ltd./@28.626222,77.3767477,17z"
              >
                Office No. 103, First Floor H-61, Sector 63, Noida, UP, 201301
              </a>
            </h1>
          </div>

          <div className="flex justify-center md:justify-start">
            <img className="h-[120px]" src='' alt="" />
            <img className="h-[120px]" src='' alt="" />
          </div>
        </div>

        {/* Company Information */}
        <div className="w-full md:w-[30%] mb-8 md:mb-0">
          <h1 className="text-center font-medium">Direct Links</h1>
          <div className="bg-[#ffa75c] mt-2 mb-2 h-[3px] w-full"></div>
          <div className="flex flex-wrap justify-around md:justify-between">
            <div>
              <li>
                <Link to="aboutus">About Us</Link>
              </li>
              <li>
                <Link to="contactus">Contact Us</Link>
              </li>
              <li>
                <Link to="faq">FAQ</Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="workshops">Workshops</Link>
              </li>
              <li>
                <Link to="therapysessions">Therapysessions</Link>
              </li>
              <li>
                <Link to="blogs">Blogs</Link>
              </li>
            </div>
          </div>

          {/* join us section  */}
          {/* <div className="text-center mt-6">
            <h1 className="font-medium">Join Us</h1>
            <div className="bg-[#ffa75c] mt-2 mb-2 h-[3px] w-full"></div>
            <div className="flex gap-5 justify-center pt-2">
              <a
                href="https://www.youtube.com/@fourcornernetwork"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-white text-2xl hover:text-[#FF0000]"
                />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white text-2xl hover:text-[#0A66C2]"
                />
              </a>
              <a
                href="https://www.instagram.com/fourcornernetwork/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white text-2xl hover:text-[#E4405F]"
                />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white text-2xl hover:text-[#1877F2]"
                />
              </a>
            </div>
          </div> */}
        </div>

        {/* Product Information */}
        <div className="w-full  mb-4 md:w-[20%]">
        <h1 className="font-medium text-center">Join Us</h1>
            <div className="bg-[#ffa75c] mt-2 mb-2 h-[3px] w-full"></div>
            <div className="flex gap-5 justify-center pt-2">
              <a
                href="https://www.youtube.com/@fourcornernetwork"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-white text-2xl hover:text-[#FF0000]"
                />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white text-2xl hover:text-[#0A66C2]"
                />
              </a>
              <a
                href="https://www.instagram.com/fourcornernetwork/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white text-2xl hover:text-[#E4405F]"
                />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-white text-2xl hover:text-[#1877F2]"
                />
              </a>
            </div>
        </div>
      </div>

      <div className="bg-[#ffa75c] h-[3px] w-full"></div>
      <div className="flex flex-col md:flex-row justify-between items-center pl-4 md:pl-12 mt-3 pb-3">
        <div className="flex items-center gap-2">
          <img className="h-6" src='' alt="" />
          <h1>Copyright © 2024 Four Corner Network</h1>
        </div>
        <div className="flex gap-5 md:gap-10 pr-4 md:pr-12 mt-2 md:mt-0">
          <Link to="/termandcondition">
            <h1>Terms & Conditions</h1>
          </Link>
          <Link to="/privacypolicy">
            <h1>Privacy Policy</h1>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
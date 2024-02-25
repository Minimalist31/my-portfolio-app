import React from "react";
import "./Contact.css";
import { FaPhone, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  const phoneNumber = "+917762955263";
  const emailAddress = "saumyasarangi3116@gmail.com";
  const locationQuery =
    "#33/2C & 2D, Kempapura Main Rd, Hebbal Kempapura, Bengaluru, Karnataka 560024";
  const linkedinProfile = "saumya-sarangi-47a283260";
  const mapUrl = `https://www.google.com/maps?q=${locationQuery}`;
  const linkedinUrl = `https://www.linkedin.com/in/${linkedinProfile}`;
  const instagramUsername = "_the_minimalist_";
  const instagramUrl = `https://www.instagram.com/${instagramUsername}/`;
  return (
    <div className="contact-box">
      <h1 className="contact-title">CONTACT ME</h1>

      <p className="details">
        {<FaPhone />}
        {"    "}
        <a className="navigate" href={`tel:${phoneNumber}`}>
          {phoneNumber}
        </a>
      </p>
      <br />
      <p className="details">
        <MdOutlineMail />
        {"    "}
        <a className="navigate" href={`mailto:${emailAddress}`}>
          {emailAddress}
        </a>
        <br />
      </p>
      <p className="details">
        {<FaLocationDot />}
        {"    "}
        <a
          className="navigate"
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Bangalore
        </a>
        <br />
      </p>
      <p className="details">
        <FaLinkedin />
        {"    "}
        <a
          className="navigate"
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect with me on Linkedin
        </a>
      </p>
      <p className="details">
        <FaInstagram />
        {"    "}
        <a
          className="navigate"
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram Profile
        </a>
      </p>
    </div>
  );
};

export default Contact;

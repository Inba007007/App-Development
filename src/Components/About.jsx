// src/Components/About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <div className="about-content">
        <div className="about-section">
          <div className="about-text">
            <h4>
              Welcome to Kids TOS, your go-to store for a wide range of toys for children of all ages.
              Our mission is to bring joy and excitement to kids through an extensive selection of
              high-quality, safe, and educational toys.
            </h4>
          </div>
          <div className="about-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTajBPzgFQQSNRiKXyksSCs8xxJdR16_pTtVg&s" alt="Toy Store" />
          </div>
        </div>
        <div className="about-section">
          <div className="about-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSyd7OGyCOlZUFlTWyndYdikdvCWd3AODTgw&s" alt="Educational Toys" />
          </div>
          <div className="about-text">
            <h4>
              We offer a variety of toys that not only entertain but also educate and inspire creativity
              in young minds. From puzzles and building sets to action figures and dolls, our collection
              is designed to cater to the diverse interests of children.
            </h4>
          </div>
        </div>
        <div className="about-section">
          <div className="about-text">
            <h4>
              At Kids TOS, safety is our top priority. We ensure that all our toys meet the highest safety
              standards, giving parents peace of mind. Our commitment to quality means that you can trust
              our toys to be durable and long-lasting.
            </h4>
          </div>
          <div className="about-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSKujhmTPpRpSTJ8SoN0YxqnrgG8Nj8JA3wA&s" alt="Safe Toys" />
          </div>
        </div>
        <div className="about-section">
          <div className="about-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRntTBPkUmQkW9TmZG-uc4vAT8v2MFjBSxxNA&s" alt="Happy Kids" />
          </div>
          <div className="about-text">
            <h4>
              Our store is not just about selling toys; it's about creating memorable experiences for children
              and their families. We believe that play is an essential part of childhood and our goal is to make
              every child's playtime fun and enriching.
            </h4>
          </div>
        </div>
      </div>
      <div className="about-footer">
        <h5>
          Kids TOS Home | Contact | Security | IPR Complaints | Anti-spam Policy | Terms of Service | Privacy Policy |
          Cookie Policy | GDPR Compliance | Abuse Policy
          <br />
          © 2023, Kids TOS Corporation Pvt. Ltd. All Rights Reserved.
        </h5>
      </div>
    </div>
  );
}

export default About;

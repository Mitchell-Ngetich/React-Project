import React from "react";
import Image from "./Home.jpg";
import Same from "./Same";
import './About.css'

const About = () => {
  return (
    <>
      <Same
        title="About Us"
        text="Tech Solution an innovative IT company that provides a wide range of technology solutions to businesses of all sizes. We have been in business for over a decade and have established ourselves as a leader in the industry. We are dedicated to staying at the forefront of technological innovation and are constantly exploring new ways to help our clients achieve their goals"
        imgsrc={Image}
        btn="Know More"
      />
    </>
  );
};

export default About;

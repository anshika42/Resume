import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import image from "../images/my pic.jpeg";
import { Button } from "react-bootstrap";
export const About = () => {
  const { scrollProgress } = useScroll();
  return (
    <>
      <div className="about">
        <div className="row justify-content-start">
          <motion.div
            className="col-4"
            initial={{ x: -300, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={image}
              alt="my_pic"
              className="img-thumbnail"
              style={{ margin: "10px", width: "80%", height: "300px" }}
            ></img>
          </motion.div>
          <motion.div
            className="col-8"
            initial={{ x: 300, scale: 0.5 }}
            animate={{ x: 0, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <p>
              Hello , I'm <font>Anshika Garg</font>
            </p>
            <p>
              I'm a pre-final year student pursuing B.Tech in Computer Science
              and Engineering, from ABESEC Ghaziabad. I am a self-taught
              full-stack developer. I'm proficient in HTML, CSS, JavaScript and
              React and basic in nodejs. I'm quite an enthusiastic person and I
              like to explore new technologies and domains. I have hands-on
              experience with Git, GitHub, Java and DataStucture as well.
            </p>
            <br></br>
            <p>
              I am currently working on enhancing my skill set and exploring new
              technologies and domains. I have good communication skills. I am a
              sportsperson, I have represented my college in the University Fest
              of Sports in 100m relay race and Kho-Kho . I do coding,
              development and improve communication in my free time
            </p>
            <Button type="submit">
              <a href="https://drive.google.com/file/d/12e4G4wjZ8ce3PQKhWKFyzRv6WmoEw9aY/view?usp=drive_link">
                Download CV{" "}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

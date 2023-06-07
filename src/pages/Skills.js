import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.2 }}
      >
        <h2 className="internship"> Internship </h2>
        <p className="intrn">
          <span className="intern">Organisation : </span> Octanet
        </p>
        <p className="intrn">
          <span className="intern">Duration : </span> One month
        </p>
        <p className="intrn">
          <span className="intern">Technology :</span> HTML,CSS,JavaScript,
          React.js, mongodb , Node.js, Bootstrap
        </p>
        <p className="intrn">
          <span className="intern"> Learning : </span> Developed To-Do list ,
          Contact form with Captcha , Image Background Remover using HTML, CSS,
          JAVASCRIPT, REACT.JS and BOOTSTRAP framework.
        </p>
      </motion.div>
      <br />
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.2 }}
      >
        <p className="intrn">
          <span className="intern">Organisation : </span> Let's Grow More
        </p>
        <p className="intrn">
          <span className="intern">Duration : </span> One month
        </p>
        <p className="intrn">
          <span className="intern">Technology :</span> HTML,CSS,JavaScript
        </p>
        <p className="intrn">
          <span className="intern"> Learning : </span>Implement Registration
          form and calculator using JavaScript
        </p>
      </motion.div>
      <br></br>
      <h2 className="internship">Skills</h2>
      <div className="row skills-content">
        <motion.div
          className="col-lg-6"
          initial={{ x: -300, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="skill">HTML</span>
          <ProgressBar now={100} label={`${100}%`} />
          <br />
          <span className="skill">CSS</span>
          <ProgressBar now={90} label={`${90}%`} />
          <br />
          <span className="skill">JavaScript</span>
          <ProgressBar now={70} label={`${70}%`} />
          <br />
          <span className="skill">Bootstrap</span>
          <ProgressBar now={70} label={`${70}%`} />
          <br />
          <span className="skill">Git/GitHub</span>
          <ProgressBar now={80} label={`${80}%`} />
        </motion.div>
        <motion.div
          className="col-lg-6"
          initial={{ x: 300, scale: 0.5 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="skill">Java</span>
          <ProgressBar now={80} label={`${80}%`} />
          <br />
          <span className="skill">Data Structure and Algorithm</span>
          <ProgressBar now={80} label={`${80}%`} />
          <br />
          <span className="skill">React.Js</span>
          <ProgressBar now={60} label={`${60}%`} />
          <br />
          <span className="skill">Node.Js</span>
          <ProgressBar now={50} label={`${50}%`} />
          <br />
          <span className="skill">Cloud</span>
          <ProgressBar now={50} label={`${50}%`} />
        </motion.div>
      </div>
      <br></br>
    </>
  );
};

export default Skills;

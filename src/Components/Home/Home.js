import React from "react";
import "./Home.css";
import image from "../../assests/Images/Image-removebg-preview.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <h1>
          I am
          <motion.h1
            className="dynamic-texts name"
            data-text="SaiVamsi"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Sai Vamsi
          </motion.h1>
          <motion.h3
            className="dynamic-skill skill1"
            data-text="FrontEndWebDeveloper"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            FrontEnd Web Developer
          </motion.h3>
        </h1>
        <motion.p
          className="text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          I'm a Frontend Web Developer building the Front-end of Websites and
          Web Applications that leads to the success of the overall product.
          Check out some of my work in the Projects section.
        </motion.p>
        <motion.p
          className="text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          I'm open to Job opportunities where I can contribute, learn and grow.
          If you have a good opportunity that matches my skills and experience
          then don't hesitate to contact me.
        </motion.p>
        <div className="btn">
          <motion.a
            className="link"
            id="resume"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            href="https://drive.google.com/file/d/1rz5DnJ8CQVcqWa9beN0liaQJ4SRxVIMU/view?usp=sharing"
            target="blank"
          >
            Resume
          </motion.a>
        </div>
      </div>
      <motion.a
        className="right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <img src={image} alt="Image" />
      </motion.a>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import "./Projects.css";
import { data } from "../../assests/data";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DuoIcon from "@mui/icons-material/Duo";

const Projects = () => {
  const [active, setActive] = useState(false);
  const [productData, setProductData] = useState([]);

  // const navigate = useNavigate();
  // const handleNext = () => {
  //   navigate("/contact");
  // };
  // const handlePrevious = () => {
  //   navigate("/about");
  // };

  useEffect(() => {
    setProductData(data);
  }, []);

  const productFilter = (itemData) => {
    let filterData = data.filter((item) => item.field === itemData);
    setProductData(filterData);
  };

  return (
    <>
      <div className="projects">
        <h2 className="projects-heading">My Projects</h2>
        <div className="btns">
          <button
            className={productData === data ? "btn active" : "btn"}
            onClick={() => setProductData(data)}
          >
            All
          </button>
          <button
            className="selectBtn"
            onClick={() => productFilter("javascript")}
          >
            JavaScript
          </button>
          <button className="selectBtn" onClick={() => productFilter("react")}>
            React
          </button>
        </div>
        <ul>
          {productData.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} className="img" />
              <h3 className="title">{item.title}</h3>
              <div className="product-details">
                <p className="description">{item.description}</p>
                <p>
                  <span className="techStackHeading">Tech Stack : </span>
                  <span className="techStackData">{item.techStack}</span>
                </p>
                <div className="btn">
                  <a href={item.liveLink} target="_blank">
                    <button className="youtubeBtn">
                      <YouTubeIcon />
                      Live
                    </button>
                  </a>
                  <a href={item.github} target="_blank">
                    <button className="githubBtn">
                      <GitHubIcon />
                      GitHub
                    </button>
                  </a>
                  <a target="_blank">
                    <button className="videoBtn">
                      <DuoIcon />
                      Video
                    </button>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Projects;

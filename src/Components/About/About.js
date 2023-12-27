import React, { useEffect, useState } from "react";
import "./About.css";
import { skills } from "../../assests/skills";

const About = () => {
  const [skillData, setSkillData] = useState([]);

  useEffect(() => {
    setSkillData(skills);
  }, []);

  return (
    <div className="about">
      <h2 className="projects-heading">Skills</h2>
      <div className="skill-data">
        {skillData.map((item) => (
          <p key={item.id} className="link skill">
            <img src={item.image} className="skillImage" />
            <p>{item.description}</p>
          </p>
        ))}
      </div>
    </div>
  );
};

export default About;

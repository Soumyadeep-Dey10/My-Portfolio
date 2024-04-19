import React from "react";
import styles from "./ProjectCard.module.css";
import image2 from "../../assets/Project.png"
import image1 from "../../assets/Taskmate.png"
import image3 from "../../assets/Weather.png"
export const ProjectCard = ({
  project: { title, description, skills, demo, source ,image},
}) => {
    const getImagePath = (placeholderPath) => {
        switch (placeholderPath) {
          case "../../assets/Taskmate.png":
            return image1; 
        case "../../assets/Project.png":
            return image2; 
        case "../../assets/Weather.png":
            return image3; 
          default:
            return ""; 
        }
    };
  return (
    <div className={styles.container}>
          <img src={getImagePath(image)} alt={title} className={styles.image}></img>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
import React from "react";
import Project1 from "../images/Project1.jpg";
import Project2 from "../images/Project2.jpg";
import { Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Project3 from "../images/project3.jpg";
import Project4 from "../images/chat gpt.jpg";
import Project5 from "../images/fitness.jpg";

export const Projects = () => {
  const ProjectList = [
    {
      id: 1,
      name: "Tenent Management System",
      imageUrl: Project1,
    },
    {
      id: 2,
      name: "Expense Tracker App",
      imageUrl: Project2,
    },
    {
      id: 3,
      name: "Weather Forecast",
      imageUrl: Project3,
    },
    {
      id: 4,
      name: "Chat GPT-CLONE",
      imageUrl: Project4,
    },
    {
      id: 5,
      name: "Fitness Website",
      imageUrl: Project5,
    },
  ];
  return (
    <motion.div
      className="projects"
      animate={{ scale: [2, 1], rotate: [90, 0] }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h2>Projects</h2>
      <div className="wrapper">
        {ProjectList.map((item) => {
          return (
            <motion.div
              key={item.id}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
            >
              <Card>
                <Card.Img variant="top" src={item.imageUrl} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import { urlFor, client } from "../../client";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type=="abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);
  return (
    <>
      <h2 className="head-text">About me</h2>
      <div
        className="app__profiles"
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div>
          I am an Analyst Programmer at Pulse Mining Systems, specializing in
          developing and maintaining software solutions using a diverse set of
          technologies. At Pulse Mining Systems, I work with React.js, Redux,
          Progress Open 4GL, SQL databases, Git, Storybook, Jest, Postman, and
          Figma.
        </div>
        <div>
          Beyond my professional work, I have a passion for learning new things
          and collaborating with like-minded individuals. I engage in side
          projects to enhance my expertise, utilizing technologies such as
          React.js, Redux.js, Node.js, TypeScript, and Storybook.{" "}
        </div>
        <div>
          In addition to coding, I enjoy playing soccer,reading books and
          visiting new place wit friends. I play soccer 1-2 times a week.
        </div>
        {/* {abouts.map((about, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))} */}
      </div>
    </>
  );
};

export default AppWrap(About, "about");

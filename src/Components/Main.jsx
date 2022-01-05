import React from "react";
import Project1 from "../images/project1.png";
import Project2 from "../images/project2.png";
import Project4 from "../images/project4.png";
import Project11 from "../images/project11.png";
import Project12 from "../images/project12.png";
import Project13 from "../images/project13.gif";
import Project14 from "../images/project14.gif";
import Project15 from "../images/project15.gif";

const Main = () => {
  const projects = [
    {
      id: 1,
      short: "a",
      description:
        "Simple site - HTML, CSS, JS/React - rebuilded first project from bootcamp.",
      live: "https://adoring-noyce-2338cd.netlify.app/",
      code: `https://github.com/jaceksl1/project1-rwd-react`,
      img: Project1,
    },
    {
      id: 2,
      description:
        "Simple currency machine. HTML, CSS/Bootstrap, JS, HTML, CSS, Vanilla JS, RWD Fetch API from NBP.",
      live: "https://jaceksl1.github.io/currency-machine-JS/",
      code: "https://github.com/jaceksl1/currency-machine-JS",
      img: Project2,
    },
    {
      id: 3,
      description:
        "Rebuilded budget app. HTML, CSS, JS/React. At the beginning I used VanillaJS. ",
      live: "https://agitated-hamilton-b13a41.netlify.app/",
      code: "https://github.com/jaceksl1/budgetAppReact.github.io",
      img: Project4,
    },
    {
      id: 4,
      description:
        "Power Gym Website - Vanilla JS, Tailwind",
      live: "https://jaceksl1.github.io/Power-Gym-Website/",
      code: "https://github.com/jaceksl1/Power-Gym-Website",
      img: Project14,
    },
    {
      id: 5,
      description: "Multi Page Website - Genesis",
      live: "https://zealous-montalcini-a2d5a9.netlify.app/",
      code: "https://github.com/jaceksl1/Genesis-MultiPageWebsite",
      img: Project15,
    },
    {
      id: 6,
      description: "Book list - JS, LocalStorage",
      live: "https://jaceksl1.github.io/bookList-JS/",
      code: "https://github.com/jaceksl1/bookList-JS",
      img: Project11,
    },
    {
      id: 7,
      description: "Work flow board - JS, LocalStorage",
      live: "",
      code: "https://github.com/jaceksl1/work-flow-board-JS",
      img: Project12,
    },
    {
      id: 8,
      description: "Landing Page React",
      live: "",
      code: "https://github.com/jaceksl1/LandingPage-React",
      img: Project13,
    },
  ];

  return (
    <>
      <p className="subtitle-p">Some of my projects:</p>
      <section className="section-wrapper">
        <div className="main-container">
          {projects.map(({ id, description, live, code, img }) => (
            <div className="card card-bacground ">
              <div key={id} className="circle">
                <h2>{id}</h2>
              </div>
              <div className="project-img1">
                <img src={img} alt="project" />
              </div>
              <div className="content">
                <p>{description}</p>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer nofollow">
                  Code
                </a>
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer nofollow">
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Main;

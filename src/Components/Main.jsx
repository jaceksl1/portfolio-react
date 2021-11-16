import { useState } from "react";
import Project1 from "../images/project1.png";
import Project2 from "../images/project2.png";
import Project3 from "../images/project3.png";
import Project4 from "../images/project4.png";
import Project5 from "../images/project5.png";
import Project6 from "../images/project6.png";
import Project7 from "../images/project7.png";
import Project8 from "../images/project8.png";

const projects = [
  {
    id: 1,
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
      "Simple site - HTML, CSS, JS/React - rebuilded first project from bootcamp.",
    live: "https://adoring-noyce-2338cd.netlify.app/",
    code: "https://github.com/jaceksl1/project1-rwd-react",
    img: Project3,
  },
  {
    id: 4,
    description:
      "Rebuilded budget app. HTML, CSS, JS/React. At the beginning I used VanillaJS. ",
    live: "https://agitated-hamilton-b13a41.netlify.app/",
    code: "https://github.com/jaceksl1/budgetAppReact.github.io",
    img: Project4,
  },
  {
    id: 5,
    description:
      "My second project from BootCamp. Tech: HTML CSS/Bootstrap RWD. ",
    live: "https://jaceksl1.github.io/project2-RWD/#",
    code: "https://github.com/jaceksl1/project2-RWD",
    img: Project5,
  },
  {
    id: 6,
    description: "Simple validation form in Vanilla JS.",
    live: "https://jaceksl1.github.io/simpleFormValidation-JS/",
    code: "https://github.com/jaceksl1/simpleFormValidation-JS",
    img: Project6,
  },
  {
    id: 7,
    description: "Magic ball - Vanilla JS",
    live: "https://jaceksl1.github.io/magicBall-JS/",
    code: "https://github.com/jaceksl1/magicBall-JS",
    img: Project7,
  },
    {
    id: 8,
    description: "Timer - Vanilla JS full timer with history in arr change color change background",
    live: "https://jaceksl1.github.io/timer-JS/",
    code: "https://github.com/jaceksl1/timer-JS",
    img: Project8,
  },
];

const Main = () => {
  const INIT_SHOW_PROJECTS = -1;
  const [showProject, setShowProject] = useState(INIT_SHOW_PROJECTS);

  return (
    <>
      <section className="section-wrapper">
        <div className="main-container">
          {projects
            .filter((items, index) => index <= showProject)
            .map(({ id, description, live, code, img }) => (
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
      <div className="wrapper-btn-check">
        <button
          className="btn-check"
          onClick={(e) => setShowProject(showProject + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>Check projects
        </button>
      </div>
    </>
  );
};

export default Main;

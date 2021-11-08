import React from "react";

const Main = () => {
  return (
    <section className="section-wrapper">
      <div className="main-container">
        <div className="card card-bacground">
          <div className="circle">
            <h2>1</h2>
          </div>
          <div className="project-img1"></div>
          <div className="content">
            <p>
              Simple site - HTML, CSS, JS/React - rebuilded first project from
              bootcamp.
            </p>
            <a
              href="https://github.com/jaceksl1/project1-rwd-react"
              target="_blank"
              rel="noopener noreferrer nofollow">
              Code
            </a>
            <a
              href="https://adoring-noyce-2338cd.netlify.app/"
              target="_blank"
              rel="noopener noreferrer nofollow">
              Live
            </a>
          </div>
        </div>
        <div className="card card-bacground">
          <div className="circle">
            <h2>2</h2>
          </div>
          <div className="project-img2"></div>
          <div className="content">
            <p>
              Simple currency machine. HTML, CSS/Bootstrap, JS. HTML, CSS,
              Vanilla JS, RWD Fetch API from NBP
            </p>
            <a
              href="https://github.com/jaceksl1/currency-machine-JS"
              target="_blank"
              rel="noopener noreferrer nofollow">
              Code
            </a>
            <a
              href="https://jaceksl1.github.io/currency-machine-JS/"
              target="_blank"
              rel="noopener noreferrer nofollow">
              Live
            </a>
          </div>
        </div>
        <div className="card card-bacground">
          <div className="circle">
            <h2>3</h2>
          </div>
          <div className="project-img3"></div>
          <div className="content">
            <p>
              Simple bill splitter. Tech: JS vanilla HTML CSS RWD. Update -
              20/10/2021 Added: localStorage localStorage.clear() new Date()
              clearBtn
            </p>
            <a
              href="https://github.com/jaceksl1/BillSplitter-JS"
              target="_blank"
              rel="noopener noreferrer nofollow">
              Code
            </a>
            <a
              href="https://jaceksl1.github.io/BillSplitter-JS/"
              target="_blank"
              rel="noopener noreferrer nofollow">
              Live
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;

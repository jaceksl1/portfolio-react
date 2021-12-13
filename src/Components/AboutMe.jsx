import React from "react";
import doglover from "../images/doglover.png";
import teamplayer from "../images/teamplayer.png";
import selfdevelopment from "../images/selfdevelopment.png";
import Carousel from "./Carousel";

const Section1 = () => {
  const element1 = <i class="fab fa-linkedin"></i>;
  const element2 = <i class="fab fa-github"></i>;

  return (
    <>
      <div className="wrapper-me-section">
        <h1 className="info-h1">Hi, I'm Jacek Slomian</h1>
        <div className="info-p">
          <div>
            <span>I'm a frontend developer from Poland.</span>
            <br />
            <br />
            <span className="quote">
              "Inwesting in your own growth and self-development isn't selfish
              it's self care."
            </span>
          </div>
        </div>
        <div className="info-p aboutMe"></div>
        <div>
          <div className="box-wrapper">
            <div class="box actionImg6">
              <img src={selfdevelopment} alt="Self-development" />
              <div class="social_bg"></div>
              <div class="social_box">
                <span>Self-development</span>
                <br />
                <span>Interdisciplinarity</span>
                <br />
                <span>Multitasking</span>
                <br />
                <span>Problem-solving attitude</span>
                <br />
                <span>The desire to develop</span>
              </div>
            </div>
            <div class="box actionImg6">
              <img src={teamplayer} alt="Team player" />
              <div class="social_bg"></div>
              <div class="social_box">
                <span>Ease of adaptation</span>
                <br />
                <span>Teamwork</span>
                <br />
                <span>Sharing knowledge</span>
                <br />
                <span>Attention to detail</span>
                <br />
                <span>Focused on goals</span>
              </div>
            </div>
            <div class="box actionImg6">
              <img src={doglover} alt="Animal lover" />
              <div class="social_bg"></div>
              <div class="social_box">
                <span>Animal lover</span>
              </div>
            </div>
          </div>
        </div>
        <div className="wrapper-social">
          <div className="social-github">
            <a
              href="https://github.com/jaceksl1"
              target="_blank"
              rel="noopener noreferrer nofollow">
              {element2}
            </a>
          </div>
          <div className="social-linkedin">
            <a
              href="https://www.linkedin.com/in/jacek-s%C5%82omian-759171b9/"
              target="_blank"
              rel="noopener noreferrer nofollow">
              {element1}
            </a>
          </div>
        </div>
      </div>
      <div className="carousel">
        <Carousel />
      </div>
    </>
  );
};
export default Section1;

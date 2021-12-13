import React from "react";

const Header = () => {
  const element1 = <i class="fab fa-react fa-4x"></i>;
  const element2 = <i class="fab fa-js-square fa-4x"></i>;
  const element3 = <i class="fab fa-css3-alt fa-4x"></i>;
  const element4 = <i class="fab fa-html5 fa-4x"></i>;
  const element5 = <i class="fab fa-sass fa-3x"></i>;
  const element6 = <i class="fab fa-bootstrap fa-4x"></i>;

  return (
    <nav>
      <div className="nav-wrapper">
        <div className="title-wrapper">
          <h1 className="head-title">Hello, my name is Jacek.</h1>
        </div>
        <div className="subtitle">
          <p className="subtitle-p">Tech stack:</p>
          <div className="subitile-elements-wrapper">
            <section className="gradient-section">
              <ul className="gradient-ul">
                <li>
                  <p>{element1}</p>
                </li>
                <li>
                  <p>{element2}</p>
                </li>
                <li>
                  <p>{element3}</p>
                </li>
                <li>
                  <p>{element4}</p>
                </li>
                <li>
                  <p>{element5}</p>
                </li>
                <li>
                  <p>{element6}</p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

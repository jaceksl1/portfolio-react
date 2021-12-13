import React from "react";

const Footer = () => {
  const element1 = <i class="fab fa-linkedin fa-2x"></i>;
  const element2 = <i class="fab fa-github fa-2x"></i>;
  const element3 = <i class="fas fa-envelope-open-text fa-2x"></i>;
  const element4 = <i class="fab fa-codepen fa-2x"></i>;

  return (
    <footer className="footer-wrapper">
      <h1 className="contact-section-header">
        Below You can find my profiles and personal contact.
      </h1>
      <p>Want to work together or have any questions?</p>
      <section className="gradient-section">
        <ul className="gradient-ul">
          <li>
            <a
              href="https://www.linkedin.com/in/jacek-s%C5%82omian-759171b9/"
              target="_blank"
              rel="noreferrer">
              {element1}
            </a>
          </li>
          <li>
            <a
              id="profile-link"
              href="https://github.com/jaceksl1"
              target="_blank"
              rel="noreferrer">
              {element2}
            </a>
          </li>
          <li>
            <a href="mailto:j.k.slomian@gmail.com">{element3}</a>
          </li>
          <li>
            <a
              href="https://codepen.io/jaceksl1"
              target="_blank"
              rel="noreferrer">
              {element4}
            </a>
          </li>
        </ul>
      </section>
      <h5 class="footer-h5">Designed and Developed by Jacek Slomian</h5>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import linkedin from "../images/linkedin.png";
import github from "../images/github.svg";
import email from "../images/email-icon.png";

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-subscription-heading">
        Feel free to contact me below!
      </p>

      <section class="social-media">
        <div class="social-media-wrap">
          <h1 class="website-rights">© 2020 Michael Vo</h1>
          <div class="social-icons">
            <Link
              class="social-icon-link email"
              onClick={() => window.open("mailto:vomm@uci.edu")}
              target="_blank"
              aria-label="Email"
            >
              <i class="far fa-envelope"></i>
            </Link>
            <Link
              class="social-icon-link github"
              onClick={() => window.open("https://github.com/vomichaelminh")}
              target="_blank"
              aria-label="Github"
            >
              <i class="fab fa-github"></i>
            </Link>
            <Link
              class="social-icon-link linkedin"
              onClick={() =>
                window.open("https://www.linkedin.com/in/vomichaelminh")
              }
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;

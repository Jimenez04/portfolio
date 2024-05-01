import React from "react";
import "../css/footer.css";
import { useNavigate } from "react-router-dom";
import iconFacebook from "../img/icons/facebook.webp";
import iconInsta from "../img/icons/instagram.webp";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function footer() {
  const navigate = useNavigate();
  const location = useLocation();
  let year = new Date().getFullYear();
  return (
    <footer className={location.pathname === "/contact" ? "contact" : ""}>
      <svg
        className="home_wave-container"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#FFFFFF"
          fillOpacity="1"
          d="M0,128L80,144C160,160,320,192,480,197.3C640,203,800,181,960,192C1120,203,1280,245,1360,266.7L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
      <section>
        <div className="container_footer_info flex max_resolution">
          <div className="footer_contact">
            <a onClick={() => navigate("/contact")}>Contact</a>
          </div>
          <div className="footer_social ">
            <label>Social</label>
            <div className="footer_social_container flex">
              <a
                className="flex"
                href="https://www.facebook.com/josejimenezsoto04"
                target="_blank"
              >
                Facebook{" "}
                <span>
                  <img src={iconFacebook} alt=""></img>
                </span>{" "}
              </a>
              <a
                className="flex"
                href="https://www.instagram.com/jose_jimenez0199"
                target="_blank"
              >
                Instagram{" "}
                <span>
                  <img src={iconInsta} alt=""></img>
                </span>
              </a>
            </div>
          </div>
          <div className="footer_copy flex">
            <span>© José Jiménez {year}</span>
          </div>
        </div>
      </section>
    </footer>
  );
}

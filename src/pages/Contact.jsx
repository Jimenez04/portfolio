import React from "react";
import "../assets/css/contact.css";
import iconFacebook from "../assets/img/icon/facebook.webp";
import iconGit from "../assets/img/icon/github.webp";
import iconInsta from "../assets/img/icon/instagram.webp";
import iconLinke from "../assets/img/icon/linkedin.webp";

export default function Contact() {
  return (
    <section id="contact_page">
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
      <div className="contact_container">
        <div className="contact_subcontainer max_resolution">
          <h2>My social media</h2>
          <h3>Contact me</h3>
          <div className="contact_container_items">
            <a
              target="_blank"
              className="social_media_container_facebook icon_social_media_contact "
              href="https://www.facebook.com/josejimenezsoto04"
            >
              <img
                className="lazyload"
                src={iconFacebook}
                alt="Icon_Facebook"
              ></img>
              <span>Facebook</span>
            </a>
            <a
              target="_blank"
              className="social_media_container_linkedin icon_social_media_contact "
              href="https://www.linkedin.com/in/jose-enrique-jimenez-soto-2549a8177/"
            >
              <img
                className="lazyload"
                src={ iconLinke }
                alt="Icon_Linkedin"
              ></img>
              <span>Linkedin</span>
            </a>
            <a
              target="_blank"
              className="social_media_container_github icon_social_media_contact "
              href="https://github.com/Jimenez04"
            >
              <img
                className="lazyload"
                src={ iconGit }
                alt="Icon_Github"
              ></img>
              <span>GitHub</span>
            </a>
            <a
              target="_blank"
              className="social_media_container_instagram icon_social_media_contact "
              href="https://www.instagram.com/jose_jimenez0199"
            >
              <img
                className="lazyload"
                src={ iconInsta }
                alt="Icon_Instagram"
              ></img>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import '../assets/css/home.css'
import imgME from "../assets/img/me.webp";
import wave from "../assets/img/svg/wave.svg";
import Photography from "../assets/components/Photography";

export default function Home() {
  return (
    <>
      <section className="hero flex-center">
        <div id="overlay"></div>
        <div className="hero-div_info flex-center max_resolution">
          <h1>I'm José</h1>
          <div className="image">
            <img src={imgME} alt="Me" width="500" height="500" />
          </div>
          <div className="hero_span-container">
            <span>
              Hi there, I look forward to you are well. I’m José a developer.
            </span>
          </div>
          <p>
            I'm a highly skilled Software Developer with a strong background in programming languages and a proven track record of delivering high quality software solutions. Experienced in full-stack development and adapted at problem-solving and collaboration in diverse teams. I've recently finished my studies in Business Computer Science at the University of Costa Rica and am eager to apply the skills I acquired in an international company.
          </p>
        </div>
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
      </section>
      <section className="home-about_me">
        <div className="home-about_me_container max_resolution">
          <h2>A little about me</h2>
          <h3>Along the years</h3>
          <div className="home-about_me_history_container flex">
            <div className="history_container_lines"></div>
            <div className="history_container_hidden-lines"></div>

            <div
              id="history"
              className="home-about_me_history_container_items max_resolution"
            >
              <div className="history_container_item left">
                <label >2011 to 2017</label>
                <p>
                  I’ve always loved the nature, for that reason, when I was in
                  the secondary school, my speciality was agriculture.
                </p>
              </div>

              <div className="history_container_item right">
                <label>2017</label>
                <p>
                  I performed my last work at secondary in the Earth University
                  in Costa Rica. I was there as an intern of agriculture. I
                  enjoyed those moment, and I am fully grateful with the
                  opportunity they prouded me.
                </p>
              </div>

              <div className="history_container_item left">
                <label >2018 to 2022</label>
                <p>
                  I studied business computing in the university of Costa Rica
                  (UCR). There, I learned about developing, designing, backend,
                  frontend, networks, database and a little of business
                  administration and management. I enjoyed each moment there, it
                  was a wonderful experience.
                </p>
              </div>

              <div className="history_container_item right">
                <label >2021</label>
                <p>
                  That year, I worked with Decimo inc as intern, there, I
                  learned a lot of about frontend (CSS, HTML and JS) and work as
                  a team. I was with them only for 4 month and enjoyed a lot of
                  being there with them.
                </p>
              </div>

              <div className="history_container_item left">
                <label >2022</label>
                <p>
                  I did my final work of the university at my same university. I
                  worked doing a software for the orientation department, which
                  was a success.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="more_about_me max_resolution">
          <h3>I will talk to you a bit more about me</h3>
          <div className="more_about_me_container_p">
            <p>
              So, when I’m not at home, I like doing a lot of things, I love
              swimming in the ocean, besides, I love trying new places for
              eating. However, I have been in love with the cameras ever,
              therefore, I usually go out for taking photos. I love spending
              time with my family and friends, maybe doing a BBQ, looking at the
              stars in the sky.
            </p>
          </div>
        </div>
        <div className="wave_history">
          <div className="wave_history_false_background"></div>
          <img
            className="home_wave-container"
            src={wave }
            alt="wave"
          />
        </div>
      </section>

      <section id="technologies">
        <div className="technologies_container max_resolution">
          <h2>I’ve worked with</h2>
          <h3>This technologies</h3>
          <div className="technologie_items flex">
            <div className="technologie_item_container_main flex left">
              <div className="item">
                <h4>FrontEnd</h4>
                <div className="technologie_items_container_technologies flex">
                  <div className="flex-center">
                    <span>HTML</span>
                  </div>
                  <div className="flex-center">
                    <span>CSS</span>
                  </div>
                  <div className="flex-center">
                    <span>JS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="technologie_item_container_main flex right">
              <div className="item">
                <h4>BackEnd</h4>
                <div className="technologie_items_container_technologies flex">
                  <div className="flex-center">
                    <span>PHP</span>
                  </div>
                  <div className="flex-center">
                    <span>C#</span>
                  </div>
                  <div className="flex-center">
                    <span>JAVA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="technologie_item_container_main flex left">
              <div className="item">
                <h4>Framework</h4>
                <div className="technologie_items_container_technologies flex">
                  <div className="flex-center">
                    <span>Laravel</span>
                  </div>
                  <div className="flex-center">
                    <span>.NET</span>
                  </div>
                  <div className="flex-center">
                    <span>WordPress</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="technologie_item_container_main flex right">
              <div className="item">
                <h4>Database</h4>
                <div className="technologie_items_container_technologies flex">
                  <div className="flex-center">
                    <span>SQL Server</span>
                  </div>
                  <div className="flex-center">
                    <span>MySQL</span>
                  </div>
                  <div className="flex-center">
                    <span>PostgreSQL</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="technologie_item_container_main flex left">
              <div className="item">
                <h4>Design</h4>
                <div className="technologie_items_container_technologies flex">
                  <div className="flex-center">
                    <span>XD</span>
                  </div>
                  <div className="flex-center">
                    <span>Figma</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Photography/>
    </>
  );
}

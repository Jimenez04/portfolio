import React from "react";
import "../assets/css/home.css";
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
            <span>Hi there, I hope you are well. I am a developer.</span>
          </div>
          <p>
            I am a highly skilled Software Developer with a strong background in
            programming languages and a proven track record of delivering high
            quality software solutions. Experienced in full-stack development
            and adapted at problem-solving and collaboration in diverse teams.
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
          <h2>Along the years</h2>
          {/* <h2>Know me</h2> */}
          {/* <h3>Along the years</h3> */}
          <div className="home-about_me_history_container flex">
            <div className="history_container_lines"></div>
            <div className="history_container_hidden-lines"></div>

            <div
              id="history"
              className="home-about_me_history_container_items max_resolution"
            >
              <div
                // className="history_container_item left"
              >
                <div className="history_container_item left">
                  <label>Decimo INC</label>
                  <p>
                    I started my internship with Decimo after Covid pandemic,
                    there I could apply all my skills and improve them. Besides,
                    when I was there I took the rol like web developer.
                  </p>
                </div>
              </div>

              <div >
                <div className="history_container_item right">
                  <label>University of Costa Rica</label>
                  <p>
                    My last year in the university, I had to do a project which
                    was the biggest and most importan project that I had never
                    done to that moment. It took one year from the beginning to
                    its conclusion.
                  </p>
                </div>
              </div>

              <div >
                <div className="history_container_item left">
                  <label>Cocoloco Adventure</label>
                  <p>
                    This is my most important experience, because, I started to
                    work with Cocoloco Adventure when I was a teenager to the
                    present. I beginning like mechanic there, then my position
                    was changed, thanks to my university. Now, I am in change of
                    finances.
                  </p>
                </div>
              </div>

              <div >
                <div className="history_container_item right">
                  <label>Freelance</label>
                  <p>
                    While I have worked to Cocoloco, I have been the opportunity
                    to participate in different projects like freelance. I have
                    made websites, deploys websites, have checked the SEO as
                    have designed websites in XD. This has been a challenge for
                    my, but I love it, that I can improve my skills.
                  </p>
                </div>
              </div>

              {/* <div className="history_container_item left">
                <label>2022</label>
                <p>
                While I have worked to Cocoloco, I have been the opportunity to participate in different projects like freelance. I have made websites, deploys websites, have checked the SEO as have designed websites in XD. This has been a challenge for my, but I love it, that I can improve my skills. 
                </p>
              </div> */}
            </div>
          </div>
        </div>
        <div className="sub_section_more_about_me">
          <div className="more_about_me max_resolution">
            <h3>I will talk to you a bit more about me</h3>
            <div className="more_about_me_container_p">
              <p>
                In my free time, I tend to do a lot of things like spend time
                with my family, I love that, I considered that as the most
                important hobby in my life, besides that, I love to sit on the
                sand, earring and looking at the sea. In any place, I carry my
                camera with me, I am a big fan of taking pictures and prefer the
                portraits. I always want to try new kind of food, My favorite is
                the Italian food.
              </p>
            </div>
          </div>
          <div className="wave_history">
            <div className="wave_history_false_background"></div>
            <img className="home_wave-container" src={wave} alt="wave" />
          </div>
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
                  <div className="flex-center">
                    <span>React</span>
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
                  <div className="flex-center">
                    <span>Python</span>
                  </div>
                  <div className="flex-center">
                    <span>Ruby</span>
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
                    <span>Rails</span>
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
      <Photography />
    </>
  );
}

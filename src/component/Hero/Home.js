import React from "react";
import "./Home.css";
import hero from "../pic/hero2.png";
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex">
          <div className="left">
            <h3>WELCOME TO CHESS WORLD</h3>
            <h1>
              {" "}
              Hi, I’m <span>Krishna </span>
            </h1>
            <h2>
              a
              <span>
                <Typewriter
                  words={[" Chess Trainer.", " Chess Player."]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
            A chess instructor monitors and advises a chess team or individual student. You can coach students at any level, helping them to learn rules and pieces, improve their chess strategy, and prepare for national games.
            </p>

            <div className="hero_btn">
              <div className="col_1">
                <h4>FIND WITH ME</h4>

                <div className="button">
                  <button className="btn_shadow">
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i class="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>

              <div className="col_1">
                <h4>BEST SKILL ON</h4>

                <div className="button">
                  <button className="btn_shadow">
                    <img src={skill1} alt="" />
                  </button>
                  <button className="btn_shadow">
                    <img src={skill2} alt="" />
                  </button>
                  <button className="btn_shadow">
                    <img src={skill3} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" className="hero-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

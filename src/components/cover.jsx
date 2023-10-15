import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faHackerrank,
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Fade from "react-reveal/Fade";

const Cover = () => {
  return (
    <div className="bg-div" id="home">
      <div className="head mx-5">
        <div className="head-div mx-auto main-div">
          <Fade top cascade>
            <section className="div-1">
              <h1 className="my-1 head-div-first-text">Welcome to</h1>
              <h1 className="head-div-second-text">Taekwondo-PTIT</h1>
              <h1 className="head-div-third-text">
                Learn what is real Taekwondo.
              </h1>
              <p className="head-div-fourth-text">
                Taekwondo was born to train soldiers to survive on the battlefield, and it was done without relying on weapons - hence the “unarmed” spiel. It was never meant to be used against unarmed opponents; indeed, the opponent was expected to be armed. And in order to train to kill an armed opponent, you had to have an understanding of the kinds of weapons that would be used. So, like machine guns, hand guns, sticks, and knives.
              </p>
            </section>
          </Fade>
        </div>
      </div>
      <Fade bottom>
        <span className="scroll-btn">
          <a href="#home">
            <span className="mouse">
              <span></span>
            </span>
          </a>
        </span>
      </Fade>
      <div className="social-media">
        <Fade left cascade>
          <ul className="social-media-list">
            {SocialData.map((data, ind) => {
              return (
                <li key={data + ind}>
                  <a
                    className="social-media-list-link"
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={data.icon} className="media-icons" />
                  </a>
                </li>
              );
            })}
          </ul>
        </Fade>
      </div>
    </div>
  );
};

export default Cover;

const SocialData = [
  {
    link: "https://www.facebook.com/taekwondo.ptit",
    icon: faFacebook,
  },
  {
    link: "https://www.youtube.com/c/PTITTaekwondo",
    icon: faYoutube,
  },
  {
    link: "https://www.instagram.com/taekwondo.ptit",
    icon: faInstagram,
  },
];

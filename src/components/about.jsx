import React from 'react';
import {Fade} from "react-reveal";

const About = () => {
    return (
      <div
        style={{ background: "#0b0b0d", color: "white" }}
        className="main-div"
        id="about"
      >
        <Fade left cascade>
        <section className="div-1 about">
          <h1 className="heading">About Me</h1>
          <div>
            <p className="text mt-4 mb-3">
            CLB Taekwondo - PTIT là một câu lạc bộ sinh viên của Học viện Công Nghệ Bưu Chính Viễn Thông.
            </p>
            <p className="text my-3">
             Tạo ra nhằm mục đích học tập, rèn luyện sức khỏe và tạo sân chơi cho những người có đam mê với võ thuật. Trải qua 11 năm hình thành và phát triển Taekwondo-PTIT đã và đang là CLB võ thuật lớn nhất của Học viện Công nghệ Bưu chính Viễn thông.
            Với quy mô lớn, hiện tại chúng tôi đã thu hút được rất nhiều sinh viên từ các trường lân cận và số lượng thành viên lên tới hơn 100 võ sinh mỗi buổi tập.
            Chúng tôi sẽ luôn chào đón và giúp bạn có những buổi tập chất lượng, vui vẻ khi bạn là thành viên của gia đình Taekwondo-PTIT!{" "}
              {/* <span style={{ color: "#63c9c6" }}>
                Mathematics and Computing
              </span>{" "}
              from <span style={{ color: "#63c9c6" }}>IIT(ISM) Dhanbad</span>. I
              enjoy designing and creating beautiful web application / website
              and anything in between. I seek and enjoy stuff that challenges me
              and makes me think out of the box. My main goal is to be able to
              build useful, sleek, and efficient products. */}
            </p>
          </div>
          <p className="text mt-3">
            Here are a few technologies that I currently work with:
          </p>
          <div className="skills-box">
            <ul className="lists">
              {["React/Redux", "Node", "Express", "Firebase"].map((text) => {
                return (
                  <li className="my-2 list-item" key={text}>
                    {text}
                  </li>
                );
              })}
            </ul>
            <ul className="lists">
              {["MongoDB", "SCSS", "Material UI", "PostgreSQL"].map((text) => {
                return (
                  <li className="my-2 list-item" key={text}>
                    {text}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        </Fade>
      </div>
    );
}

export default About;

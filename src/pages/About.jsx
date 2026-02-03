import React from "react";
import About_Me from "../assets/logo/profile.jpg";
import Button from "../components/Button";
function AboutMe() {
  return (
    <>
      <section className="about_section text-white">
        <div className="container">
          <h1 className="text-center heading mb-4">About Me</h1>
          <div className="row align-items-center">
            <div className="col-md-4 col-sm-12 ">
              <img
                src={About_Me}
                alt="About Me"
                className="img-fluid profile"
              />
            </div>
            <div className="col-md-8 col-sm-12 p-4 ">
              <p className="lead ">
                Hi, I'm <strong>Nagnath</strong>, a passionate web developer
                dedicated to creating dynamic and user-friendly web experiences.
                With strong expertise in modern technologies and frameworks, I
                enjoy solving problems and bringing ideas to life through clean,
                efficient code.
              </p>
              <p>
                I have completed my MCA degree in Computer Science with a
                specialization in Information Technology (IT). I have hands-on
                experience in both frontend and backend development. My
                interests include learning new technologies, collaborating on
                projects, and continuously improving my skills as a developer.
              </p>
              {/* <div className="btns  ">
                <Button path={"/"} name={"Home"} />
                <Button path={"/portfolio"} name={"Portfolio"} />
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;

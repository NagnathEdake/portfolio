import React from "react";
import TextType from "../components/TextType";
import Particles from "../components/Particles";

function Hero() {
  return (
    <section className="section-home">
      {/* Background particles */}
      <div className="particles-bg">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={300}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      {/* Foreground content */}
      <div className="container content-layer d-flex flex-column text-center align-items-center justify-content-center">
        <h1 className="heading  fw-bolder">Web Developer</h1>

        <div className="skill fw-bold fs-4 mt-4">Skills</div>

        <div className="content fs-2 mt-2">
          <TextType
            text={[
              "HTML, CSS, JavaScript",
              "React.js ",
              "core java & SpringBoot",
              "MySQL & REST APIs",
              "Responsive Web Design",
              "Java Full-stack",
              "Front-End Developer",
              "Back-End Developer",
            ]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor
            cursorCharacter="●"
            deletingSpeed={50}
            cursorBlinkDuration={0.5}
          />
        </div>
        {/* <div className="btns mt-3">
          <Button path={"/about"} name={"About Me"} />
          <Button path={"/portfolio"} name={"Portfolio"} />
        </div> */}
      </div>
    </section>
  );
}

export default Hero;

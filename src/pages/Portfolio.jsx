import React, { useEffect, useState } from "react";
import projectImg from "../assets/project.png";
import Button from "../components/Button";
import axios from "axios";

function Portfolio() {
  const [projects, setProject] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/project");
        console.log(res.data);
        setProject(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProjects();
  }, []);

  const image = projectImg;
  return (
    <>
      <section className="portfolio-section text-center">
        <div className="container">
          <div className="addProjectBtn mb-3">
            <h1 className="heading mb-3">My Projects</h1>{" "}
            <Button
              path={"/add"}
              className="btn btn-primary "
              target=""
              rel="noopener noreferrer"
              name={"Add Project"}
            />
          </div>
          <div className="row ">
            {projects.map((project) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 mb-4 "
                key={project.id}
              >
                <div className=" card-black shadow-sm">
                  <img
                    src={!project.imgSrc ? projectImg : project.imgSrc}
                    alt={project.title}
                    className="card-img-top rounded"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <div className="card-body mt-4">
                    <h5 className="card-title mb-3">{project.title}</h5>
                    <p className="card-text">
                      {project?.description.slice(0, 70) + "..."}
                    </p>
                    <div className="d-flex justify-content-between">
                      <Button
                        path={project.url}
                        className="btn btn-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                        name={"GitHub"}
                      />
                      <Button
                        path={project.liveDemo}
                        className="btn btn-success"
                        target="_blank"
                        rel="noopener noreferrer"
                        name={"Live Demo"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;

//  const projects = [
//     {
//       title: "Expense Tracker",
//       description:
//         "The Expense Tracker is a small web-based application designed to help users record and manage their daily expenses efficiently",
//       liveDemo: "https://yourwebsite.com/project-one",
//       imgSrc: projectImg,
//     },
//     {
//       title: "Movie Search Website",
//       description:
//         "The Movie Search Website is a web application that allows users to search for movies by name and instantly view relevant details",
//       url: "https://github.com/NagnathEdake/movie-search-app",
//       liveDemo: "https://yourwebsite.com/project-two",
//       imgSrc: projectImg,
//     },
//     {
//       title: "News Website",
//       description:
//         "The News Website with Categories is a web application that provides users with access to the latest news organized into different categories such as Technology, Sports, Business, Entertainment, and Health.",
//       url: "https://github.com/NagnathEdake/news-web",
//       liveDemo: "https://yourwebsite.com/project-two",
//       imgSrc: projectImg,
//     },
//     // Add more projects as needed
//   ];

import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  
  const project = projects.map((project)=>{
    return <ProjectItem key={project.id}  name={project.name} technologies={project.technologies} about={project.about}/>
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{project}</div>
    </div>
  );
}

export default ProjectList;

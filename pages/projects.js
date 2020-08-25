import React from "react";
import Articles from "../components/articles";
import Query from "../components/query";
import PROJECTS_QUERY from "../apollo/queries/project/projects";

function Projects() {
  return (
    <div>
      <h1 className="d-flex justify-content-center">Projects</h1>
      <Query query={PROJECTS_QUERY}>
        {({ data: { projects } }) => {
          return <Articles articles={projects} />;
        }}
      </Query>
    </div>
  );
}

export default Projects;

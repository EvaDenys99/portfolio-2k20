import React from "react";
import Articles from "../components/articles";
import Filters from "../components/filters";
import Query from "../components/query";
import PROJECTS_QUERY from "../apollo/queries/project/projects";
import CATEGORIES_QUERY from "../apollo/queries/category/categories";
import CATEGORY_PROJECTS_QUERY from "../apollo/queries/category/projects";
import { useRouter } from "next/router";

function Projects() {
  const router = useRouter();

  return (
    <div>
      <style jsx global>{`
        body {
          background-color: #151515;
          background-image: radial-gradient(
            circle at bottom right,
            #2c2c2c,
            #0c0c0c
          );
          background-attachment: fixed;
          color: #f8f8ff;
        }
      `}</style>
      <h1 className="d-none">Projects</h1>
      <Query query={CATEGORIES_QUERY}>
        {({ data: { categories } }) => {
          return <Filters tags={categories} />;
        }}
      </Query>
      <div className="container animate__animated animate__fadeIn">
        {!router.query.id ? (
          <Query query={PROJECTS_QUERY}>
            {({ data: { projects } }) => {
              return <Articles articles={projects} />;
            }}
          </Query>
        ) : (
          <Query query={CATEGORY_PROJECTS_QUERY} id={router.query.id}>
            {({ data: { category } }) => {
              return (
                <div>
                  <div className="uk-section">
                    <div className="uk-container uk-container-large">
                      <Articles articles={category.projects} />
                    </div>
                  </div>
                </div>
              );
            }}
          </Query>
        )}
      </div>
    </div>
  );
}

export default Projects;

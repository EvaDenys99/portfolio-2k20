import React from "react";
import Articles from "../components/articles";
import Filters from "../components/filters";
import { getProjects, getCategories } from "../lib/api";
import Layout from "../components/layout";

const Projects = ({ categories, projects }) => {
  return (
    <Layout
      pageTitle="Eva Denys Projects"
      description="Proud to present a few highlighted projects."
    >
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
            background-position: bottom, center;
            background-repeat: no-repeat;
            color: #f8f8ff;
          }
        `}</style>
        <h1 className="d-none">Projects</h1>
        <Filters tags={categories} />
        <div className="container animate__animated animate__fadeIn">
          <Articles articles={projects} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const projects = (await getProjects()) || [];
  const categories = (await getCategories()) || [];

  return {
    props: { projects, categories },
    revalidate: 1
  };
}

export default Projects;

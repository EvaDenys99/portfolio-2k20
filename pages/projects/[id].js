import React from "react";
import Articles from "../../components/articles";
import Filters from "../../components/filters";
import { getCategories, getCategoryProjects } from "../../lib/api";
import Layout from "../../components/layout";
import { useRouter } from "next/router";

const Projects = ({ categories, categoryProjects }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  } else
    return (
      <Layout>
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
          <Filters tags={categories} />
          <div className="container animate__animated animate__fadeIn">
            <Articles articles={categoryProjects} />
          </div>
        </div>
      </Layout>
    );
};

export async function getStaticPaths() {
  const categories = (await getCategories()) || [];
  return {
    paths: categories.map(category => ({
      params: {
        id: category.id
      }
    })),
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const categoryProjects = (await getCategoryProjects(params.id)) || [];
  const categories = (await getCategories()) || [];

  return {
    props: { categoryProjects, categories },
    revalidate: 1
  };
}

export default Projects;

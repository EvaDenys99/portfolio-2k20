import React from "react";
import Articles from "../components/articles";
import Filters from "../components/filters";
import Layout from "../components/layout";
import { getArticles, getCategories } from "../lib/api";

const Blog = ({ categories, articles }) => {
  return (
    <Layout pageTitle="Eva Denys Blog" description="The blog of Eva Denys">
      <div>
        <style jsx global>{`
          body {
            background-color: #f8f8ff;
            color: #403f3f;
          }
          .highlights,
          .badge-outlined-active,
          a:hover {
            color: #951d4d;
          }

          .badge-outlined-active {
            border: 1px solid #951d4d;
            background-color: #951d4d;
            color: #f8f8ff;
          }
          .badge-outlined-active:hover {
            background-color: transparent;
          }
          @media only screen and (min-width: 0px) {
            .nav-item {
              color: #f8f8ff;
            }
            .nav-item-active {
              color: #05f0b5;
            }
          }
          @media only screen and (min-width: 720px) {
            .nav-item {
              color: #403f3f;
            }
            .nav-item-active {
              color: #951d4d;
            }
          }
        `}</style>

        <h1 className="d-none">Blog</h1>
        <Filters tags={categories} />

        <div className="container animate__animated animate__fadeIn">
          <Articles articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const articles = (await getArticles()) || [];
  const categories = (await getCategories()) || [];

  return {
    props: { articles, categories },
    revalidate: 1
  };
}

export default Blog;

import React from "react";
import Articles from "../components/articles";
import Filters from "../components/filters";
import Query from "../components/query";
import ARTICLES_QUERY from "../apollo/queries/blog/articles";
import CATEGORIES_QUERY from "../apollo/queries/category/categories";
import CATEGORY_ARTICLES_QUERY from "../apollo/queries/category/articles";
import { useRouter } from "next/router";

function Blog() {
  const router = useRouter();

  return (
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
      <Query query={CATEGORIES_QUERY}>
        {({ data: { categories } }) => {
          return <Filters tags={categories} />;
        }}
      </Query>
      <div className="container animate__animated animate__fadeIn">
        {!router.query.id ? (
          <Query query={ARTICLES_QUERY}>
            {({ data: { blogs } }) => {
              return <Articles articles={blogs} />;
            }}
          </Query>
        ) : (
          <Query query={CATEGORY_ARTICLES_QUERY} id={router.query.id}>
            {({ data: { category } }) => {
              return (
                <div>
                  <div className="uk-section">
                    <div className="uk-container uk-container-large">
                      <Articles articles={category.blogs} />
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

export default Blog;

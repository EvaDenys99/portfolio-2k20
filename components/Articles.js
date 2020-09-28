import React from "react";
import Card from "./card";
import { useRouter } from "next/router";

const Articles = ({ articles }) => {
  const router = useRouter();

  return (
    <div className="mt-4 container nowrap">
      <div className="row row-cols-1 row-cols-md-2 tested animate__animated animate__fadeInUp animate__slow">
        {articles.map((article, i) => {
          return <Card article={article} key={`article__${article.id}`} />;
        })}
        {articles.length === 0 && (
          <p className="small">
            There are no{" "}
            {router.route === "/projects" ? "Projects" : "Articles"} available
            for this tag.
          </p>
        )}
      </div>
    </div>
  );
};

export default Articles;

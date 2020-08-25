import React from "react";
import Card from "./card";

const Articles = ({ articles }) => {
  return (
    <div className="mt-5 container nowrap">
      <div class="row cols-1">
        {articles.map((article, i) => {
          return <Card article={article} key={`article__${article.id}`} />;
        })}
      </div>
    </div>
  );
};

export default Articles;

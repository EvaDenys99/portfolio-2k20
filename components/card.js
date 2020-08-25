import React from "react";
import Link from "next/link";

const Card = ({ article }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.headImage.url
      : process.env.API_URL + article.headImage.url;
  return (
    <Link href={{ pathname: "article", query: { id: article.id } }}>
      <a className="col">
        <div>
          <div className="mb-2">
            <img src={imageUrl} alt={article.headImage.url} height="200" />
          </div>
          <div className="mt-2">
            <h3>{article.title}</h3>
            <p className="small text-muted">{article.creationDate}</p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;

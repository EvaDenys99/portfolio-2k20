import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Card = ({ article }) => {
  const router = useRouter();
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? article.headImage.url
      : process.env.API_URL + article.headImage.url;
  return (
    <Link
      href={{
        pathname: router.pathname === "/projects" ? "project" : "article",
        query: { id: article.id }
      }}
    >
      <a className="col mb-4">
        <div>
          <div className="mb-2">
            <img
              className={
                router.route === "/projects"
                  ? "img-fluid border border-secondary"
                  : "img-fluid border border-info"
              }
              src={imageUrl}
              alt={article.headImage.url}
              height="200"
            />
          </div>
          <div className="mt-2 d-flex flex-row justify-content-between">
            <h3>> {article.title}</h3>
            <p className="small text-muted">
              {router.route === "/projects"
                ? article.creationDate
                : article.creationdate}
            </p>
          </div>
          <div className="d-flex flex-row">
            {article.categories.map((c, i) => (
              <p key={i} className="small text-muted pr-2">
                #{c.name}
              </p>
            ))}
          </div>
          {article.description && (
            <p className="small pt-2">{article.description}</p>
          )}
        </div>
      </a>
    </Link>
  );
};

export default Card;

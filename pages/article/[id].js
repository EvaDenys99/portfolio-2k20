import React from "react";
import { getArticles, getArticle } from "../../lib/api";
import Layout from "../../components/layout";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

const Article = ({ article }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  } else
    return (
      <Layout>
        <div className="container animate__animated animate__fadeIn">
          <style jsx global>{`
            .highlights,
            a:hover {
              color: #951d4d;
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
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb small pt-4">
              <li className="breadcrumb-item active">
                <a href="/blog">Blogposts</a>
              </li>
              <li className="breadcrumb-item" aria-current="page">
                >_{article.title}
              </li>
            </ol>
          </nav>
          <div className="animate__animated animate__fadeIn animate__slow">
            <img
              className="img-fluid border border-info mb-3"
              src={
                process.env.NODE_ENV !== "development"
                  ? article.headImage.url
                  : process.env.API_URL + article.headImage.url
              }
              alt={article.headImage.url}
              height="200"
            />
            <div className="d-flex flex-row justify-content-between">
              <h1>{article.title}</h1>
              <div>
                <p className="small text-muted text-right">
                  By {article.createdBy}
                </p>
                <p className="small text-muted text-right">
                  {article.creationdate}
                </p>
              </div>
            </div>
            <div className="d-flex flex-row pb-2">
              {article.categories.map((c, i) => (
                <p key={i} className="small pr-1 text-muted">
                  #{c.name}
                </p>
              ))}
            </div>
            <ReactMarkdown
              className="line-break"
              source={article.description}
            />
            {article.images.length > 1 && (
              <>
                <img
                  className="img-fluid mt-4"
                  src={
                    process.env.NODE_ENV !== "development"
                      ? article.images[0].url
                      : process.env.API_URL + article.images[0].url
                  }
                  alt={article.images[0].url}
                  height="200"
                />
                <p className="small text-muted">
                  <em>{article.images[0].caption}</em>
                </p>
              </>
            )}
            <ReactMarkdown
              className="mt-4 line-break"
              source={article.content}
            />
            <div className="mt-4 row row-cols-1 row-cols-md-2">
              {article.images.length > 0 &&
                article.images.map((m, i) => (
                  <div className="pb-2" key={i}>
                    <img
                      src={
                        process.env.NODE_ENV !== "development"
                          ? m.url
                          : process.env.API_URL + m.url
                      }
                      alt={
                        process.env.NODE_ENV !== "development"
                          ? m.url
                          : process.env.API_URL + m.url
                      }
                      className="mb-2 pl-1 img-fluid"
                    />
                    <p className="small text-muted">
                      <em>{m.caption}</em>
                    </p>
                  </div>
                ))}
              {article.videos.length > 0 &&
                article.videos.map((m, i) => (
                  <div className="pb-2" key={i}>
                    <video controls autoPlay className="mb-2 pl-1 img-fluid">
                      <source
                        src={
                          process.env.NODE_ENV !== "development"
                            ? m.url
                            : process.env.API_URL + m.url
                        }
                        type="video/mp4"
                      />
                      Your browser does not support HTML video.
                    </video>
                    <p className="small text-muted">
                      <em>{m.caption}</em>
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Layout>
    );
};

export async function getStaticPaths() {
  const articles = (await getArticles()) || [];
  return {
    paths: articles.map(article => ({
      params: {
        id: article.id
      }
    })),
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  const article = (await getArticle(params.id)) || [];

  return {
    props: { article },
    revalidate: 1
  };
}

export default Article;

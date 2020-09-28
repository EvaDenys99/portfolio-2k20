import { useRouter } from "next/router";
import Query from "./components/query";
import ARTICLE_QUERY from "../apollo/queries/blog/article";
import ReactMarkdown from "react-markdown";

const Article = () => {
  const router = useRouter();

  return (
    <Query query={ARTICLE_QUERY} id={router.query.id}>
      {({ data: { blog } }) => {
        const imageUrl =
          process.env.NODE_ENV !== "development"
            ? blog.headImage.url
            : process.env.API_URL + blog.headImage.url;

        return (
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
                  >_{blog.title}
                </li>
              </ol>
            </nav>
            <div className="animate__animated animate__fadeIn animate__slow">
              <img
                className="img-fluid border border-info mb-3"
                src={imageUrl}
                alt={blog.headImage.url}
                height="200"
              />
              <div className="d-flex flex-row justify-content-between">
                <h1>{blog.title}</h1>
                <div>
                  <p className="small text-muted text-right">
                    By {blog.createdBy}
                  </p>
                  <p className="small text-muted text-right">
                    {blog.creationdate}
                  </p>
                </div>
              </div>
              <div className="d-flex flex-row pb-2">
                {blog.categories.map((c, i) => (
                  <p key={i} className="small pr-1 text-muted">
                    #{c.name}
                  </p>
                ))}
              </div>
              <ReactMarkdown source={blog.description} />
              <img
                className="img-fluid mt-4"
                src={
                  process.env.NODE_ENV !== "development"
                    ? blog.images[0].url
                    : process.env.API_URL + blog.images[0].url
                }
                alt={blog.images[0].url}
                height="200"
              />
              <p className="small text-muted">
                <em>{blog.images[0].caption}</em>
              </p>
              <ReactMarkdown className="mt-4" source={blog.content} />
              <div className="mt-4 row row-cols-1 row-cols-md-2">
                {blog.images.map((m, i) => (
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
                {blog.videos.map((m, i) => (
                  <div className="pb-2" key={i}>
                    <video controls className="mb-2 pl-1 img-fluid">
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
        );
      }}
    </Query>
  );
};

export default Article;

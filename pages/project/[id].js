import React from "react";
import { getProjects, getProject } from "../../lib/api";
import Layout from "../../components/layout";
import ReactMarkdown from "react-markdown";

const Project = ({ project }) => {
  const imageUrl =
    process.env.NODE_ENV !== "development"
      ? project.headImage.url
      : process.env.API_URL + project.headImage.url;

  return (
    <Layout>
      <div className="container animate__animated animate__fadeIn">
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
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb small pt-4">
            <li className="breadcrumb-item active">
              <a href="/projects">Projects</a>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              >_{project.title}
            </li>
          </ol>
        </nav>
        <div className="animate__animated animate__fadeIn animate__slow">
          <img
            className="img-fluid border border-secondary mb-3"
            src={imageUrl}
            alt={project.headImage.url}
            height="200"
          />
          <div className="d-flex flex-row justify-content-between">
            <h1>{project.title}</h1>
            <p className="small text-muted text-right align-self-center">
              {project.creationDate}
            </p>
          </div>
          <div className="d-flex flex-row pb-2">
            {project.categories.map((c, i) => (
              <p key={i} className="small pr-1 text-muted">
                #{c.name}
              </p>
            ))}
          </div>
          <ReactMarkdown className="line-break" source={project.bio} />
          {project.link && (
            <p className="mt-2 ">
              <em>
                Go have a look{" "}
                <a href={project.link} target="blank">
                  <u className="highlights">here</u>.
                </a>
              </em>
            </p>
          )}

          <div className="mt-4">
            <h2>> team</h2>
            <ReactMarkdown className="line-break" source={project.team} />
          </div>
          <div className="mt-4">
            <h2>> tools</h2>
            <p>{project.tools}</p>
          </div>
          {project.images.length > 0 && (
            <>
              <img
                className="img-fluid mt-4"
                src={
                  process.env.NODE_ENV !== "development"
                    ? project.images[0].url
                    : process.env.API_URL + project.images[0].url
                }
                alt={project.images[0].url}
                height="200"
              />
              <p className="small text-muted">
                <em>{project.images[0].caption}</em>
              </p>
            </>
          )}

          <div className="mt-4">
            <h2>> the brief</h2>
            <ReactMarkdown className="line-break" source={project.briefing} />
          </div>
          {project.images.length > 1 && (
            <>
              <img
                className="img-fluid mt-4"
                src={
                  process.env.NODE_ENV !== "development"
                    ? project.images[1].url
                    : process.env.API_URL + project.images[1].url
                }
                alt={project.headImage.url}
                height="200"
              />
              <p className="small text-muted">
                <em>{project.images[1].caption}</em>
              </p>
            </>
          )}

          <div className="mt-4">
            <h2>> the solution</h2>
            <ReactMarkdown className="line-break" source={project.goal} />
          </div>
          <div className="mt-4 row row-cols-1 row-cols-md-2">
            {project.vids.length > 0 &&
              project.vids.map((m, i) => (
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
                  </video>
                  <p className="small text-muted">
                    <em>{m.caption}</em>
                  </p>
                </div>
              ))}
            {project.images.length > 0 &&
              project.images.map((m, i) => (
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
                    className="mb-2 pl-1 img-fluid "
                  />
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
  const projects = (await getProjects()) || [];
  return {
    paths: projects.map(project => ({
      params: {
        id: project.id
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const project = (await getProject(params.id)) || [];

  return {
    props: { project },
    revalidate: 1
  };
}

export default Project;

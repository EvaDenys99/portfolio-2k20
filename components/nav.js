import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="navbar sticky-top navbar-expand">
        <a className="navbar-brand" href="/">
          <svg
            width="1.4em"
            height="1.4em"
            viewBox="0 0 24 24"
            className="navbar-brand-logo"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="New-Officieel"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="mobile-home"
                transform="translate(-16.000000, -16.000000)"
                fillRule="nonzero"
              >
                <g id="Group" transform="translate(16.000000, 16.000000)">
                  <g id="logo" transform="translate(0.000000, 0.000000)">
                    <polygon
                      id="Path"
                      fill={
                        router.route === "/blog" ||
                        router.route === "/article/[id]"
                          ? "#403f3f"
                          : "#F8F8FF"
                      }
                      points="5.05107692 3.60737081e-14 5.05107692 1.31261538 1.58169231 1.31261538 1.58169231 15.144 5.07046154 15.144 5.07046154 16.4570769 -2.86949951e-14 16.4570769 -2.86949951e-14 3.60737081e-14"
                    ></polygon>
                    <polygon
                      id="Path"
                      fill={
                        router.route === "/blog" ||
                        router.route === "/article/[id]"
                          ? "#403f3f"
                          : "#F8F8FF"
                      }
                      points="18.9424615 16.4570769 18.9424615 15.144 22.4118462 15.144 22.4118462 1.31307692 18.9230769 1.31307692 18.9230769 0 23.9958462 0 23.9958462 16.4570769"
                    ></polygon>
                    <path
                      d="M8.96030753,15.8224615 C8.96336082,15.4337089 9.28044251,15.1207474 9.66920179,15.122769 C10.0579611,15.1248103 10.3717548,15.4410684 10.3707475,15.8298317 C10.3697354,16.218595 10.0543031,16.5332308 9.66553846,16.5332308 C9.27505042,16.5304398 8.96004398,16.2129595 8.96030753,15.8224615 L8.96030753,15.8224615 Z"
                      id="Path"
                      fill={
                        router.route === "/blog" ||
                        router.route === "/article/[id]"
                          ? "#951d4d"
                          : "#6DECB9"
                      }
                    ></path>
                    <path
                      d="M11.3584609,15.8169231 C11.3617686,15.4282331 11.6789605,15.1155036 12.0676583,15.1176921 C12.4563561,15.1199036 12.7699877,15.4362036 12.7688976,15.8249061 C12.7678018,16.2136086 12.4523964,16.5281538 12.0636923,16.5281538 C11.6730241,16.5253618 11.3579439,16.2076009 11.3584609,15.8169231 Z"
                      id="Path"
                      fill={
                        router.route === "/blog" ||
                        router.route === "/article/[id]"
                          ? "#951d4d"
                          : "#6DECB9"
                      }
                    ></path>
                    <path
                      d="M13.753846,15.8224615 C13.7568993,15.4337089 14.073981,15.1207474 14.4627403,15.122769 C14.8514995,15.1248103 15.1652933,15.4410684 15.164286,15.8298317 C15.1632738,16.218595 14.8478415,16.5332308 14.4590769,16.5332308 C14.0685889,16.5304398 13.7535824,16.2129595 13.753846,15.8224615 L13.753846,15.8224615 Z"
                      id="Path"
                      fill={
                        router.route === "/blog" ||
                        router.route === "/article/[id]"
                          ? "#951d4d"
                          : "#6DECB9"
                      }
                    ></path>
                    <polygon
                      id="Path"
                      fill={
                        router.route === "/blog" ||
                        router.route === "/article/[id]"
                          ? "#951d4d"
                          : "#6DECB9"
                      }
                      points="13.986 8.95569231 15.6636923 8.96030769 15.6549231 1.34123077 17.8744615 1.32738462 17.8744615 0.000461538462 13.9883077 0.036"
                    ></polygon>
                    <polygon
                      id="Path"
                      fill={
                        router.route === "/blog" ||
                        router.route === "/article/[id]"
                          ? "#951d4d"
                          : "#6DECB9"
                      }
                      points="15.7015385 15.1596923 15.7038462 16.4524615 17.8864615 16.4635385 17.8924615 15.1573846"
                    ></polygon>
                    <path
                      d="M6.25523077,15.1795385 L6.25523077,16.4935385 L8.42076923,16.4935385 L8.42076923,15.1707692 C8.42076923,15.1707692 6.25523077,15.1647692 6.25523077,15.1795385 Z"
                      id="Path"
                      fill={
                        router.route === "/blog" ||
                        router.route === "/article/[id]"
                          ? "#951d4d"
                          : "#6DECB9"
                      }
                    ></path>
                    <path
                      d="M5.17338462,7.19676923 L5.17338462,8.96307692 L11.2010769,8.96307692 L11.2010769,7.2 C11.2010769,7.2 5.17338462,7.17461538 5.17338462,7.19676923 Z"
                      id="Path"
                      fill={
                        router.route === "/blog" ||
                        router.route === "/article/[id]"
                          ? "#951d4d"
                          : "#6DECB9"
                      }
                    ></path>
                    <rect
                      id="Rectangle"
                      fill={
                        router.route === "/blog" ||
                        router.route === "/article/[id]"
                          ? "#951d4d"
                          : "#6DECB9"
                      }
                      x="6.23492308"
                      y="0.0378461538"
                      width="5.328"
                      height="1.32415385"
                    ></rect>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          {!menuOpen && (
            <span className="navbar-brand-text small">
              >_<span className="highlights">E</span>va{" "}
              <span className="highlights">D</span>enys
            </span>
          )}
        </a>
        <div className="mr-auto"></div>
        <ul className="navbar-nav">
          {menuOpen ? (
            <li
              className="nav-item nav-item-responsive"
              onClick={() => setMenuOpen(false)}
            >
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                className="bi bi-x"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </li>
          ) : (
            <li
              className="nav-item nav-item-responsive"
              onClick={() => setMenuOpen(true)}
            >
              <svg
                width="1.5em"
                height="1.5em"
                viewBox="0 0 16 16"
                className="bi bi-text-right"
                fill={
                  router.route === "/blog" || router.route === "/article/[id]"
                    ? "#403f3f"
                    : "#f8f8ff"
                }
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 12.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-4-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </li>
          )}

          <li
            className={
              router.route === "/"
                ? "nav-item nav-item-big nav-item-active thick"
                : "nav-item nav-item-big"
            }
          >
            <a className="nav-link" href="/">
              {router.route === "/" ? "> Home" : "Home"}
            </a>
          </li>
          <li
            className={
              router.route === "/projects" || router.route === "/project/[id]"
                ? "nav-item nav-item-big nav-item-active thick"
                : "nav-item nav-item-big"
            }
          >
            <a className="nav-link" href="/projects">
              {router.route === "/projects" || router.route === "/project/[id]"
                ? "> Projects"
                : "Projects"}
            </a>
          </li>
          <li
            className={
              router.route === "/blog" || router.route === "/article/[id]"
                ? "nav-item nav-item-big nav-item-active thick"
                : "nav-item nav-item-big"
            }
          >
            <a className="nav-link" href="/blog">
              {router.route === "/blog" || router.route === "/article/[id]"
                ? "> Blog"
                : "Blog"}
            </a>
          </li>
        </ul>
      </nav>
      {menuOpen && (
        <ul className="overlay-menu navbar-nav">
          <div className="overlay-items">
            <li
              className={
                router.route === "/"
                  ? "nav-item nav-item-active thick animate__animated animate__fadeInRight animate__faster"
                  : "nav-item animate__animated animate__fadeInRight"
              }
            >
              <a className="nav-link" href="/">
                {router.route === "/" ? "> Home" : "Home"}
              </a>
            </li>
            <li
              className={
                router.route === "/projects" || router.route === "/project/[id]"
                  ? "nav-item overlay-item nav-item-active thick animate__animated animate__fadeInRight"
                  : "nav-item overlay-item animate__animated animate__fadeInRight"
              }
            >
              <a className="nav-link" href="/projects">
                {router.route === "/projects" ||
                router.route === "/project/[id]"
                  ? "> Projects"
                  : "Projects"}
              </a>
            </li>
            <li
              className={
                router.route === "/blog" || router.route === "/article/[id]"
                  ? "nav-item overlay-item nav-item-active thick animate__animated animate__fadeInRight animate__slow"
                  : "nav-item overlay-item animate__animated animate__fadeInRight animate__slow"
              }
            >
              <a className="nav-link" href="/blog">
                {router.route === "/blog" || router.route === "/article/[id]"
                  ? "> Blog"
                  : "Blog"}
              </a>
            </li>
          </div>
        </ul>
      )}
    </>
  );
}

export default Nav;

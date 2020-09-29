import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Filters = ({ tags }) => {
  const router = useRouter();

  return (
    <>
      <ul className="mt-5 filters">
        <li
          className={
            router.route === "/projects" || router.route === "/blog"
              ? "badge badge-pill mr-3 badge-outlined-active"
              : "badge badge-pill mr-3 badge-outlined"
          }
        >
          <Link
            href={{
              pathname:
                router.route === "/projects" ||
                router.route === "/projects/[id]"
                  ? "/projects"
                  : "/blog"
            }}
          >
            <a className="p-2">
              {router.route === "/projects" || router.route === "/projects/[id]"
                ? "#All projects"
                : "#All blogposts"}
            </a>
          </Link>
        </li>
        {tags.map((tag, i) => {
          return (
            <li
              key={tag.id}
              className={
                router.query.id === tag.id
                  ? "badge badge-pill mr-3 badge-outlined-active"
                  : "badge badge-pill mr-3 badge-outlined"
              }
            >
              <Link
                as={
                  router.route === "/projects" ||
                  router.route === "/projects/[id]"
                    ? `/projects/${tag.id}`
                    : `/blog/${tag.id}`
                }
                href={{
                  pathname:
                    router.route === "/projects" ||
                    router.route === "/projects/[id]"
                      ? "/projects/[id]"
                      : "/blog/[id]"
                }}
              >
                <a className="p-2">#{tag.name}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="w-5 pr-2 text-muted d-flex flex-row flex-row-reverse swipe-icon">
        <svg
          width="1.3rem"
          height="1.3rem"
          viewBox="0 0 16 16"
          className="bi bi-hand-index animate__animated animate__slideOutLeft animate__slower animate__infinite"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6.75 1a.75.75 0 0 0-.75.75V9a.5.5 0 0 1-1 0v-.89l-1.003.2a.5.5 0 0 0-.399.546l.345 3.105a1.5 1.5 0 0 0 .243.666l1.433 2.15a.5.5 0 0 0 .416.223h6.385a.5.5 0 0 0 .434-.252l1.395-2.442a2.5 2.5 0 0 0 .317-.991l.272-2.715a1 1 0 0 0-.995-1.1H13.5v1a.5.5 0 0 1-1 0V7.154a4.208 4.208 0 0 0-.2-.26c-.187-.222-.368-.383-.486-.43-.124-.05-.392-.063-.708-.039a4.844 4.844 0 0 0-.106.01V8a.5.5 0 0 1-1 0V5.986c0-.167-.073-.272-.15-.314a1.657 1.657 0 0 0-.448-.182c-.179-.035-.5-.04-.816-.027l-.086.004V8a.5.5 0 0 1-1 0V1.75A.75.75 0 0 0 6.75 1zM8.5 4.466V1.75a1.75 1.75 0 0 0-3.5 0v5.34l-1.199.24a1.5 1.5 0 0 0-1.197 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.272-2.715a2 2 0 0 0-1.99-2.199h-.582a5.184 5.184 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.634 2.634 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002zm2.094 2.025z"
          />
        </svg>
        <p className="small pr-4">Swipe</p>
      </div>
    </>
  );
};

export default Filters;

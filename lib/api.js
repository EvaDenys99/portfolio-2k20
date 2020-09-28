async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(
    `${process.env.API_URL ||
      "https://portfolio-backend-strapi.herokuapp.com"}/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query,
        variables
      })
    }
  );

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getProjects() {
  const data = await fetchAPI(`query Projects {
        projects {
          id
          title
          creationDate
          headImage {
            url
          }
          categories {
            id
            name
          }
        }
      }`);
  return data.projects;
}

export async function getProject(id) {
  const data = await fetchAPI(
    `query Projects($id: ID!) {
        project(id: $id) {
          id
          title
          bio
          creationDate
          headImage {
            url
            caption
          }
          images {
            url
            caption
          }
          vids {
            url
            caption
          }
          categories {
            id
            name
          }
          team
          client
          tools
          link
          briefing
          goal
          download {
            url
            name
          }
        }
      }`,
    { variables: { id } }
  );
  return data.project;
}

export async function getArticles() {
  const data = await fetchAPI(`query Blogs {
        blogs {
          id
          title
          creationdate
          description
          headImage {
            url
          }
          categories {
            id
            name
          }
        }
      }`);
  return data.blogs;
}

export async function getArticle(id) {
  const data = await fetchAPI(
    `query Blogs($id: ID!) {
        blog(id: $id) {
          id
          title
          content
          creationdate
          headImage {
            url
            caption
          }
          images {
            url
            caption
          }
          videos {
            url
            caption
          }
          categories {
            id
            name
          }
          createdBy
          description
        }
      }`,
    { variables: { id } }
  );
  return data.blog;
}

export async function getCategories() {
  const data = await fetchAPI(`query Categories {
      categories {
        id
        name
      }
    }`);
  return data.categories;
}

export async function getCategoryProjects(id) {
  const data = await fetchAPI(
    `query Category($id: ID!) {
        category(id: $id) {
          name
          projects {
            id
            title
            creationDate
            headImage {
              url
            }
            categories {
              id
              name
            }
          }
        }
      }`,
    { variables: { id } }
  );
  return data.category.projects;
}

export async function getCategoryArticles(id) {
  const data = await fetchAPI(
    `query Category($id: ID!) {
        category(id: $id) {
          name
          blogs {
            id
            title
            creationdate
            description
            headImage {
              url
            }
            categories {
              id
              name
            }
          }
        }
      }`,
    { variables: { id } }
  );
  return data.category.blogs;
}

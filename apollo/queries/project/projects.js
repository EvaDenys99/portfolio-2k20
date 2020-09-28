import gql from "graphql-tag";

const PROJECTS_QUERY = gql`
  query Projects {
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
`;

export default PROJECTS_QUERY;

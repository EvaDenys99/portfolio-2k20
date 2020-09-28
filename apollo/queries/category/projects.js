import gql from "graphql-tag";

const CATEGORY_PROJECTS_QUERY = gql`
  query Category($id: ID!) {
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
  }
`;

export default CATEGORY_PROJECTS_QUERY;

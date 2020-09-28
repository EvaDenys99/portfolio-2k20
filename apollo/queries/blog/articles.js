import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  query Blogs {
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
`;

export default ARTICLES_QUERY;

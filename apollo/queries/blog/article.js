import gql from "graphql-tag";

const ARTICLE_QUERY = gql`
  query Blogs($id: ID!) {
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
  }
`;

export default ARTICLE_QUERY;

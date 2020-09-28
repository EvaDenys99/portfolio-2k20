import gql from "graphql-tag";

const PROJECT_QUERY = gql`
  query Projects($id: ID!) {
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
  }
`;

export default PROJECT_QUERY;

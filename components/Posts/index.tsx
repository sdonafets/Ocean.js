import { useQuery } from "@apollo/client";
import { Card } from "antd";
import { gql } from "apollo-server-micro";
import { Key } from "react";

const AllPostsQuery = gql`
  {
    posts {
      id
      title
      description
      image
      path
    }
  }
`;

const Posts = ({ className }) => {
  const { loading, error, data } = useQuery(AllPostsQuery);

  if (loading || error) {
    return null;
  }

  return (
    <div className={className}>
      {data.posts.map((p: any, idx: Key) => (
        <Card key={idx} title={p.title}>
          {p.description}
        </Card>
      ))}
    </div>
  );
};

export default Posts;

import ReactionButtons from "./ReactionButtons";
import Time from "./Time";
import PostAuthor from "./PostAuthor";

import React from "react";

const Posts = ({ post }) => {
  const myStyle = {
    color: "black",
    padding: "20px",
    margin: "50px",
    textAlign: "center",
    justifyContent: "center",
  };
  return (
    <article style={myStyle}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <Time timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
      <hr />
    </article>
  );
};

export default Posts;

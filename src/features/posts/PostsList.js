import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
  const myStyle = {
    color: "black",
    padding: "20px",
    margin: "50px",
    textAlign: "center",
    justifyContent: "center",
  };
  // Retrieve the posts of that state.
  const posts = useSelector(selectAllPosts);

  //Map each posts that are available.
  const renderedPosts = posts.map((post) => (
    <article key={post.id} style={myStyle}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <hr />
    </article>
  ));

  return (
    <div>
      <h2 style={{ color: "gray" }}>All available posts !</h2>
      {renderedPosts}
    </div>
  );
};

export default PostsList;

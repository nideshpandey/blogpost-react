import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { selectAllPosts } from "./postsSlice";
import ReactionButtons from "./ReactionButtons";
import Time from "./Time";

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

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  //Map each posts that are available.
  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id} style={myStyle}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <p>
        <PostAuthor userId={post.userId} />
        <Time timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
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

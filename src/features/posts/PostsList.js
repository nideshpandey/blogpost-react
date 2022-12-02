import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Posts from "./Posts";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchAllPosts,
} from "./postsSlice";

const PostsList = () => {
  const dispatch = useDispatch();

  // Retrieve the posts of that state.
  const posts = useSelector(selectAllPosts);
  const status = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);


  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAllPosts());
    }
  }, [status, dispatch]);

  let content;
  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => <Posts key={post.id} post={post} />);
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }
  return (
    <div>
      <h2 style={{ color: "gray" }}>All available posts !</h2>
      {content}
    </div>
  );
};

export default PostsList;

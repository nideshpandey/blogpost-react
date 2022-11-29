import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postsSlice";

const AddPostForm = () => {
  const myStyle = {
    justifyContent: "right",
  };
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescChange = (e) => setDescription(e.target.value);

  const onClickedPost = (e) => {
    e.preventDefault();
    if (title && description) {
      dispatch(addPost(title, description));
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div style={myStyle}>
      <h3>Add Posts</h3>
      <form>
        <label htmlFor="postTitle" value={title} onChange={onTitleChange}>
          Title:
          <input type="text" name="postTitle" />
        </label>
        <label htmlFor="postDescription">
          Description:
          <textarea
            name="postDescription"
            value={description}
            onChange={onDescChange}
          ></textarea>
        </label>
        <button onClick={onClickedPost}>Post</button>
      </form>
    </div>
  );
};

export default AddPostForm;

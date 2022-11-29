import React from "react";
import { useState } from "react";

const AddPostForm = () => {
  const myStyle = {
    justifyContent: "right",

  };
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescChange = (e) => setDescription(e.target.value);

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
        <button>Post</button>
      </form>
    </div>
  );
};

export default AddPostForm;

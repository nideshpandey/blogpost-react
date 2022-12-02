import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { addPost } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onDescChange = (e) => setDescription(e.target.value);
  const onUserChange = (e) => setUserId(e.target.value);

  const onSave = Boolean(title) && Boolean(description) && Boolean(userId);

  const onClickedPost = (e) => {
    e.preventDefault();
    if (title && description) {
      dispatch(addPost(title, description, userId));
      setTitle("");
      setDescription("");
    }
  };

  const selectOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <div>
      <h3>Add Posts</h3>
      <form>
        <label htmlFor="userName">
          Author:
          <select name="userName" value={userId} onChange={onUserChange}>
            <option value=""></option>
            {selectOptions}
          </select>
        </label>
        <label htmlFor="postTitle">
          Title:
          <input
            type="text"
            name="postTitle"
            value={title}
            onChange={onTitleChange}
          />
        </label>
        <label htmlFor="postDescription">
          Description:
          <textarea
            name="postDescription"
            value={description}
            onChange={onDescChange}
          ></textarea>
        </label>
        <button disabled={!onSave} onClick={onClickedPost}>
          Post
        </button>
      </form>
    </div>
  );
};

export default AddPostForm;

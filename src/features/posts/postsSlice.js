import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, title: "New", description: "New description" },
  { id: 2, title: "New2", description: "New description2" },
];

// Creating a slice which holds the logic in the reducers
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, description) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;

import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "1",
    title: "New",
    description: "New description",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      like: 0,
      love: 0,
      dislike: 0,
    },
  },
  {
    id: "2",
    title: "New2",
    description: "New description2",
    date: sub(new Date(), { minutes: 20 }).toISOString(),
    reactions: {
      like: 0,
      love: 0,
      dislike: 0,
    },
  },
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
      prepare(title, description, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            userId,
            date: new Date().toISOString(),
            reactions: {
              like: 0,
              love: 0,
              dislike: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { addPost, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {'id': 1, 'title':'New', 'description':'New description'},
    {'id': 2, 'title':'New2', 'description':'New description2'},
]

// Creating a slice which holds the logic in the reducers
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{

    }
})

export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;
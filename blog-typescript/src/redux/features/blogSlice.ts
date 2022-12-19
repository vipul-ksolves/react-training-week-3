import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Blog {
  id: any | null;
  title: string;
  image: string;
  body: string;
  publishedAt: number;
  category: string;
  isSponsored: boolean;
}

type InitialStateValue = {
  allBlogs: Blog[];
  loading: boolean;
  error: string | undefined;
  blogDetails: null | Blog;
  filteredBlog: Blog[];
};
const initialStateValue: InitialStateValue = {
  allBlogs: [],

  loading: false,

  error: "",

  blogDetails: null,

  filteredBlog: [],
};

//getSingleBlog
export const getBlog = createAsyncThunk("blog/getBlog", async (id) => {
  const res = await fetch(`http://localhost:3333/allBlogs/${id}`).then((data) =>
    data.json()
  );
  return res;
});

//allBlogs
export const getAllBlog = createAsyncThunk("blog/getAllBlog", async () => {
  try {
    const res = await axios.get("http://localhost:3333/allBlogs");
    console.log(res.data);
    return res.data;
  } catch (error: any | null) {
    console.log(error.message);
  }
});

//delete
let deleteItem = 0;
export const deleteBlog = createAsyncThunk(
  "blog/deleteBlog",
  async (id: number) => {
    deleteItem = id;
    const res = await fetch(`http://localhost:3333/allBlogs/${id}`, {
      method: "DELETE",
    }).then((data) => data.json());
    return res;
  }
);

// createBlog
export const createBlog = createAsyncThunk("createBlog", async (data: Blog) => {
  return fetch("http://localhost:3333/allBlogs", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: data.id,
      title: data.title,
      image: data.image,
      body: data.body,
      publishedAt: data.publishedAt,
      category: data.category,
      isSponsored: data.isSponsored,
    }),
  }).then((data) => data.json());
});

// editBlog
export const editBlog = createAsyncThunk("editBlog", async (data: Blog) => {
  console.log(data);
  // console.log(id);
  return fetch(`http://localhost:3333/allBlogs/${data.id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      id: data.id,
      title: data.title,
      image: data.image,
      body: data.body,
      publishedAt: data.publishedAt,
      category: data.category,
      isSponsored: data.isSponsored,
    }),
  }).then((data) => data.json());
});

const blogSlice = createSlice({
  name: "blog",
  initialState: initialStateValue,
  reducers: {
    filterBlog: (state, action) => {
      console.log(action.payload);
      state.filteredBlog = state.allBlogs.filter(
        (card) => card.category == `${action.payload}`
      );
    },
  },
  extraReducers: {
    [getAllBlog.pending.type]: (state) => {
      state.loading = true;
    },
    [getAllBlog.fulfilled.type]: (state, action: PayloadAction<Blog[]>) => {
      state.loading = false;
      state.allBlogs = action.payload;
    },
    [getAllBlog.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    //getSingleBlog
    [getBlog.pending.type]: (state) => {
      state.loading = true;
    },
    [getBlog.fulfilled.type]: (state, action: PayloadAction<Blog>) => {
      state.loading = false;
      state.blogDetails = action.payload;
    },
    [getBlog.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delate
    [deleteBlog.pending.type]: (state) => {
      state.loading = true;
    },
    [deleteBlog.fulfilled.type]: (state) => {
      state.loading = false;
      state.allBlogs = state.allBlogs.filter((card) => card.id !== deleteItem);
    },
    [deleteBlog.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // create
    [createBlog.pending.type]: (state) => {
      state.loading = true;
    },
    [createBlog.fulfilled.type]: (state, action: PayloadAction) => {
      state.loading = false;
      // state.allBlogs = state.allBlogs.filter((card) => card.id !== idItem);
      // console.log(action.payload);
    },
    [createBlog.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // edit
    [editBlog.pending.type]: (state) => {
      state.loading = true;
    },
    [editBlog.fulfilled.type]: (state, action: PayloadAction) => {
      state.loading = false;
    },
    [editBlog.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterBlog } = blogSlice.actions;

export default blogSlice.reducer;

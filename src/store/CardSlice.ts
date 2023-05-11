import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCard: any = createAsyncThunk(
  "Card/fetchCard",
  async function (_, { rejectWithValue }) {
    try {
      const res = await fetch("./data.json", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Server Error!");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
const CardSlice = createSlice({
  name: "Card",
  initialState: {
    cards: [],
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCard.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(fetchCard.fulfilled, (state, action) => {
      state.cards = action.payload;

      state.loading = false;
    });
    builder.addCase(fetchCard.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export default CardSlice.reducer;

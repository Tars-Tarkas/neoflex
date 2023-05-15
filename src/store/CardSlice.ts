import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ICard } from "../types/card";

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
    shopCards: [],
    loading: false,
    error: "",
  } as ICard,
  reducers: {
    addShopList(state, action) {
      state.shopCards = [action.payload, ...state.shopCards];
      console.log(state.shopCards);
    },
    removeShopList(state, action) {
      state.shopCards = state.shopCards.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
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

export const { addShopList, removeShopList } = CardSlice.actions;

export default CardSlice.reducer;

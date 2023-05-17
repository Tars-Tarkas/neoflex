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
      const itemInCard = state.shopCards.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCard) {
        itemInCard.count++;
      } else {
        state.shopCards.push({ ...action.payload, count: 1 });
      }
      // state.shopCards = [action.payload, ...state.shopCards];
      // state.shopCards = [action.payload, ...state.shopCards];
    },
    removeShopItem(state, action) {
      state.shopCards = state.shopCards.filter(
        (item) => item.id !== action.payload.id
      );
    },
    increment(state, action) {
      const item = state.shopCards.find(
        (item) => item.id === action.payload.id
      )!;
      item.count++;
    },
    decrement(state, action) {
      const item = state.shopCards.find(
        (item) => item.id === action.payload.id
      )!;
      if (item.count === 1) {
        item.count = 1;
      } else {
        item.count--;
      }
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

export const { addShopList, removeShopItem, increment, decrement } =
  CardSlice.actions;

export default CardSlice.reducer;

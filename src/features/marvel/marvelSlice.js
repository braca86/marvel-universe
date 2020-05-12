import { createSlice } from "@reduxjs/toolkit";

export const marvelSlice = createSlice({
  name: "marvel",
  initialState: {
    charactersData: [],
    loading: true,
  },
  reducers: {
    setCharactersData: (state, action) => {
      state.charactersData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setCharactersData, setLoading } = marvelSlice.actions;

//thunk
export const fetchData = () => async (dispatch) => {
  const response = await fetch(
    "http://gateway.marvel.com/v1/public/characters?apikey=d1e425386fa5905d035fcbc1e513e1dd&nameStartsWith=iron%man"
  );
  const data = await response.json();
  console.log(data.data.results);
  dispatch(setCharactersData(data.data.results));
  dispatch(setLoading(false));
};

//selector
export const charactersData = (state) => state.marvel.charactersData;
export const loading = (state) => state.marvel.loading;

export default marvelSlice.reducer;

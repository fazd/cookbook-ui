import { createSlice } from '@reduxjs/toolkit';

export const loginSlides = createSlice({
   name: 'login',
   initialState: {
    isLogged: false,
    user: null,
   },
   reducers: {
      logged: (state) => {
         state.isLogged = true;
      },
      logout: (state) => {
        state.isLogged = false;
      },
      setUser: (state, actions) => {
         state.user = actions.payload;
      }
   },
});

export const { logged, logout, setUser } = loginSlides.actions;

export default loginSlides.reducer;
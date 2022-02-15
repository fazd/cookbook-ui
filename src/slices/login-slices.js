import { createSlice } from '@reduxjs/toolkit';

export const loginSlides = createSlice({
   name: 'login',
   initialState: {
    isLogged: false
   },
   reducers: {
      logged: (state) => {
         state.isLogged = true;
      },
      logout: (state) => {
        state.isLogged = false;
      }
   },
});

export const { logged } = loginSlides.actions;

export default loginSlides.reducer;
import { configureStore } from '@reduxjs/toolkit';
import loginSlices from '../slices/login-slices';

export default configureStore({
   reducer: {
      login: loginSlices,
   },
});
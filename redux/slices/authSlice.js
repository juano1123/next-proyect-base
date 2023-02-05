import { createSlice } from '@reduxjs/toolkit';
import { userLogin } from '../actions/authActions';

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers:  (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.data;
      })
      .addCase(userLogin.pending, state => {
        state.loading = true;
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        console.log(action.error.message);
      })
  },
})

export default authSlice.reducer
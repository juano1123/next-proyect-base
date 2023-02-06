import { createSlice } from '@reduxjs/toolkit';
import { userLogin } from '../actions/authActions';

const initialState = {
  loading: false,
  userInfo: null
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('userToken');
      state.userInfo = null;
    }
  },
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
        console.log(action.payload.response.data.message);
      })
  },
})

export const { logout } = authSlice.actions;

export default authSlice.reducer
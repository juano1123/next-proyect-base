import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const apiURL = process.env.NEXT_PUBLIC_API_URL;

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(`${apiURL}/users/login`,{ email, password }, config)
      const { remember_token } = data.data;
      // store user's token in local storage
      localStorage.setItem('userToken', remember_token)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
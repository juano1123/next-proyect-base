import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const apiURL = 'http://localhost:5000'

export const userLogin = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const { data } = await axios.post(
        `${apiURL}/users/login`,
        { email, password },
        config
      )
      // store user's token in local storage
      localStorage.setItem('userToken', data.remember_token)
      return data
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3005/usersss')
  return response.data
})

/* 
the three properties that are automatically added in:
  fetchUsers.pending === 'users/fetch/pending'
  fetchUsers.fulfilled === 'users/fetch/fulfilled'
  fetchUsers.rejected === 'users/fetch/rejected'
*/

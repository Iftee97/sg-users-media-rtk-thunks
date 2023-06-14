import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const deleteUser = createAsyncThunk('users/delete', async (user) => {
  await axios.delete(`http://localhost:3005/users/${user.id}`)
  return user.id
})

/*
the three properties that are automatically added in:
  deleteUser.pending === 'users/delete/pending'
  deleteUser.fulfilled === 'users/delete/fulfilled'
  deleteUser.rejected === 'users/delete/rejected'
*/

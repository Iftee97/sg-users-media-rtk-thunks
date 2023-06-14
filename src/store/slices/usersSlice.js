import { createSlice } from "@reduxjs/toolkit"
import { fetchUsers } from "../thunks/fetchUsers"
import { addUser } from "../thunks/addUser"
import { deleteUser } from "../thunks/deleteUser"

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    // 
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.data = action.payload
        state.isLoading = false
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error
        state.isLoading = false
      })

    builder
      .addCase(addUser.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.data.push(action.payload)
        state.isLoading = false
      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.error
        state.isLoading = false
      })

    builder
      .addCase(deleteUser.pending, (state, action) => {
        state.isLoading = true
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.data = state.data.filter((user) => user.id !== action.payload.id)
        state.isLoading = false
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.error
        state.isLoading = false
      })
  }
})

export const usersReducer = usersSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  usersDetail:{}
}

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUsersdetail: (state, action) => {
      state.usersDetail = action.payload.data
    },
    
  },
})

export const {
  setUsersdetail,
 
} = userSlice.actions

export default userSlice.reducer
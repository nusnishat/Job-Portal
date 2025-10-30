import { configureStore, createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice ({
    name : 'users',
    initialState: {},
    reducers: {}
})

const store = configureStore({
  reducer: {
    users: userSlice.reducer,
   }   // ✅ You can leave this empty if you'll add slices later
})

export default store

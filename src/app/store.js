import { configureStore } from '@reduxjs/toolkit'
import chatsSlice from "../features/chats/chatsSlice.js"

export default configureStore({
  reducer: {
    chats: chatsSlice
  },
})
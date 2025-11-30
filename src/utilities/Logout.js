import { clean } from "../features/chats/chatsSlice.js"

export default function Logout_Cleenar({packages}){
  const { dispatch, removeCookie } = packages
  
  window.localStorage.removeItem("jlc")
  removeCookie("jessengar_auth")
  dispatch(clean())
  
}
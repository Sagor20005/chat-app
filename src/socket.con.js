import { io } from 'socket.io-client';
import useParsedCookie from "./hooks/useParsedCookie.js"

export function ConnectSocket(){
  const URL = process.env.REACT_APP_API_URL
  const cookie = useParsedCookie()
  
  const socket = io(URL,{
  auth: {
    uid: cookie._id
  }
})

return socket
  
}
import useParsedCookie from "../../hooks/useParsedCookie.js"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { want_reload } from "../../features/chats/chatsSlice.js"

export default function User({ avatar, name, _id }){
  const api = process.env.REACT_APP_API_URL
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const data = useParsedCookie()
  const myId = data?._id
  
  const chatlist = useSelector(state => state.chats)
    
    
  // Check Is User connected To me 
  let isConnected = chatlist?.chats?.filter(chat => chat.user_id === _id)
  isConnected = isConnected ? isConnected.length > 0 : false
  const isChatBtn = isConnected || myId === _id ? false : true
  
  async function CreateChat(){
    if(!myId || !_id) return
    try{
      const response = await fetch(api+"/message/chat",{
        method: "POST",
        headers:{ "content-type":"application/json" },
        body: JSON.stringify({ members:[myId,_id] })
      })
      const result = await response.json()
      console.log(result)
      if(result.chat_id){
        dispatch(want_reload())
        Navigate("/")
      }
    }catch(err){
      console.log(err)
    }
    
  }
  
  return(
    <div className="flex items-center justify-between p-3 py-1 rounded-md">
      <div className="flex gap-4 items-center p-3">
        <img className="h-[35px] w-[35px] rounded-full object-cover" src={avatar.url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe7aH70ubSk8FPfa1NLXvIP_wWOVbueWEQkA&usqp=CAU"} alt={name} />
        <p>{name}</p>
      </div>
      { isChatBtn ? <button onClick={CreateChat} className="py-1 px-5 rounded-2xl bg-[#1a322f] text-white hover:bg-red-700">Chat</button> : <button className="py-1 px-5 rounded-2xl text-gray-200 text-sm hover:bg-red-900">Added</button> }
    </div>
    )
}
import { useParams } from "react-router-dom"
import TopBar from "../../../CastomElements/TopBar"
import { useSelector } from "react-redux"


export default function Info() {

    const { chat_id } = useParams()

    // Access the chat list state 
    const allChats = useSelector((state) => state.chats.chats)
    const [chat] = allChats.filter((chat) => chat.chat_id === chat_id)

    const avatar = chat?.user_avatar ? chat?.user_avatar : ""
    const name = chat?.user_name ? chat?.user_name : ""

    return (
        <>
            <div className="flex justify-center flex-col p-5">
                <TopBar text="Inbox" path={`/inbox/${chat_id}`} />
                {/* NAME AND AVATAR */}
                <div className="flex justify-between items-center flex-col gap-3 pt-3">
                    <img
                        src={avatar} alt="avatar"
                        className="h-[100px] w-[100px] rounded-full object-cover" />
                    <p className="text-2xl">{name}</p>
                </div>
            </div>
        </>
    )
}
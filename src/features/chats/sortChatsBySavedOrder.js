function sortChatBySAvedOrder(Chats){
    const LSorder = window.localStorage.getItem("jchat-order")
    const order = LSorder ? ( JSON.parse(LSorder) ) : null
    if(order && (order.length === Chats.length) && order.length){
        const OrderdChat = []
        for (const chat_id of order){
            const chat = Chats.find( c => c.chat_id === chat_id )
            OrderdChat.push(chat)
        }
        return OrderdChat
    }else{
        return Chats
    }
}

export default sortChatBySAvedOrder
function storeChatOrder(orderData) {
    try {
        // check data 
        const isValid = orderData ? (orderData.length ? (Array.isArray(orderData) ? true : false) : false) : false
        if (!isValid) return

        // castomize data create chat id array 
        const order = orderData.map(c => c.chat_id)

        // Store on localstorage 
        window.localStorage.setItem("jchat-order", JSON.stringify(order))

    } catch (err) {
        console.log(err.message)
    }
}

export default storeChatOrder
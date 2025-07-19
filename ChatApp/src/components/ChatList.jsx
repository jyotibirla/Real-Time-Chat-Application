import React from "react";
const ChatList =({chats})=>{
function SenderChat (message,username,jyoti){
    const user =localStorage.getItem('user')
    return(
        <div className='chat_sender'>
            <img src={jyoti} alt="" />
            <p>
                <strong>{username} </strong>
                {message}
            </p>
        </div>
    )
}
function ReceiverChat (message,username,jyoti){
    return(
        <div className='chat_receiver'>
        <img src={jyoti} alt="" />
            <p>
                <strong>{username} </strong>
                {message}
            </p>
        </div>
    )
}


    return(
        <div className="chats_list">
            {
                chats.map((chat,index)=>{
                if(chat.user === user){

                 return <SenderChat
                 key={index}
                 message = {chat.message}
                 username ={chat.username}
                 jyoti={chat.jyoti}
                 />
                }
                else{
                return <ReceiverChat
                 key={index}
                 message = {chat.message}
                 username ={chat.username}
                 jyoti={chat.jyoti}
                 />
                }
                })
            }
           
           
        </div>
    )
}
export default ChatList
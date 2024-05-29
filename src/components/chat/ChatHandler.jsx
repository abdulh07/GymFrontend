import { useState } from "react";
import Users from "./Users";
import ChatBox from "./ChatBox";



export default function ChatHandler() {
    const [selectedUserChat, setSelectedUserChat] = useState("");

       
   
  return (
    <div className='w-[100%] md:flex gap-x-4 px-3 max-w-[1640px] mx-auto  mt-28'>
    <div className='w-[100%] md:w-[40%] lg:w-[35%]'>
      <Users selectedUserChat={selectedUserChat} setSelectedUserChat={setSelectedUserChat}  />
    </div>
    <div className='w-[100%] md:w-[70%] lg:w-[90%]'>
      <ChatBox selectedUserChat={selectedUserChat} setSelectedUserChat={setSelectedUserChat}  />
    </div>

  </div>
  )
}


  import React, { useContext, useEffect, useRef, useState } from 'react';
import { GoDotFill } from "react-icons/go";
import { IoIosSend } from "react-icons/io";
  // import { FaRegUser } from "react-icons/fa";
  import { ImSpinner8 } from "react-icons/im";
import { IoMdArrowBack } from "react-icons/io";
import { AuthContex } from '../../Context/UserContext';
import Message from './Message';
import Response from './Response';


  


  export default function ChatBox({selectedUserChat}) {
    const { user } = useContext(AuthContex);


    
    const [loader,setLoader]=useState(false)
    const [userMessage, setUserMessage] = useState('');
    const messagesEndRef = useRef(null);


    const [messages, setMessages] = useState([]);
    const messagesRef = useRef(messages);

    // const handleBackUserName =  ()=>{
    //   setShowUserName(true)
    // }

    

   const GetHistory = async (chatID)=>{

    try {
      const response = await fetch(`http://localhost:5000/api/v1/user/gethistory/${chatID}`);

      if (response.ok) {
        const result = await response.json();
        const res=  result.details
        if (res.length !== messages.length) {
        setMessages(res);}
       
    }} catch (error) {
      console.error('Error:', error);
    }
   }
    const handleSubmit = async (event) => {
      event.preventDefault();

      const message=userMessage
        const payload={
          chatID:selectedUserChat._id,
          type:user.role,
          message,
          userID:user._id,
      }
      setUserMessage("")
      try {
        const response = await fetch(`http://localhost:5000/api/v1/user/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'  // This line is crucial
          },
          body:  JSON.stringify( payload),
         
        });
  
        if (response.ok) {
          const result = await response.json();
          const res=  result.details
          setMessages((pre) => [...pre, res]);
         
      }} catch (error) {
        console.error('Error:', error);
      }
     
    };
  


    useEffect(() => {
      messagesRef.current = messages;
    }, [messages]);

   
  
   
   
    
    // const scrollToBottom = () => {
    //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    // }
    // useEffect(() => {
    //   scrollToBottom();
      
    // }, [messages]);

    useEffect(() => {
 
  
      if (selectedUserChat._id) {
     setUserMessage([])
      GetHistory(selectedUserChat._id);  
      setLoader(false)
        const intervalId = setInterval(() => {
          GetHistory(selectedUserChat._id);
        }, 5000);
          return () => clearInterval(intervalId);
      }
    }, [selectedUserChat]);

    return (
      <>
     
     
      <div className='p-4 md:flex flex-col justify-between h-[85vh] my-3 border rounded-lg bg-white ' >
        {/* Header div */}
        {!selectedUserChat._id?<div className='flex justify-center place-items-center h-full'>Select User to start chat!</div>:
        <>
        <div className='flex justify-between border-b pb-3'>

          <IoMdArrowBack size={30} className='block md:hidden cursor-pointer'/>

          <div className='flex items-center'>
            <GoDotFill />
            <h2>{user.role=="user"?selectedUserChat.coachFirstName||"Anonymous":selectedUserChat.userFirstName||"Anonymous"}</h2>
          </div>

          <div className='flex items-center gap-x-4 '>
            {/* <BsTag />
            <FaRegStar />
            <HiDotsHorizontal /> */}
          </div>
        </div>

        {/* Dummy message response */}
        <div className='relative top-2 h-[75vh] md:h-full overflow-y-scroll mb-3' id="chatContainer">
        {  loader?<div className='flex place-items-center justify-center  h-[75vh] md:h-full w-full'><ImSpinner8 className="spinning-icon text-green" /></div>:
              <>
        {
          user.role=="user" &&  messages.map((message, index) => {
    const isUser = message?.type === "user";
   return (
      <React.Fragment key={index}>
        {isUser ? <Message {...message} /> : <Response {...message} />}
      </React.Fragment>
    );
  })
      }
      {
          user.role=="coach" &&  messages.map((message, index) => {
    const isUser = message?.type === "user";
   return (
      <React.Fragment key={index}>
        {isUser ?  <Response {...message} />: <Message {...message} />}
      </React.Fragment>
    );
  })
      }
</>}
      <div ref={messagesEndRef} />
       
          
         

        </div>

        {/* iNPUT DIV */}
        <form  onSubmit={handleSubmit}>
        <div className='flex items-center mb-2'>
          <input
          required
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            placeholder="Type your message here..."
            className='w-full focus:outline-none py-2 2xl:py-3 px-3 border rounded-lg'
          />
          <button type='submit' className="p-2">
            <IoIosSend size={34} className='text-white hover:cursor-pointer bg-green-600 rounded-full p-2 ml-1 ' />
          </button>

        </div>
             </form>
       </>}
      </div>
      
       </>
    )
  }

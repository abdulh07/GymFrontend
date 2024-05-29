import { useContext, useEffect, useState } from 'react';
import { VscSearch } from "react-icons/vsc";
import { AuthContex } from '../../Context/UserContext';
import formatDate from '../../utils/funcations';


export default function Users({selectedUserChat,setSelectedUserChat}) {
  const { user } = useContext(AuthContex);
  

  // const [showUserChat, setShowUserChat] = useState(false);

    const [chats,setChats]=useState([])

  
    useEffect(() => {
      if(user._id){
        fetch(`http://localhost:5000/api/v1/user/getChatsWith/${user._id}`)
        .then((res) => res.json())
        .then(({details}) => {
          setChats(details);
        });
      }
      
    }, [user._id]);
  return (
    // Parent div
    <>
     
       <div className='border rounded-lg mt-3 bg-white h-[85vh]'>
          <div className=' z-10 w-auto '>
            <div className='my-3 text-center' >
              <p className='flex items-center justify-center font-semibold'>All Messages </p>
              {/* <FaAngleDown size={20} className='text-sm ml-2' /> */}

            </div>


            <div className='flex'>

              <div className='flex items-center justify-center p-1 rounded-lg border m-2 w-full'>
                <input type="search" placeholder='Search here...' className='py- px-2 w-full focus:outline-none' />
                <VscSearch size={20} className='text-zinc-400 mr-1' />
              </div>
            </div>
          
          </div>


          {/* This div is for user chat  bg-[#f0efff]*/}


          <div className='h-[70vh] overflow-y-scroll '>
            {
              chats?.map((chat, index) =>  {
             const   {coachFirstName,userFirstName,message,_id,userProfilePic,coachProfilePic,date}=chat    
              return <div 
              key={`user-${index}`}  
               className={` p-4  py-[10px] flex justify-between items-center hover:cursor-pointer hover:bg-[#f1efef] ${selectedUserChat._id==_id ? "bg-[#f1f1f1]":""}`}
               onClick={()=>setSelectedUserChat(chat)}
               >
                  <div className='flex justify-end items-center'>
                    <div>
                        {/* img */}
                        <img src={user.role=="user"?coachProfilePic:userProfilePic} width={30} height={30} alt="" className="object-contain rounded-full"></img>

                    </div>
                    <div className='flex flex-col ml-3'>
                      <p className="mt-1 text-sm font-bold py-1 text-green">{user.role=="user"?coachFirstName||"Anonymous":userFirstName||"Anonymous"}</p>
                      <p className="mt-2 text-xs relative bottom-2 ">{message}</p>
                    </div>
                  </div>


                  <div className='text-zinc-400'>
                    <p className="mt-2 text-xs font-medium">{formatDate(date)}</p>
              

                  </div>

                </div>
              
                
              })
            }
          </div>

        </div>
       
    </>
  );
}

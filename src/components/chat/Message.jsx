import formatDate from "../../utils/funcations";


export default function Message({firstName,message,date,profilePic}) {
 

    return (
      // w-[97%] md:w-[70%] lg:w-[60%]
        <div className='flex justify-end  w-full px-2 mt-2'>
              
        <div className='flex flex-col mr-3  border rounded-xl p-2 bg-bg_light_green max-w-[80%] lg:max-w-[85%]'>
          <div className='flex  items-center'>
            <p className="ml-2 my-1 text-sm font-bold py-1 hidden md:block">{firstName||"Anonymous"}</p>
            <p className='ml-2 my-1 md:ml-3 text-xs font-medium text-zinc-400'>{formatDate(date)}</p>
          </div>

          <p className="mt-2 relative bottom-2 mx-2  text-[13px]">{message}</p>
        </div>

        <div className=''>
        <img src={profilePic} width={30} height={30} alt="" className="object-contain rounded-full"></img>
          {/* <Avatar>
             <AvatarImage src={`${baseURL}get-file?filename=${ProfilePic}`}  alt="@shadcn"/>
             <AvatarFallback>{FirstName?.slice(0,1)||"A"}</AvatarFallback>
          </Avatar> */}
        </div>
      </div>
    )
}
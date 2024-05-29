import formatDate from "../../utils/funcations";

export default function Response({firstName,message,profilePic,date}) {


    return (
      // w-[97%] md:w-[70%] lg:w-[60%]
        <div className='flex justify-start  w-full px-2 mt-2'>
        <div>
        <img src={profilePic} width={30} height={30} alt="" className="object-contain rounded-full"></img>

        </div>
        <div className='flex flex-col ml-3 border p-2 rounded-xl bg-[#f1efef] max-w-[80%] lg:max-w-[85%]'>
          <div className='flex  items-center'>
            <p className="ml-2 my-1 text-sm font-bold py-1 hidden md:block">{firstName||"Anonymous"}</p>
            <p className='ml-2 my-1 md:ml-3 text-xs font-medium text-zinc-400'>{formatDate(date)}</p>
          </div>

          <p className="mt-2 text-[13px] relative bottom-2 ml-2">{message}</p>
        </div>
      </div>

    )
}
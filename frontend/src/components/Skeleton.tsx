export const Skeleton =()=>{
    return <div className="w-full  mx-auto mt-3">
        <div className="flex justify-between items-center gap-3 ">
            <div className="flex flex-col flex-1  gap-2">
            <div className="w-[60%] bg-neutral-400 animate-pulse  py-2"></div>
            <div className="w-[40%] bg-neutral-400 animate-pulse  py-2"></div>
            </div>
            <div className="w-20 h-20 bg-neutral-400 animate-pulse "></div>
        </div>
        
            
        
        

    </div>
}
import { Comment } from '../icons/Comment';
import { Like } from '../icons/Like';
import photo from '../images/photo.jpg';

interface ReadMoreProps{
    
    limit:number
    title:string
    content:string

}

export const 
ReadMore =(props:ReadMoreProps)=>{

    const limit =props.limit
    const texttitle = props.title.length>limit?props.title.slice(0,limit)+"...":props.title
    const textcontent = props.content.length>limit?props.content.slice(0,limit)+"...":props.content
    return <div className="h-max max-w-full box-border border-b b-[#727272]">
    <div className='flex justify-between items-center '>
      <div className="flex flex-col p-4">
        <div className="font-bold pb-4 wrap-break-word">
       
        {texttitle}
        </div>
        <div className="text-[#727272] wrap-break-word">
        {/* <ReadMore limit={150} text={"assanns"} ></ReadMore> */}
          {textcontent}
        </div>
        
      </div>
      <div className='flex px-2 py-2' >
            <img src={photo} alt="photo"  className='lg:max-w-56 sm:max-w-full md:max-w-36 h-full '/>
        </div>
      
    </div>
      <div className='flex items-center gap-2 pl-4 text-[#727272] hover:cursor-pointer hover:text-black py-4'>
        <Like></Like>
        <p>122</p>
        <Comment></Comment>
        {23}
      </div>
  </div>
    
}
import { Comment } from "../icons/Comment";
import { Like } from "../icons/Like";
import photo from "../images/photo.jpg";

interface ReadMoreProps {
  limit: number;
  title: string;
  content: string;
}

export const ReadMore = (props: ReadMoreProps) => {
  const limit = props.limit;
  const textTitle =
    props.title.length > limit
      ? props.title.slice(0, limit) + "..."
      : props.title;
  const textContent =
    props.content.length > limit
      ? props.content.slice(0, limit) + "..."
      : props.content;
  return (
    <div className="h-max max-w-full box-border border-b b-[#727272]">
    <div className="flex justify-between items-center">
    <div className="flex-1 max-w-[70%] p-4">
      <div className="font-bold pb-4 wrap-break-word">
        {textTitle}
      </div>
      <div className="text-[#727272] wrap-break-word line-clamp-3">
          {textContent}
      </div>
    </div>
      <div className="p-4 w-30 h-30  lg:max-w-full lg:max-h-full shrink-0">
        <img src={photo} alt="photo" className="h-full object-cover" />
       </div>
       </div>
       

      <div className="flex items-center gap-2 pl-4 text-[#727272] hover:cursor-pointer hover:text-black py-4">
        <Like></Like>
        <p>122</p>
        <Comment></Comment>
        {23}
      </div>
    </div>
  );
};

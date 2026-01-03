import { UploadedIcon } from "../icons/UploadedIcon"
interface ImageProps{
    onChange:React.ChangeEventHandler<HTMLInputElement>
}
export const ImageDrop=(props:ImageProps)=>{
    return <div className="max-w-fit min-w-70 min-h-40 items-center justify-center m-4 border-dashed border bg-white p-8">
            <label htmlFor="dropZone-file" className="flex flex-col items-center justify-center cursor-pointer ">
                <UploadedIcon></UploadedIcon>
                <p className="text-blue-500 font-semibold text-lg"><span className="font-semibold text-lg text-black "> Drop you Image here, or</span> Browser </p>
                <p className="text-xs p-2 font-semibold text-teal-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                <input type="file" id="dropZone-file" onChange={props.onChange} className="hidden"/>
            </label>
        </div>
}
import { RightSideBar } from "./RightSideBar"

export function StaffPicks(){
    const padding ="pt-4 pb-4"
    return <div className="pl-4  top-0 right-0 border-l b-[#727272] hidden lg:block">
            <div className={`font-bold text-lg ${padding}  `}>
                    <h5>Staff Picks</h5>
            
            </div>
            <RightSideBar date="Aug 18" name="fjfnfdnds" text=" dsjn jdsn"></RightSideBar>
            <RightSideBar date="Dec 9" name="sdknkdsm" text="ndsndskmnkxzmk"></RightSideBar>
    </div>
}
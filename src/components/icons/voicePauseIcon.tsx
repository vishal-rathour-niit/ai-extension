
import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string,
    width?:number,
    height?:number,
    isActive?:boolean
}

const VoicePauseIcon = ({navURL='/',width=14,height=14,isActive=false}:Props) => {
    return(
        <NavLink to={navURL}>
            <svg width={width} height={height} viewBox="0 0 14 14" fill="none" ><circle cx="7" cy="7" r="6.5" stroke="currentColor"></circle><rect x="4" y="4" width="6" height="6" rx="1" fill="currentColor"></rect></svg>
        </NavLink>
    )
}

export default VoicePauseIcon;
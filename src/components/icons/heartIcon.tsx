
import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string,
    width?:number,
    height?:number,
    isActive?:boolean
}

const HeartIcon = ({navURL='/',width=14,height=12,isActive=false}:Props) => {
    return(
        <NavLink to={navURL}>
         <svg width={width} height={height} viewBox="0 0 14 12" fill="none"><path d="M0.5 4.07934C0.5 7.46911 3.11263 9.27547 5.02513 10.8923C5.7 11.4628 6.35 12 7 12C7.65 12 8.3 11.4628 8.97487 10.8923C10.8874 9.27547 13.5 7.46911 13.5 4.07934C13.5 0.68957 9.9249 -1.71439 7 1.5445C4.0751 -1.71439 0.5 0.68957 0.5 4.07934Z" fill="#EB3581"></path></svg>
        </NavLink>
    )
}

export default HeartIcon;
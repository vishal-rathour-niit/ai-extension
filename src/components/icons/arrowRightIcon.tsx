
import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string,
    width?:number,
    height?:number,
    isActive?:boolean
}

const ArrowRightIcon = ({navURL='/',width=16,height=16,isActive=false}:Props) => {
    return(
        <NavLink to={navURL}>
            <svg aria-hidden="true" focusable="false" role="img"  viewBox="0 0 16 16" width={width} height={height} fill="currentColor" ><path d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l2.97-2.97H3.75a.75.75 0 0 1 0-1.5h7.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"></path></svg>
        </NavLink>
    )
}

export default ArrowRightIcon;
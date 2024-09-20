
import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string,
    width?:number,
    height?:number,
    isActive?:boolean
}

const ArrowBottomIcon = ({navURL='/',width=12,height=12,isActive=false}:Props) => {
    return(
        <NavLink to={navURL}>
            <svg aria-hidden="true" focusable="false" role="img" className="octicon octicon-chevron-down" viewBox="0 0 12 12" width={width} height={height} fill="currentColor" ><path d="M6 8.825c-.2 0-.4-.1-.5-.2l-3.3-3.3c-.3-.3-.3-.8 0-1.1.3-.3.8-.3 1.1 0l2.7 2.7 2.7-2.7c.3-.3.8-.3 1.1 0 .3.3.3.8 0 1.1l-3.2 3.2c-.2.2-.4.3-.6.3Z"></path></svg>
        </NavLink>
    )
}

export default ArrowBottomIcon;
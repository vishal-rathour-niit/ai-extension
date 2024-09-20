import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string
}

const CollapseNavIcon = ({navURL='/'}:Props) => {
    return(
        <NavLink to={navURL}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11 12L11 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M4.46447 4.46447L8 8L4.46447 11.5355" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </NavLink>
    )
}

export default CollapseNavIcon;
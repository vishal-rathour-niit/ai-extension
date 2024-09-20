import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string
}

const FullScreenIcon = ({navURL='/'}:Props) => {
    return(
        <NavLink to={navURL}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.8284 5L13.6569 7.82843L10.8284 10.6569" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5 10.8284L2.17157 8L5 5.17157" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </NavLink>
    )
}

export default FullScreenIcon
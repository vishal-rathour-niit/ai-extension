import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string
}

const ThreeDotsIcon = ({navURL='/'}:Props) => {
    return(
        <NavLink to={navURL}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="3" cy="10" r="2" fill="currentColor"></circle><circle cx="10" cy="10" r="2" fill="currentColor"></circle><circle cx="17" cy="10" r="2" fill="currentColor"></circle></svg>
        </NavLink>
    )
}

export default ThreeDotsIcon;
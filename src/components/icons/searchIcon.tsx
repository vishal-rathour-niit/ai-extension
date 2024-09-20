import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string
}

const SearchIcon = ({navURL='/'}:Props) => {
    return(
        <NavLink to={navURL}>
          <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none"><path d="M18 18L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.5 17C13.6421 17 17 13.6421 17 9.5C17 5.35786 13.6421 2 9.5 2C5.35786 2 2 5.35786 2 9.5C2 13.6421 5.35786 17 9.5 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5.21429 9.49999C5.21429 8.06611 5.91846 6.7967 6.99986 6.01871" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
        </NavLink>
    )
}

export default SearchIcon;
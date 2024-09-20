
import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string,
    width?:number,
    height?:number
}

const OpsFaceIcon = ({navURL='/',width=16,height=16}:Props) => {
    return(
        <NavLink to={navURL}>
          <svg width={width} height={height} viewBox="0 0 16 16" fill="none"><g clipPath="url(#clip0_8883_46739)"><path d="M8 15C11.866 15 15 11.866 15 8C15 4.134 11.866 1 8 1C4.134 1 1 4.134 1 8C1 11.866 4.134 15 8 15Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path><path d="M10.3333 6V6.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M5.66667 6V6.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.66667 9.33331H7.33333C6.59695 9.33331 6 9.93027 6 10.6666C6 11.403 6.59695 12 7.33333 12H8.66667C9.40305 12 10 11.403 10 10.6666C10 9.93027 9.40305 9.33331 8.66667 9.33331Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_8883_46739"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
        </NavLink>
    )
}

export default OpsFaceIcon;
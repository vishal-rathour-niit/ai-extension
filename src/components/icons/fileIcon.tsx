
import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string
}

const FileIcon = ({navURL='/'}:Props) => {
    return(
        <NavLink to={navURL}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(#clip0_8883_46721)"><path d="M13.8333 1H2.16667C1.52234 1 1 1.52234 1 2.16667V13.8333C1 14.4777 1.52234 15 2.16667 15H13.8333C14.4777 15 15 14.4777 15 13.8333V2.16667C15 1.52234 14.4777 1 13.8333 1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path><path d="M9 8H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 5H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M12 11H4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_8883_46721"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
        </NavLink>
    )
}

export default FileIcon;
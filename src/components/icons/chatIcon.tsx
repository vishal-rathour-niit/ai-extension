import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string
}

const ChatIcon = ({navURL='/'}:Props) => {
    return(
        <NavLink to={navURL}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_7753_69459)"><path d="M6.50012 16.1302H6.30221L6.13006 16.2278L1.75012 18.7125V16.8802V5.00018C1.75012 3.75754 2.75748 2.75018 4.00012 2.75018H16.0001C17.2428 2.75018 18.2501 3.75754 18.2501 5.00018V13.8802C18.2501 15.1228 17.2428 16.1302 16.0001 16.1302H13.1876H6.50012ZM1.37677 18.9242C1.37688 18.9242 1.37698 18.9241 1.37709 18.9241L1.37677 18.9242Z" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round"></path><path d="M5.00012 12.0002H12.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M5.00012 7.00018H15.0001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></g><defs><clipPath id="clip0_7753_69459"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
        </NavLink>
    )
}

export default ChatIcon;
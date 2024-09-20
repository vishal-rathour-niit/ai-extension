import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string
}

const QCRIocn = ({navURL='/'}:Props) => {
    return(
        <NavLink to={navURL}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><g clip-path="url(#clip0_7753_69474)"><path d="M14.1667 1.66666H15.3333C16.9902 1.66666 18.3333 3.0098 18.3333 4.66666V5.83332" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M14.1667 18.3333H15.3333C16.9902 18.3333 18.3333 16.9902 18.3333 15.3333V14.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M5.83334 1.66666H4.66668C3.00982 1.66666 1.66668 3.0098 1.66668 4.66666V5.83332" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M5.83334 18.3333H4.66668C3.00982 18.3333 1.66668 16.9902 1.66668 15.3333V14.1667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M5 7.5H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path><path d="M5 12.5H11.6667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path></g><defs><clipPath id="clip0_7753_69474"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
        </NavLink>
    )
}

export default QCRIocn;
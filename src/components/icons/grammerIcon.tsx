import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string
}

const GrammerIcon = ({navURL='/'}:Props) => {
    return(
        <NavLink to={navURL}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" ><g clip-path="url(#clip0_7753_69471)"><path d="M0.833374 1.2L13.8334 1.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M0.999817 7.00016H4.99982" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="12.4998" cy="12.5002" r="6.75" stroke="currentColor" strokeWidth="1.5"></circle><path d="M15.8334 10.8333L11.3889 15L9.16669 12.9167" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g><defs><clipPath id="clip0_7753_69471"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>
        </NavLink>
    )
}

export default GrammerIcon;
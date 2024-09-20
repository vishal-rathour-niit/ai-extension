import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string
}

const AskIcon = ({navURL='/'}:Props) => {
    return(
        <NavLink to={navURL}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.6147 8.94444C17.6147 11.6058 16.2753 13.9502 14.2386 15.3324C13.7623 15.6556 13.4235 16.2019 13.4235 16.8338V17.5C13.4235 18.1904 12.8639 18.75 12.1735 18.75H7.79115C7.1008 18.75 6.54115 18.1904 6.54115 17.5V16.8338C6.54115 16.2019 6.20236 15.6556 5.72609 15.3324C3.68937 13.9502 2.34998 11.6058 2.34998 8.94444C2.34998 4.68969 5.77231 1.25 9.98233 1.25C14.1924 1.25 17.6147 4.68969 17.6147 8.94444Z" stroke="currentColor" strokeWidth="1.5"></path><path d="M10 12V10.4622C10.7678 10.4622 11.5355 10.1955 12.1213 9.66226C13.2929 8.59571 13.2929 6.86648 12.1213 5.79992C10.9497 4.73336 9.05025 4.73336 7.87868 5.79992C7.23606 6.38494 6.94592 7.16934 7.00827 7.93439" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><circle cx="9.98234" cy="15.3088" r="0.838235" fill="currentColor"></circle></svg>
        </NavLink>
    )
}

export default AskIcon;
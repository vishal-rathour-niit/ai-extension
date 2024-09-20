
import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string,
    width?:number,
    height?:number,
    isActive?:boolean
}

const EmailIcon = ({navURL='/',width=14,height=14,isActive=false}:Props) => {
    return(
        <NavLink to={navURL}>
         <svg  width={width} height={height} viewBox="0 0 14 14" fill="none"><path d="M7.00004 13.2808C8.73444 13.2808 10.3046 12.5778 11.4412 11.4412C12.5778 10.3046 13.2808 8.73444 13.2808 7.00004C13.2808 5.26565 12.5778 3.69544 11.4412 2.55884C10.3046 1.42224 8.73444 0.719238 7.00004 0.719238C5.26565 0.719238 3.69544 1.42224 2.55884 2.55884C1.42224 3.69544 0.719238 5.26565 0.719238 7.00004C0.719238 8.73444 1.42224 10.3046 2.55884 11.4412C3.69544 12.5778 5.26565 13.2808 7.00004 13.2808Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"></path><path d="M6.99996 8.45238V7.19622C8.0406 7.19622 8.8842 6.35261 8.8842 5.31198C8.8842 4.27134 8.0406 3.42773 6.99996 3.42773C5.95933 3.42773 5.11572 4.27134 5.11572 5.31198" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path><path fillRule="evenodd" clipRule="evenodd" d="M6.99975 11.1418C7.35774 11.1418 7.64794 10.8516 7.64794 10.4936C7.64794 10.1357 7.35774 9.84546 6.99975 9.84546C6.64177 9.84546 6.35156 10.1357 6.35156 10.4936C6.35156 10.8516 6.64177 11.1418 6.99975 11.1418Z" fill="currentColor"></path></svg>
        </NavLink>
    )
}

export default EmailIcon;
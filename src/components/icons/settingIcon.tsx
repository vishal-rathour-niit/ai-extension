
import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string
}

const SettingIcon = ({navURL='/'}:Props) => {
    return(
        <NavLink to={navURL}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.0378 14.5C11.4004 14.5 11.7346 14.3037 11.9112 13.9871L14.9784 8.48706C15.1472 8.1843 15.1472 7.8157 14.9784 7.51294L11.9112 2.01294C11.7346 1.69627 11.4004 1.5 11.0378 1.5H4.96236C4.59978 1.5 4.26561 1.69626 4.089 2.01293L1.02164 7.51293C0.852789 7.81569 0.85279 8.18431 1.02164 8.48707L4.089 13.9871C4.26561 14.3037 4.59978 14.5 4.96236 14.5H11.0378Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path><path d="M8 10.5C9.38071 10.5 10.5 9.38071 10.5 8C10.5 6.61929 9.38071 5.5 8 5.5C6.61929 5.5 5.5 6.61929 5.5 8C5.5 9.38071 6.61929 10.5 8 10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"></path></svg>
        </NavLink>
    )
}

export default SettingIcon;
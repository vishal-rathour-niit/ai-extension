
import { NavLink } from "react-router-dom"

interface Props{
    navURL?:string,
    width?:number,
    height?:number,
    isActive?:boolean
}

const SendIcon = ({navURL='/',width=16,height=16,isActive=false}:Props) => {
    return(
        <NavLink to={navURL}>
            <svg width={width} height={height} viewBox="0 0 16 16" fill="none" ><path d="M12.5232 9.93929L4.96215 13.4048C3.62288 14.0186 2.95324 14.3255 2.49425 14.2066C2.09533 14.1032 1.76664 13.8212 1.60385 13.4426C1.41655 13.007 1.61817 12.2985 2.02142 10.8815L2.65175 8.66662H6.75452C7.12271 8.66662 7.42118 8.36814 7.42118 7.99995C7.42118 7.63176 7.12271 7.33328 6.75452 7.33328H2.65175L2.02142 5.11838C1.61817 3.70141 1.41655 2.99292 1.60385 2.55732C1.76664 2.17874 2.09533 1.8967 2.49425 1.79332C2.95324 1.67437 3.62288 1.98128 4.96215 2.59511L12.5232 6.06061C13.869 6.67742 14.5419 6.98582 14.7513 7.41231C14.9333 7.78294 14.9333 8.21696 14.7513 8.58759C14.5419 9.01407 13.869 9.32248 12.5232 9.93929Z" fill="currentColor"></path></svg>
        </NavLink>
    )
}

export default SendIcon;
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import SidePanel from "../pages/sidePanel";

declare var cv: any;

function RoutesDOM(){
       return(
        <Router>
            <Routes>
                <Route path="/" element={<SidePanel />} />
                
            </Routes>
        </Router>
       )
}

export default RoutesDOM;
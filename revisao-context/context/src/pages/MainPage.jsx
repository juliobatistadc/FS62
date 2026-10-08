import { Link } from "react-router";

function MainPage(){
    return(
        <>
            <Link to="/layout">Main page</Link>
            <Link to="/settings">Settings</Link>
        </>
    )
}

export default MainPage
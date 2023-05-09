import { Link } from "react-router-dom";


export default function GetStarted(){
    return(
        <>
            <div className="get-started">
                <h1 className="text-white my-5">Get started with Trello today</h1>
                <Link to={'/signup'}><button className="btn btn-primary w-0">Sign up - it’s free</button></Link>
            </div>
        </>
    );
}
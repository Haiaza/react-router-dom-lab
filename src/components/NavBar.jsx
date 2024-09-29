import { Link } from "react-router-dom";

export default function Nav (props){
    return(
        <div className="nav">
            <Link to="/">
                <div>Home</div>
            </Link>
            <Link to='/mailboxes'>
                <div>Mailboxes</div>
            </Link>
            <Link to='/new-mailbox'>
                <div>New Mailbox</div>
            </Link>
        </div>
    )
}
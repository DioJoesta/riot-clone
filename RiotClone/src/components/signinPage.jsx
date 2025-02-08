import { Link } from "react-router-dom";


export function SignInPage () {
    return (
        <span>
            <h3>Sign In</h3>
            <input type="text" placeholder="USERNAME" />
            <input type="password" placeholder="PASSWORD" />

            <button>Submit</button>
             <LINK>CAN'T SIGN IN?</LINK>
            
            <Link to="/signup">CREATE ACCOUNT</Link>
        </span>
    )
}
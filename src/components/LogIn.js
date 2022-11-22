import "./LogIn.scss"
import {useNavigate} from "react-router-dom";


const LogIn = () => {
    let navigate = useNavigate();
    const SignIn = () => {
        localStorage.user = true;
        // window.location.reload();
        let path = `/Profile`;
        navigate(path);
    }



    return (
        <div className="LogInContainer">
                <div className="LogInContent">
                    <div className="emailInputContainer">
                        <label>Email address</label>
                        <br/>
                        <input
                            type="email"
                            className="emailInput"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="passwordInputContainer">
                        <label>Password</label>
                        <br/>
                        <input
                            type="password"
                            className="passwordInput"
                            placeholder="Enter password"
                        />
                    </div>
                    <div
                        onClick={SignIn}
                        className="submitButtonContainer">
                        <button type="submit" className="logInButton">
                            Log In
                        </button>
                    </div>

                </div>
        </div>
    )
}

export default LogIn
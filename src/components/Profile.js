import './Profile.scss'
import {Link} from "react-router-dom";

const Profile = () => {

    return (
        <>
        <div className="profileContainer">
                <div className="wide-cardHeader">
                    <h2>Personal Information</h2>
                    <span className="wide-card__header__action">
                        <button id="account-change-btn" className="btn-link">update</button>
                    </span>

                <div className="wide-card__body">
                    <div className="user-info">
                        <p><strong>user name：</strong> oliver</p>
                        <p><strong>password：</strong>*******</p>

                        <p><strong>email:</strong> 12345@gmail.com</p>
                    </div>
                </div>
                    </div>
            <div className="wide-cardHeader">
                <h2><Link to="/History"
                className='history'
                >History</Link></h2>
            </div>
        </div>
        </>
    )
}

export default Profile
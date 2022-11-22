import './History.scss'
import {useNavigate} from "react-router-dom";

const History = () => {

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/result`;
        navigate(path);
    }
    return (
        <>
            <div className="historyListContainer">
                <div className="historyButtons">
                    <button
                    onClick={routeChange}
                    >resistor.jpeg</button>
                </div>
            </div>
        </>
    )
}

export default History
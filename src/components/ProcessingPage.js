import './ProcessingPage.scss'
import {useNavigate} from "react-router-dom";

const ProcessingPage = () => {

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `/result`;
        navigate(path);
    }
    return(
        <>
        <div className="processingContainer">
            <div className="addMoreImage">
                <button className="addButton">
                    +
                </button>
            </div>
            <div className="getResultButton">
                <button
                    onClick={routeChange}
                    className="getResult">
                    get final result
                </button>
            </div>
        </div>
        </>
    )
}

export default ProcessingPage
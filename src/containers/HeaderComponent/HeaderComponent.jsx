import { useEffect } from "react";
import { useNavigate } from "react-router";

const HeaderComponent = (props) => {
    
    const {value} = props;
    const navigate = useNavigate();
    const handleToHome = () => {
        navigate('/');
    }
    const handleToPrevious = () => {
        navigate(-1);
    }
    console.log(props);
    
    useEffect( () => {

    }, [props])
    return(
        <div>
            <h3>
                <span><button onClick={handleToPrevious}>Retour</button></span> 
                <span>{value}</span>
                <span><button onClick={handleToHome}>Home</button></span>
            </h3>
        </div>
    )
}
export default HeaderComponent
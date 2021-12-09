import { useEffect } from "react";
import { useNavigate } from "react-router";
import './HeaderComponent.scss';

const HeaderComponent = (props) => {
    
    const {value} = props;
    const navigate = useNavigate();
    const handleToHome = () => {
        navigate('/');
    }
    const handleToPrevious = () => {
        navigate(-1);
    }
    
    useEffect( () => {

    }, [props])
    return(
        <div className='blockHeader'>
            
            <span><button onClick={handleToPrevious}>Retour</button></span> 
            <h3>{value}</h3>
            <span><button onClick={handleToHome}>Home</button></span>
            
        </div>
    )
}
export default HeaderComponent
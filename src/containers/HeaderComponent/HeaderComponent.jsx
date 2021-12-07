import { useNavigate } from "react-router";

const HeaderComponent = (props) => {
    
    const navigate = useNavigate();
    const handleToHome = () => {
        navigate('');
    }
    const handleToPrevious = () => {
        navigate(-1);
    }

    return(
        <div>
            <h3>
                <span><button onClick={handleToPrevious}>Retour</button></span> 
                {...props}
                <span><button onClick={handleToHome}>Home</button></span>
            </h3>
        </div>
    )
}
export default HeaderComponent
import { useEffect } from "react";
import { useNavigate } from "react-router";
import './HeaderComponent.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';

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
            <ArrowBackIcon onClick={handleToPrevious} sx={{padding: 2.5}}/>
            <h3>{value}</h3>
            <HomeIcon onClick={handleToHome} sx={{padding: 2.5}} />
            
        </div>
    )
}
export default HeaderComponent
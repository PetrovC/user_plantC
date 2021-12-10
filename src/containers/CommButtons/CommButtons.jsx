import './CommButtons.scss'
import { useNavigate } from "react-router"


const CommButtons = () => {
    
    const navigate = useNavigate();
    const handleToPhoto = () => {
        console.log("Finaliser works");
    }
    const handleToSnooze =() => {
        console.log("Reporter works");
    }
    const handleToProblem = () => {
        navigate('/commentaries')
    }
    
    return(
        <div className='blockButton'>
        <span>
            <button className='buttonComm' onClick={handleToPhoto}>Finaliser</button>
            <button className='buttonComm'onClick={handleToSnooze}>Reporter</button>
        </span>
        <button className='buttonProblem'onClick={handleToProblem}>Problème ?</button>
        </div>
    )
}
export default CommButtons
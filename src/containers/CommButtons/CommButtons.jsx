
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
        console.log("Problem works")
    }
    
    return(
        <>
        <span>
            <button className='buttonComm' onClick={handleToPhoto}>Finaliser</button>
            <button className='buttonComm'onClick={handleToSnooze}>Reporter</button>
        </span>
        <button className='buttonProblem'onClick={handleToProblem}>Problème ?</button>
        </>
    )
}
export default CommButtons
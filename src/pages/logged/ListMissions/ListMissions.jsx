import { Card } from "@mui/material";
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectMission } from "../../../store/missionsSlice"


const Mission = (props) =>{
    const {id, startDate, endDate, type, location} = props;

    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    const mission = useSelector((state) => state.missions.list.find(e => e.id === id))

    
    const OnClick = () => {
        dispatch(selectMission(mission))
        navigate('/details')
    }
    
    
    return <li key={id} onClick={() => OnClick()}>
        <Card> {moment(startDate).format('DD/MM/YY')} - {moment(endDate).format('DD/MM/YY')}</Card  >
        <Card>{type}</Card>
        <Card>{location}</Card>

    </li>
}


export const ListMissions = () => {
    
    const missions = useSelector(state => state.missions.list);

    return(
        <>
        <div>
            <h3>Agenda</h3>
            <div>
                <ul>
                    { missions.map((mission) => <Mission key={mission.id} {...mission} />)}
                </ul>
            </div>
        </div>
        </>
    )
}


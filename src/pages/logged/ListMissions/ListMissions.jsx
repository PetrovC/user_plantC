import { Card, CardContent, Typography } from "@mui/material";
import moment from 'moment';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectMission } from "../../../store/missionsSlice"
import './ListMissions.scss'

const Mission = (props) =>{
    const {id, date_Debut, date_Fin, type, projet} = props;

    const dispatch = useDispatch()
    const navigate = useNavigate();
    
    const mission = useSelector((state) => state.missions.list.find(e => e.id === id))

    
    const OnClick = () => {
        dispatch(selectMission(mission))
        navigate('/details')
    }
    
    
    return <li key={id} onClick={() => OnClick()}>
        <Card>
            <CardContent>

                <Typography variant="h6" component="div" > {moment(date_Debut).format('DD/MM/YY')} - {moment(date_Fin).format('DD/MM/YY')}</Typography>
                <CardContent>{type}</CardContent>
                <CardContent>{projet?.localisation.adressLine1} {projet?.localisation.adressLine2}, {projet?.localisation.number} </CardContent>
                <CardContent>{projet?.localisation.zipCode} {projet?.localisation.city}, {projet?.localisation.country} </CardContent>
            </CardContent>
        </Card>

    </li>
}


export const ListMissions = () => {
    
    const missions = useSelector(state => state.missions.list);
    const dispatch = useDispatch();
    
    useEffect( () => {
        dispatch(selectMission(null))
    }, [])

    return(
        <>
        <div className='list'>
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


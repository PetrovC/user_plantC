import { Card, CardContent, Typography } from "@mui/material";
import moment from 'moment';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectMission } from "../../../store/missionsSlice"
import './ListMissions.scss'

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
        <Card>
            <CardContent>

                <Typography variant="h6" component="div" > {moment(startDate).format('DD/MM/YY')} - {moment(endDate).format('DD/MM/YY')}</Typography>
                <CardContent>{type}</CardContent>
                <CardContent>{location}</CardContent>
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


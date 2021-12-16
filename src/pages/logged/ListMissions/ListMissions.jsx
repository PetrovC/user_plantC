import { Card, CardContent, Typography } from "@mui/material";
import moment from 'moment';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { selectMission } from "../../../store/missionsSlice"
import './ListMissions.scss'
import jwtDecode from "jwt-decode";

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
            <CardContent sx={{my:1, mx:4, p:1}}>
                <Typography variant="h6" component="div"> {moment(date_Debut).format('DD/MM/YY')} - {moment(date_Fin).format('DD/MM/YY')}</Typography>
                <CardContent sx={{my:0,mx:0, p:0, textAlign: "left"}}>{type}</CardContent>
                {/* <CardContent sx={{m:0, p:0.5, textAlign: "left"}}>{projet?.localisation.adressLine1} {projet?.localisation.adressLine2}, {projet?.localisation.number} </CardContent> */}
                <CardContent sx={{my:0,mx:0, p:0, textAlign: "left"}}>{projet?.localisation.zipCode} {projet?.localisation.city}, {projet?.localisation.country} </CardContent>
            </CardContent>
        </Card>

    </li>
}


export const ListMissions = () => {
    // à modifier
    //const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ0ZXN0MkBleGFtcGxlLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6InVzZXIiLCJpZCI6MSwiZm9uY3Rpb24iOiJDaXRveWVuIiwibm9tIjoidGVzdDIiLCJwcmVub20iOiJ0ZXN0MiIsImVtYWlsIjoidGVzdDJAZXhhbXBsZS5jb20iLCJ1c2VybGV2ZWwiOiJ1c2VyIiwiaWRlbnRpZmllciI6IjEiLCJyb2xlcyI6WyJ1c2VyIl0sImVzdFZlcmlmaWUiOmZhbHNlfQ.97QnR1wZcrjoe1hKOxd2PsGYe280bQIMfnVa8vKBoLKJ88Sc9naAW_ubwkTa6vssOWLQ-HzT0fOVXYzRDLzqsg"
    const token = useSelector(state => state.login.token)
    const decoded_token = jwtDecode(token)
    console.log(decoded_token);
    //à modifier
    
    const missions = useSelector(state => state.missions.list);
    const dispatch = useDispatch();
    
    useEffect( () => {
        dispatch(selectMission(null))
    }, [])

    return(
        <>
        <div className='list'>
            <h2>Agenda</h2>
            <p className="titreList">{decoded_token.prenom} {decoded_token.nom}</p>
            <div>
                <ul>
                    { missions.map((mission) => <Mission key={mission.id} {...mission} />)}
                </ul>
            </div>
        </div>
        </>
    )
}


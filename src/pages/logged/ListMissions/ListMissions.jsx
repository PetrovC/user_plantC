import { Card, TextField } from "@mui/material";
import axios from "axios";
import moment from 'moment';
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";


const Mission = (props) =>{
    const {id, startDate, endDate, type, location} = props;

    const navigate = useNavigate();
    
    return <li key={id} onClick={() => {navigate(id)}}>
        <Card> {moment(startDate).format('DD/MM/YY')} - {moment(endDate).format('DD/MM/YY')}</Card  >
        <Card>{type}</Card>
        <Card>{location}</Card>

    </li>
}


export const ListMissions = () => {
    
    const [missions, setMissions] = useState([]);

    useEffect( () => {
        axios.get("http://localhost:4000/mission")
        .then(({data}) =>{
            setMissions(data);
        })
    },[])

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


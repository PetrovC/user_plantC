import HeaderComponent from '../../../containers/HeaderComponent/HeaderComponent'
import { Card, TextField } from "@mui/material";
import { useParams } from 'react-router';
import CommButtons from '../../../containers/CommButtons/CommButtons';
import { useEffect, useState } from 'react';
import axios from 'axios';

const DetailMission = () => {

    const titre = 'Description';
    const {id} = useParams();
    const [data, setData] = useState();
    
    useEffect(() => {
        axios.get("http://localhost:4000/mission/" + id)
        .then(({data}) => {
            setData(data);
        })
    },[id])

    return(
        <>
        <HeaderComponent value={titre}/>
        {data && <div>
            <TextField disabled label="Date" value={`${data.startDate} - ${data.endDate}`}/>
            <TextField disabled label="Adresse" value={data.adresse}/>
            <TextField disabled label="Localité" value={data.localite}/>
            <TextField disabled label="Description" value={data.description}/>
            <TextField disabled label="Info Mission" value={data.type}/>
        </div>}
        <CommButtons/>
        </>
    )
}

export default DetailMission
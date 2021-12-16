import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import { Header } from "../../containers/Header/Header"
import { loadMissions } from "../../store/missionsSlice";
import { useAuth } from "../../hooks/auth-hook";
import jwtDecode from "jwt-decode";

export const Admin = ()=>{

    useAuth();
    //const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ0ZXN0MkBleGFtcGxlLmNvbSIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWVpZGVudGlmaWVyIjoiNCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6InVzZXIiLCJpZCI6MSwiZm9uY3Rpb24iOiJDaXRveWVuIiwibm9tIjoidGVzdDIiLCJwcmVub20iOiJ0ZXN0MiIsImVtYWlsIjoidGVzdDJAZXhhbXBsZS5jb20iLCJ1c2VybGV2ZWwiOiJ1c2VyIiwiaWRlbnRpZmllciI6IjEiLCJyb2xlcyI6WyJ1c2VyIl0sImVzdFZlcmlmaWUiOmZhbHNlfQ.97QnR1wZcrjoe1hKOxd2PsGYe280bQIMfnVa8vKBoLKJ88Sc9naAW_ubwkTa6vssOWLQ-HzT0fOVXYzRDLzqsg"
    const token = useSelector(state => state.login.token)
    let decoded_token = ''
    
    if(token) {
         decoded_token = jwtDecode(token)
    }

    
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        
        //axios.get( process.env.REACT_APP_API_URL + "/tache/" ) // + token 'http://192.168.10.60:81/api/Tache/ByProjectID/1'
        axios.get( 'http://192.168.10.60:81/api/' + "Tache/ByParticipantID/" + decoded_token.id, {headers:{Authorization : 'Bearer ' + token}} ) 
        //axios.get( 'http://192.168.10.60:81/api/Tache/ByParticipantID/' + decoded_token.id ) 
        .then(({data}) => {
            dispatch(loadMissions(data))
        }).catch();
    }, []);

    return(
        <>
        <Header/>
        <main>
            <Outlet></Outlet>
        </main>
        </>
    )
}
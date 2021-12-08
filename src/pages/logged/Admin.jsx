import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { Header } from "../../containers/Header/Header"
import { loadMissions } from "../../store/missionsSlice";

export const Admin = ()=>{

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:4000/mission')
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
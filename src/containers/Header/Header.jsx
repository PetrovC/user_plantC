import './Header.scss'
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import {logoutRequest} from '../../authentication/logout/actionLogout';

export const Header = () => {
    // const isLogged

    const dispatch = useDispatch();

    const isLogged = useSelector((state) => state.login.isLogged);


    return(
        <header>
            <img src='assets/img/PlantC.png' alt="logo" className="logo mobile"/>
            <div>
                <Button disabled={!isLogged} type="button" color="primary" onClick= {() => dispatch(logoutRequest())}>Se déconnecter</Button>
            </div>
        </header>
    )
}
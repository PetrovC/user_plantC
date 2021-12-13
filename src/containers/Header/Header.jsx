import './Header.scss'
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import {logoutRequest} from '../../authentication/logout/actionLogout';
import LogoutIcon from '@mui/icons-material/Logout';

export const Header = () => {
    // const isLogged

    const dispatch = useDispatch();

    const isLogged = useSelector((state) => state.login.isLogged);


    return(
        <header>
            <img src='assets/img/PlantC.png' alt="logo" className="logo-mobile"/>
            <div>
                <LogoutIcon disabled={!isLogged} onClick= {() => dispatch(logoutRequest())} className="logout-icon"/>
                {/* <Button disabled={!isLogged} type="button" color="primary" onClick= {() => dispatch(logoutRequest())}>Se déconnecter</Button> */}
            </div>
        </header>
    )
}
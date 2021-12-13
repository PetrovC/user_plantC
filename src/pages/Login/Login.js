import { Button, Card, TextField } from "@mui/material";
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react'
import { Controller, useForm } from "react-hook-form";
import {LoginRequest, FalseLoginRequest} from '../../authentication/login/actionLogin'
//import {checkStore} from '../../store/storeListen'
import { useLogged } from "../../hooks/logged-hook";
import './Login.scss'

const Login = () => {
    useLogged()

    const dispatch = useDispatch();

    const loginState = useSelector(state => state.login);

    useEffect(() => {
        console.log(loginState.token)
    }, [loginState])
    
    const defaultValues = {
        email: '',
        password: ''
    }

    const { control, handleSubmit, reset, watch, formState: { errors } } = useForm({defaultValues})

    const submitRequest = (data) => {
        const dataDetails = {  
            email: data.email,
            password: data.password,
        }

        // //!/ faux login en attendant le déploiement du backend /!//
        // //!/ A remplacer par le loginRequest ci-dessous /!//

        dispatch(FalseLoginRequest({email: dataDetails.email, password: dataDetails.password}))

        //dispatch(LoginRequest({email: dataDetails.email, password: dataDetails.password}))
        reset()
    }
    const email = watch('email') === '';
    const mdp = watch('password') === '';

    return (
        <div>
            <main className="auth">
                <img src='assets/img/PlantC.png' alt="logo" className="logo-mobile auth-logo"/>
                <h2>Se Connecter</h2>
                <Card variant="outlined" sx={{border: 0}} >
                    <form onSubmit= {handleSubmit(submitRequest)}>
                        <div className='form-group'>
                            <Controller
                            control={control}
                            name='email' 
                            render={({field}) =><TextField {...field} type="email" label="Email" variant="outlined" /> }/>
                        </div>
                        <div className='form-group'>
                            <Controller
                            control={control}
                            name='password' 
                            render={({field}) =><TextField {...field} type="password" label="Password" variant="outlined" /> }/>
                        </div>
                        {/* trouver un moyen pour griser le bouton quand il est disabled */}
                        <div className='form-group'>
                            <button disabled={loginState.isLogged || mdp ||email} type="submit" className='buttonSend'>Valider</button>
                        </div>
                    </form>            
                </Card>
            </main>
        </div>
    );
};

export default Login;

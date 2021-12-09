import HeaderComponent from '../../../containers/HeaderComponent/HeaderComponent'
import { TextField} from "@mui/material";
import { Button } from '@mui/material';
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { showAlerte } from '../../../store/alertesSlice';
import { useNavigate } from 'react-router';
import useSelectedMission from '../../../hooks/selectedMissionHook';

const Commentaries = () => {
    
    const mission = useSelectedMission();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { control, handleSubmit, reset, watch, formState: { error }} = useForm({
        defaultValues: {
            aide: '',
            imprevu:'',
            autre: '',
        }
    })
    
    const titre ="Problème"
    const types= ['Aide', 'Imprévu', 'Autre']
    
    
    const onSubmit = (data) => {
        const message = data.aide || data.imprevu || data.autre
        const type = data.aide ? "aide" : data.imprevu ? "imprevu" : "autre";
        axios.post('http://localhost:4000/commentaire', {type, message, missionId : mission?.id ?? 1, participantId:1})
        .then(() => {
            dispatch(showAlerte({severity: 'success', message: "Bien envoyé. Nous vous recontacterons dès que possible."}));
            navigate(-1);
        })
    }

    const aide = watch('aide') !== '';
    const imprevu = watch('imprevu') !== '';
    const autre = watch('autre') !== '';


    return(
        <>
        <HeaderComponent value={titre}/>
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                
            <Controller name="aide"
                        control={control}
                        render={({field}) => 
                        <TextField {...field}
                        disabled={ imprevu || autre }
                        label="Besoin d'aide"/>}
                        />
            <Controller name='imprevu'
                        control={control}
                        render={({field}) =>
                        <TextField {...field}
                        disabled={ aide || autre }
                        label="Imprévu/retard"/>}
                        />
            <Controller name='autre'
                        control={control}
                        render={({field}) =>  
                        <TextField {...field}
                        disabled={ aide || imprevu }
                        label="Autre"/>}
                        />
            <Button type='submit'>Envoyer</Button>
            </form>
        </div>
        </>
    )
}
export default Commentaries
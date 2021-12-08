import HeaderComponent from '../../../containers/HeaderComponent/HeaderComponent'
import { TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";

const Commentaries = () => {
    
    const titre ="Problème"
    const { control, handleSubmit, reset, formState: { error }} = useForm()
    const types= ['Aide', 'Imprévu', 'Autre']
    
    return(
        <>
        <HeaderComponent value={titre}/>
        <div>
            <Controller name="aide"
                        control={control}
                        render={({field}) => 
                                <TextField {...field}
                                    label="Besoin d'aide"/>}
            />
            
            <TextField label="Imprévu/retard"/>
            <TextField label="Autre"/>
        </div>
        </>
    )
}
export default Commentaries
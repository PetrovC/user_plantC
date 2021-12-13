import HeaderComponent from '../../../containers/HeaderComponent/HeaderComponent'
import { createTheme, TextField, ThemeProvider } from "@mui/material";
import CommButtons from '../../../containers/CommButtons/CommButtons';
import useSelectedMission from '../../../hooks/selectedMissionHook';
import './detailMission.scss'

const DetailMission = () => {

    
    const selectedMission = useSelectedMission()

    const titre = 'Description';

    return(
        <>

        <HeaderComponent value={titre}/>
            {selectedMission && <div className='detail'>
            <TextField disabled label="Date" value={`${selectedMission.date_Debut} - ${selectedMission.date_Fin}`} sx={{padding: 1.5}}/>
            <TextField disabled label="Adresse" value={`${selectedMission.projet?.localisation.adressLine1 || selectedMission.projet?.localisation.adressLine2}, ${selectedMission.projet?.localisation.number}`} sx={{padding: 1.5}}/>
            <TextField disabled label="Localité" value={`${selectedMission.projet?.localisation.zipCode} - ${selectedMission.projet?.localisation.city}`} sx={{padding: 1.5}}/>
            <TextField disabled label="Description" value={selectedMission.description} sx={{padding: 1.5}}/>
            <TextField disabled label="Info Mission" value={selectedMission.type} sx={{padding: 1.5}}/>
        </div>}
        <CommButtons/>
        </>
    )
}

export default DetailMission
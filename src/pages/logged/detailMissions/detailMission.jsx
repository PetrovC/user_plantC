import HeaderComponent from '../../../containers/HeaderComponent/HeaderComponent'
import { TextField } from "@mui/material";
import CommButtons from '../../../containers/CommButtons/CommButtons';
import { useSelector } from 'react-redux';
import { selectMission } from '../../../store/missionsSlice';

const DetailMission = () => {

    const titre = 'Description';

    const selectedMission = useSelector(state => state.missions.selectedMission)

    return(
        <>
        <HeaderComponent value={titre}/>
        {selectMission && <div>
            <TextField disabled label="Date" value={`${selectedMission.startDate} - ${selectedMission.endDate}`}/>
            <TextField disabled label="Adresse" value={selectedMission.adresse}/>
            <TextField disabled label="Localité" value={selectedMission.localite}/>
            <TextField disabled label="Description" value={selectedMission.description}/>
            <TextField disabled label="Info Mission" value={selectedMission.type}/>
        </div>}
        <CommButtons/>
        </>
    )
}

export default DetailMission
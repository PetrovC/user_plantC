import { Alert, Snackbar } from "@mui/material"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { hideAlerte } from "../../store/alertesSlice"

const Alertes = () => {
    
    const alerte = useSelector(state => state.alertes)
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(hideAlerte());
    }
    
    return(
        <>
        <Snackbar
            open={alerte.open}
            autoHideDuration={6000}
            onClose={handleClose}  
        >
        <Alert severity={alerte.severity}>{alerte.message}</Alert>
        </Snackbar>
        </>
    )
}

export default Alertes
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const useSelectedMission = () => {
    const mission = useSelector(state => state.missions.selectedMission);
    const navigate = useNavigate();

    useEffect(() => {
        if (!mission){
            navigate('/');
        }
    }, [mission])

    return mission;
}
export default useSelectedMission;
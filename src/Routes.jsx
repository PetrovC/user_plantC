import { Loggin } from "./pages/loggin/loggin";
import { Admin } from "./pages/logged/Admin";
import { ListMissions } from "./pages/logged/ListMissions/ListMissions"
import DetailMission from "./pages/logged/detailMissions/detailMission";

export const Routes = [
    { path : '', element: <Admin/>, children: [
        { path: '', element: <ListMissions/>},
        { path: 'details', element: <DetailMission/>},
    ]},
    {path: 'login', element: <Loggin/>}
]
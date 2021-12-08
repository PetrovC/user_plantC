import { Loggin } from "./pages/loggin/loggin";
import { Admin } from "./pages/logged/Admin";
import { ListMissions } from "./pages/logged/ListMissions/ListMissions"
import DetailMission from "./pages/logged/detailMissions/detailMission";
import Commentaries from "./pages/logged/Commentaries/Commentaries";

export const Routes = [
    { path : '', element: <Admin/>, children: [
        { path: '', element: <ListMissions/>},
        { path: 'details', element: <DetailMission/>},
        { path: 'commentaries', element : <Commentaries/>}
    ]},
    {path: 'login', element: <Loggin/>}
]
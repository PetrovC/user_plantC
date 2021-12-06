import { Loggin } from "./pages/loggin/loggin";
import { Admin } from "./pages/logged/Admin";
import { ListMissions } from "./pages/logged/ListMissions/ListMissions"

export const Routes = [
    { path : '', element: <Admin/>, children: [
        { path: '', element: <ListMissions/>},
    ]},
    {path: 'login', element: <Loggin/>}
]
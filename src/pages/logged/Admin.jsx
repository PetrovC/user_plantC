import { Outlet } from "react-router";
import { Header } from "../../containers/Header/Header"

export const Admin = ()=>{
    return(
        <>
        <Header/>
        <main>
            <Outlet></Outlet>
        </main>
        </>
    )
}
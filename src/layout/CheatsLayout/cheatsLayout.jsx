import { Outlet } from "react-router-dom"
import { Cheats } from "../../pages/Cheats/cheats"

export const CheatsLayout = () => {
    return <>
        <Cheats />
        <Outlet />
    </>
}
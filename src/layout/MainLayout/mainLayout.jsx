import { Outlet } from "react-router-dom"
import { MainNav } from "../../pages/MainNav/mainNav"

export const MainLayout = () => {
    return <main>
        <MainNav />
        <Outlet />
    </main>
}
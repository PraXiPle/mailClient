import { Outlet } from "react-router-dom"
import {EmailNav} from "../../pages/EmailNav/emailNav"
export const EmialLayout = () => {
return <>
    <EmailNav/>
    <Outlet/>
</>
}
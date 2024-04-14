import { Outlet } from "react-router-dom"
import {EmailList} from "../../pages/EmailList/emailList"

export const EmialListLayout = () => {
return <>
    <EmailList/>
    <Outlet/>
</>
}
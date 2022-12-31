import React from "react"
import { AppMenu } from "../../Components/AppMenu/AppMenu"

interface IAdminSiteProps{

}

export const AdminSite: React.FC<IAdminSiteProps> = function AdminSite (props: IAdminSiteProps)  {
    return(
        <AppMenu/>
    )
}

export default AdminSite;
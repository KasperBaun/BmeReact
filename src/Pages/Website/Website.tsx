import React from "react"
import { NavigationMenu } from "../../Components/Navigation/NavigationMenu";

interface IWebsiteProps{

}

export const Website: React.FC<IWebsiteProps> = function Website (props: IWebsiteProps)  {
    return(
        <NavigationMenu/>
    )
}

export default Website;
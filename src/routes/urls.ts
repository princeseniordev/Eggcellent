import { FunctionComponent } from "react";

import IntroducePage from "./../pages/IntroducePage/IntroducePage";
import Dashboard from "../pages/Dashboard/Dashboard";

export interface URL_PROPS {
    path: string;
    component: FunctionComponent;
    layout: boolean;
}

export const URL_LIST: URL_PROPS[] = [
    // introduce page
    {
        path: '', 
        component: IntroducePage, 
        layout: false, 
    },
    {
        path: '/eggcellent', 
        component: Dashboard,
        layout: true, 
    }
]

import Home from '../pages/Home/index.js';
import Following from '../pages/Following/index.js';
import Profile from '../pages/Profile/index.js';
import Upload from '../components/layout/components/Upload/index.js';
import { HeaderOnly } from '../components/layout/index.js';
import Search from '../pages/search/index.js';

const publicRoutes = [
    {path:'/',component:Home},
    {path:'/following',component:Following},
    {path:'/profile',component:Profile},
    {path:'/search',component:Search , layout : null},
    {path:'/upload',component:Upload ,layout : HeaderOnly}
]
const privateRoutes = [

]
export {publicRoutes,privateRoutes}
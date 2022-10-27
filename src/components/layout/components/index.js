import Header from "./Header/indexs";
import Sidebar from "./sidebar/index.js";
import "./index.scss"

function DefaultLayout ({children}) {
    return ( 
        <div>
            <Header/>
            <div className="container" >
                <Sidebar/>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
     );
}

export default DefaultLayout ;
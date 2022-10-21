import Header from "../components/Header/indexs";
import Sidebar from "../components/sidebar";

function HeaderOnly({children}) {
    return (  
        <div>
            <Header/>
            <div className="container">
                <Sidebar/>
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;
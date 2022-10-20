import Header from './components/layout/components/Header/indexs';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import {publicRoutes} from './routes/index.js';
import DefaultLayout from './components/layout/components/index.js';
import {Fragment} from 'react'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route,index )=>{
            const Page = route.component
            let Layout = DefaultLayout
            if(route.layout) {
              Layout = route.layout
            }else if(route.layout===null){
              Layout = Fragment
            }

            return <Route key={index} path={route.path} element={
            <Layout>
              <Page/>
            </Layout>}/>
          })}
        </Routes>
    </div>
    </Router>
  );
}

export default App;

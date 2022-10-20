import Header from './components/layout/components/Header/indexs';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {publicRoutes} from '~/routes'
import {DefaultLayout} from '~/components/layout'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route,index )=>{
            const layout = route.layout || DefaultLayout;
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page/>}/>
          })}
          
        </Routes>
      <Header/>
    </div>
    </Router>
  );
}

export default App;

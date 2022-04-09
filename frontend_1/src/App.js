import React from 'react';
import { useSelector } from 'react-redux';
import Test from './Views/Pages/Login/Test';
import Login from './Views/Pages/Login/login'
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Sidebar from './Views/sidebar/sidebar'
import Dashboard from './Views/Pages/Dashboard/dashboard'
import ViewBugPage from './Views/Pages/viewBugs'
import authSlice from './Controllers/Redux/authSlice';
import CreateBug from './Views/Components/Bug Create & edit/bugForm'


function App() {
  const {auth} = useSelector(state=>state)
  return (
  <Router>
  {!auth.LoggedIn ? <Login/> :
    <>
      <Sidebar />
      {/* <ViewBugPage /> */}
      <Switch>
        <Route path="/" exact><Dashboard /></Route>
        <Route path="/viewbugs"><ViewBugPage/></Route>
        <Router path="/create"><div className='page-container'><CreateBug title="Create Bug" /></div></Router>
      </Switch>
      
    </>
  }
  </Router>
    
    
  );
}

export default App;

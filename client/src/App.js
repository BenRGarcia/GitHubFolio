import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import './App.css';
import {DashboardPage} from "./pages/Dashboard/dashboardPage";
import HomePage from "./pages/Home/homePage";
import PublicViewPage from "./pages/PublicView/publicView";
import {NotFound} from "./components/NotFound/NotFound";
import { UploadImageExample } from './pages/UploadImageExample/UploadImageExample';
// import ComposedComponent from './components/Authentication/Authentication'


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/dashboard" component={ComposedComponent(DashboardPage)} /> */}
        <Route path="/dashboard" component={DashboardPage} />        
        <Route exact path="/portfolio/:id" component={PublicViewPage} />
        {/* Below is Ben's test component for image uploads */}
        <Route exact path="/upload/photo" component={UploadImageExample}/>
        {/* Above is Ben's test component for image uploads */}
        <Route exact path="/pagenotfound" component={NotFound}/>   
        <Route render={() => <Redirect to="/pagenotfound"/>}/>
      </Switch>
    </div>
  </Router>
);

export default App;
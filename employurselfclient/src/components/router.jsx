import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BasicProfile from './profile/basicProfile';
import TaskPage from './employee/tasks';
import SearchPage from './search/search'
import ContentWrapper from './contentwrapper';
import Sidebar from './sidebar';

export default function RouterComponent(props){
  return(
      <Router>
        <Sidebar />
        <ContentWrapper>
          <Switch>
            <Route path="/" 
              render={(_props)=> (<BasicProfile {...props}
              isVisiting = {false}/>)}>
            </Route>
            <Route path="/visit" 
              render={(_props)=> (<BasicProfile {...props}  
              isVisiting = {true}/>)}>
            </Route>
            <Route path='/question' component = {TaskPage}></Route>
            <Route path = '/search' component = {SearchPage}></Route>
          </Switch>
        </ContentWrapper>
      </Router>
  )
}
//<Sidebar />
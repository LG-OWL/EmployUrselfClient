import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import BasicProfile from './profile/basicProfile';
import TaskPage from './employee/tasks';
import ContentWrapper from './contentwrapper';
import Sidebar from './sidebar';
import CodingTests from './codingtest/codingtest'

export default function RouterComponent(props){
  return(
      <Router>
        <Sidebar />
        <Switch>
          <ContentWrapper>
            <Route exact path="/" 
              render={(_props)=> (<BasicProfile {...props} {..._props}
              isVisiting = {false}/>)}>
            </Route>
            <Route path="/visit" 
              render={(_props)=> (<BasicProfile {...props}  {..._props}
              isVisiting = {true}/>)}>
            </Route>
            <Route path='/question' 
              render={(_props)=> (<TaskPage {...props}  {..._props} />)}>
            </Route>
            <Route path='/applications' 
              render={(_props)=> (<CodingTests {...props}  {..._props} />)}>
            </Route>
          </ContentWrapper>
        </Switch>        
      </Router>
  )
}
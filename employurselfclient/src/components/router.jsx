import { BrowserRouter as Router, Route} from 'react-router-dom';
import BasicProfile from './profile/basicProfile';
import TaskPage from './employee/tasks';

export default function RouterComponent(props){
    return(
        <Router>
          <Route path="/" 
            render={(_props)=> (<BasicProfile {...props}
            isVisiting = {false}/>)}>
          </Route>
          <Route path="/visit" 
            render={(_props)=> (<BasicProfile {...props}  
            isVisiting = {true}/>)}>
          </Route>
          <Route path='/question' component = {TaskPage}></Route>
      </Router>
    )
}
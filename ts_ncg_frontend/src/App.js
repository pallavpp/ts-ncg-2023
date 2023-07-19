import Home from './Home'
import Create from './Create'
import ViewList from './ViewList'
import Render from './Render'
import NotFound from './NotFound'
import Delete from './Delete'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/view">
              <ViewList />
            </Route>
            <Route exact path="/view/:id">
              <Render />
            </Route>
            <Route exact path="/del/:id">
              <Delete />
            </Route>
            <Route path = "*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

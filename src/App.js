import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { useEffect } from 'react';
import { connectWithWebSocket } from './utils/wssConnection/wssConnection';
import Dashboard from './Dashboard/Dashboard';
import LoginPage from './LoginPage/LoginPage';
import CreateRoom, { UrlId } from './createRoom/createRoom';

const { v4: uuidv4 } = require('uuid');

var iid = uuidv4();

function App () {
  useEffect(() => {
    connectWithWebSocket();
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
        {/* <Route path="/">
          <CreateRoom exact component={CreateRoom} />
        </Route> */}

      </Switch>
    </Router>
  );
}

export default App;

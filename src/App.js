import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserList from './components/users/UserList';
import Camera from './components/camera/Camera';
import Menu from './components/misc/MainMenu';
import FindObject from './components/camera/FindObject';
import Home from './components/misc/Home'


class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/users" component={UserList} />
              <Route exact path="/images" component={Camera} />
              <Route exact path="/object" component={FindObject} />
              <Route exact path="/menu" component={Menu} />
              <Route exact path="/" component={Home} />
              <Redirect to="/"/>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

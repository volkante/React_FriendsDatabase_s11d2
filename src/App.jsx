import React from 'react';
import './index.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <LoginForm />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/friends/add" component={AddFriend} />
          <Route path="/" component={FriendsList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

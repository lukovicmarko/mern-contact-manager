import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import setAuthToken from '../utils/setAuthToken';

import Navbar from '../components/layout/Navbar';
import About from '../components/pages/About';
import Home from '../components/pages/Home';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import Alert from '../components/layout/Alert';
import PrivateRouting from '../components/routing/PrivateRouting';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);
    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <div className="container">
                    <Alert />
                    <Switch>
                        <PrivateRouting exact path="/" component={Home} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/about" component={About} />
                        {/* <Route component={NotFoundPage} /> */}
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
};

export default App;


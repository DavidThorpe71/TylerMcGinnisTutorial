import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';
import Battle from "./Battle";
import NotFound from './NotFound';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/battle' component={Battle} />
                        <Route path='/popular' component={Popular} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

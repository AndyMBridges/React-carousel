//@flow
import React, {Component} from 'react';
import Home from './containers/home';
import {GlobalStyle} from './theme/GlobalStyle';

class App extends Component<{}> {

    render() {

        return (
            <div className="wrapper">
                <GlobalStyle />
                <Home />
            </div>
        );
    }
}

export default App;

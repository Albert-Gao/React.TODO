import React from 'react'
import ReactDOM from 'react-dom'
import {First} from './Components'
import {AppContainer} from 'react-hot-loader'

//TODO: Add test case later.


const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(First)

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./Components', () => {
        render(First)
    });
}
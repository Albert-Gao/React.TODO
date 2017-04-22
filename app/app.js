import React from 'react'
import ReactDOM from 'react-dom'
import {First, Greeting} from './Components'

//TODO: Add test case later.


const render = (Component) => {
    ReactDOM.render(
        <Component/>,
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

import React from 'react'
import ReactDOM from 'react-dom'

//TODO: Add Webpack later.

const Greeting = (
    <h2>I feel good!</h2>
);

class First extends React.Component{
    render(){
        return(
            <div>
                {Greeting},
                <h1>Hello {this.props.myname}</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <First myname="Albert!"/>,
    document.getElementById('root')
)
import React from 'react'

//TODO: Add test case later.

export class First extends React.Component{
    render(){
        return(
            <div>
                <h1>Hello {this.props.myname}</h1>
            </div>
        );
    }
}


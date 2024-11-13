import React from 'react';

class Child extends React.Component{
    render(){
        return(
            <div>
                Name:{`${this.props.fName} ${this.props.lName}`}
            </div>
        )
    }
}

export default Child;
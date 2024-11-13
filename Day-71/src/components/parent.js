import React from 'react';
import Child from './child';

class Parent extends React.Component{
    render(){
        return(
            <div>
                <Child fName="Tony" lName="Stark"/>
                <Child fName="James" lName="Mary"/>
                <Child fName="Vikaram" lName="Pathod"/>
            </div>
        )
    }
}

export default Parent;
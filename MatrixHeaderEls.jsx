import React from 'react';

class MatrixHeaderEl extends React.Component {

	render(){  
        let tableHeaders = {
            padding: '10px',
        }   
		return (
        
            <th style={tableHeaders}>{this.props.HeaderEl}</th>
            
         
		)
	}
}


export default MatrixHeaderEl
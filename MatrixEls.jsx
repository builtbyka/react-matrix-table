import React from 'react';
import Input from './Inputs.jsx';
import Textarea from './Textarea.jsx';

class MatrixEl extends React.Component {

	render(){    
        let tdInput = (this.props.inpType === 'textarea' ? <Textarea/> : <Input updateAnswers={this.props.updateAnswers} type={this.props.inpType} name={this.props.names} val={this.props.inpValues}/>);
		let tableTD = {
            borderLeft: '1px solid #eee',
            padding: '5px',
        }
        return (
           <td style={tableTD}>{tdInput}</td>
		)
	}
}


export default MatrixEl
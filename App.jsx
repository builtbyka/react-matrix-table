import React from 'react';
import MatrixInput from './MatrixInput.jsx';

class App extends React.Component {

	constructor(props){
		super(props);
        this.state = {
            options : ['Heading 1', 'Heading 2', 'Heading 3'],
            inptype : 'radio',
            labels : ['Label 1','Label 2','Label 3'],
        };
	}
	render(){
		return (
			<div>
                 <MatrixInput options={this.state.options} type={this.state.inptype} questions={this.state.labels}/>
			</div>
		)
	}
}

export default App
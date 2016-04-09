import React from 'react';
import MatrixHeaderRow from './MatrixHeaderRow.jsx';
import MatrixRow from './MatrixRow.jsx';

class Matrix extends React.Component {

	render(){
         let ElsAmount = this.props.options.length,
            tableStyle = {
                border: '1px solid #eee',
                marginLeft: '2%',
                marginTop: '20px',
                textAlign: 'center',
                width: '96%',
            },
            tableHeader = {
                background: '#eee', 
            },
            button = {
                float: 'right',  
                marginRight: '2%',
                marginTop: '10px',
            },
            counter = 0,
            MatrixRows = this.props.questions.map(
                td => {
                    counter ++;
                    return(
                    <MatrixRow key={counter} BodyRows={td} BodyVals={this.props.options} TdAmount={ElsAmount} InputType={this.props.type} updateAnswers={this.props.updateAnswers}/>
                    )
                }
            )
		return (
            <div>
                <table style={tableStyle}>
                    <thead style={tableHeader}>
                        <MatrixHeaderRow  HeaderRows={this.props.options}/>
                    </thead>
                    <tbody>
                        {MatrixRows}
                    </tbody>
                </table>
                <button style={button}>Submit</button>
            </div>
		)
	}
}

export default Matrix
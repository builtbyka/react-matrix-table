import React from 'react';

class Inputs extends React.Component {
	render(){
            
        let {type, name, val} = this.props;

		return (
           <div>
            <input type={type} name={name} value={val}/>
          </div> 
		)
	}
}


export default Inputs
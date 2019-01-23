import React, { Component } from 'react';

class Journal extends Component {
	render(){
		return(
			<div>
				<button>back</button>
				<input type="text" name="journal" />
				<button>save</button>
			</div>
			)
	};
}

export default Journal;
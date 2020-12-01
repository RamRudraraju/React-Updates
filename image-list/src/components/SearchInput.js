import React from 'react';

class SearchInput extends React.Component {

	state = { entry: '' }
	
	onFormSubmit = (event) => {  // v-50 : solving the issue with Arrow Function
		event.preventDefault()                      // Step 2) 
		this.props.onSearchSubmit(this.state.entry) // Passing the Data from Child Component to Parent
	}                                                                        // Search I/p to App.js
													// props are allways used in Func Based comp
													//    only diff in Class Based Comp is this.props
													// Insters of props
	render() {
		return(
			<div className='ui segment' >
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<div className='field'>
						<div className='ui massive icon input'>
							<input 
								type="text" 
								placeholder='search...' 
								onChange={(event) => this.setState({entry:event.target.value})}
								value={this.state.entry} 
							/>
							<i className='search icon'></i>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchInput;
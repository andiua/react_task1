import { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
	state = {
		text: ''
	}

	onValueChange = e => {
		this.setState( (prevState) => {
			return	(
				prevState.text = e.target.value
			)
		})
	}

	onSubmit = e => {
		e.preventDefault();
		if(this.state.text === '') {
			this.setState( {
				text: 'Введіть якийсь текст'
			})
		} else {
			this.props.onAdd(this.state.text);
			this.setState( {
				text: ''
			})
		}
	}
 	render() {
		return (
			<form onSubmit={this.onSubmit} className="bottom-panel d-flex">
				<input 
					onChange={this.onValueChange}
					value={this.state.text}
					type="text" 
					placeholder="Про що ви думаєте зараз?"
					className="form-control new-post-label" />
					<button 
						type="submit"
						className="btn btn-outline-secondary">
						Додати
					</button>
				</form>
		)
	}
}
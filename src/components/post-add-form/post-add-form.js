import { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
	state = {
		text: '',
		classNames: 'form-control new-post-label',
	};

	onValueChange = e => {
		this.setState(prevState => {
			return {
				text: e.target.value,
				classNames: prevState.classNames.replace(' error', ''),
			};
		});
	};

	onSubmit = e => {
		e.preventDefault();
		if (this.state.text === '') {
			this.setState(prevState => {
				return { classNames: prevState.classNames + ' error' };
			});
		} else {
			this.props.onAdd(this.state.text);
			this.setState(prevState => {
				return {
					text: '',
					classNames: prevState.classNames.replace(' error', '')
				};
			});
		}
	};

	render() {
		return (
			<form onSubmit={this.onSubmit} className="bottom-panel d-flex">
				<input
					onChange={this.onValueChange}
					value={this.state.text}
					type="text"
					placeholder="Про що ви думаєте зараз?"
					className={this.state.classNames}
				/>
				<button type="submit" className="btn btn-outline-secondary">
					Додати
				</button>
			</form>
		);
	}
}

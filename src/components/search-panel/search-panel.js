import { Component } from 'react';
import './search-panel.css';

export default class Searchpanel extends Component {
	state = {
		term: ''
	}
	onUpDateSearch = (e) => {
		const term = e.target.value;
		this.setState({term}) 
		this.props.onUpDateSearch(term);
	}
	render() {
		return (
			<input 
				onChange={this.onUpDateSearch}
				type="text" 
				className="form-control search-input"
				placeholder="Пошук по записам" />
		)
	}
}
import { Component } from 'react';
import { Button } from 'reactstrap'; //практика використання компонентів бутстрапа
import './post-status-filter.css';

export default class PostStatusfilter extends Component {
	buttons = [
		{name: 'all', label: 'Усі'},
		{name: 'like', label: 'Сподобались'},
		{name: 'important', label: 'Важливі'},
	]
	render() {
		const btns = this.buttons.map( ({name, label}) => {
			const active = this.props.activeFilter === name;
			const clazz = active ? 'info' : 'outline-secondary'

			return (
				<Button 
					onClick = { () => this.props.onFilterSelect(name)}
					key={name} 
					color={clazz}
					>{label}</Button>
			)
		})
		return (
			<div className="btn-group">
				{btns}
				{/* 	<Button color="info"></Button>
				<Button outline color="secondary">Сподобались</Button> */}
			</div>
		);
	}
};
import { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			important: false,
			like: false,
		}
	}

	onImportant = () => { //прив'язка контекста виклику es9
		this.setState( ({important}) => ({
			important: !important //якщо тру робить фолс і навпаки
		})) 
	}

	onLike = () => {
		this.setState( ({like}) => ({
			like: !like
		})) 
	}

	render() {
		const {label} = this.props;
		const {important, like} = this.state;
		let classNames = 'app-list-item d-flex justify-content-between';

		if (important) {
			classNames += ' important';
		}
		if (like) {
			classNames += ' like';
		}
		
		return (
			<div className={classNames}>
				<span 
				onClick={this.onLike}
				className="app-list-item-label">
					{label}
				</span>
				<div className="d-flex justify-content-center align-items-center">
					<button 
					onClick={this.onImportant}
					type="button" 
					className="btn-star btn-sm ">
						<i className="fas fa-star"></i>
					</button>
					<button type="button" className="btn-trash btn-sm"><i className="far fa-trash-alt"></i></button>
				<i className="fas fa-heart"></i>
				</div>
			</div>
		)
	}
}
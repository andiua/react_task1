import { Component } from 'react';
import './post-list-item.scss';

export default class PostListItem extends Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		important: props.important,
	// 		like: false,
	// 	};
	// 	this.onLike = () => {
	// 		this.setState(({ like }) => ({
	// 			like: !like,
	// 		}));
	// 	};
	// }
	// рівнозначно тому, що в constructor(props). це es9 classfields
	// вже неактуально, ми написали їх в app.js 
	// state = {
	// 	important: this.props.important,
	// 	like: false,
	// };
	// onImportant = () => { 
	// 	//прив'язка контекста виклику es9
	// 	this.setState(prevState => ({ //хоча можна і просто important передати
	// 		important: !prevState.important, //якщо тру робить фолс і навпаки
	// 	}));
	// };

	// onLike = () => {
	// 	this.setState(({ like }) => ({
	// 		like: !like,
	// 	}));
	// };

	render() {
		const { label, onDelete, onToggleImportant, onToggleLiked, important, like  } = this.props;
		// const { important, like } = this.state; тепер отримуємо з props
		let classNames = 'app-list-item d-flex justify-content-between';

		if (important) {
			classNames += ' important';
		}
		if (like) {
			classNames += ' like';
		}

		return (
			<div className={classNames}>
				<span onClick={onToggleLiked} className="app-list-item-label">
					{label}
				</span>
				<div className="d-flex justify-content-center align-items-center">
					<button onClick={onToggleImportant} type="button" className="btn-star btn-sm ">
						<i className="fas fa-star"></i>
					</button>
					<button onClick={onDelete} type="button" className="btn-trash btn-sm">
						<i className="far fa-trash-alt"></i>
					</button>
					<i className="fas fa-heart"></i>
				</div>
			</div>
		);
	}
}

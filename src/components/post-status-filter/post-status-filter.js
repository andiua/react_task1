import { Button } from 'reactstrap'; //практика використання компонентів бутстрапа
import './post-status-filter.css';

const PostStatusfilter = () => {
	return (
		<div className="btn-group">
			<Button color="info">Усі</Button>
			<Button outline color="secondary">Сподобались</Button>
		</div>
	);
};

export default PostStatusfilter;
import './post-status-filter.css';

const PostStatusfilter = () => {
	return (
		<div className="btn-group">
			<button type="button" className="btn btn-info">Все</button>
			<button type="button" className="btn btn-outline-secondary">Сподобались</button>
		</div>
	);
};

export default PostStatusfilter;
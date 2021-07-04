import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
	return (
		<div action="" className="bottom-panel d-flex">
			<input 
				type="text" 
				placeholder="Про що ви думаєте зараз?"
				className="form-control new-post-label" />
				<button 
					onClick={() => onAdd('Hello')}
					type="submit"
					className="btn btn-outline-secondary">
					Додати
				</button>
			</div>
	)
}

export default PostAddForm;
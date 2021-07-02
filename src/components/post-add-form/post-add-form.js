import './post-add-form.css';

const PostAddForm = () => {
	return (
		<form action="" className="bottom-panel d-flex">
			<input 
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

export default PostAddForm;
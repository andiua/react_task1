import { ListGroup, ListGroupItem } from 'reactstrap'; //практика використання компонентів бутстрапа
import PostListItem from '../post-list-item';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
	const elements = posts.map(item => {
		const { id, ...itemProps } = item;
		return (
			<ListGroupItem key={id}>
				<PostListItem
					{...itemProps}
					// приймаємо з апп через пропси і передаємо функцію в PostListItem через пропси.
					onDelete={() => onDelete(id)}
					onToggleImportant={() => onToggleImportant(id)}
					onToggleLiked={() => onToggleLiked(id)}
				/>
			</ListGroupItem>
		);
	});
	return <ListGroup className="app-list">{elements}</ListGroup>;
};

export default PostList;

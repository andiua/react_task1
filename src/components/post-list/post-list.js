import { ListGroup, ListGroupItem } from 'reactstrap'; //практика використання компонентів бутстрапа
import PostListItem from '../post-list-item';

const PostList = ({ posts, onDelete }) => {
	const elements = posts.map(item => {
		const { id, ...itemProps } = item;
		return (
			<ListGroupItem key={id}>
				<PostListItem
					{...itemProps}
					// приймаємо з апп через пропси і передаємо функцію в PostListItem через пропси.
					onDelete={() => onDelete(id)}
				/>
			</ListGroupItem>
		);
	});
	return <ListGroup className="app-list">{elements}</ListGroup>;
};

export default PostList;

import { ListGroup, ListGroupItem } from 'reactstrap'; //практика використання компонентів бутстрапа
import PostListItem from '../post-list-item';

const PostList = ({posts}) => {
	const elements = posts.map((item) => {
		const {id, ...itemProps} = item;
		return <ListGroupItem key={id} >
				<PostListItem {...itemProps} />
			</ListGroupItem>
	});
	return (
		<ListGroup className="app-list">
			{elements}
		</ListGroup>
	)
}

export default PostList;
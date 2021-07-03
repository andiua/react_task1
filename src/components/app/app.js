import AppHeader from '../app-header';
import Searchpanel from '../search-panel';
import PostStatusfilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
// import styles from './app.module.scss'; //практика з модулем
import styled from 'styled-components'; //практика з компонентами

const AppBlock = styled.section`
	margin: 0 auto;
	max-width: 800px;
`;

//наслідування компонента із додатковими стилями
const StyledAppBlock = styled(AppBlock)`
	background-color: lightblue;
`

const App = () => {
	const data = [
		{ label: 'Going to learn React', id: 'sdsg' },
		{ label: 'That is so nice!', important: true, id: 'dsfgh' },
		{ label: 'I`ve benn little tired...', important: true, id: 'dhht' },
	];
	return (
		// <div className={styles.app}> //практика з модулем
		<StyledAppBlock as="div">
			<AppHeader />
			<div className="search-panel d-flex">
				<Searchpanel />
				<PostStatusfilter />
			</div>
			<PostList posts={data} />
			<PostAddForm />
		</StyledAppBlock>
	);
};

export default App;

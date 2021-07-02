import AppHeader from '../app-header';
import Searchpanel from '../search-panel';
import PostStatusfilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

const App = () => {
	return (
		<div className="app">
			<AppHeader />
			<div className="search-panel d-flex">
				<Searchpanel />
				<PostStatusfilter />
			</div>
			<PostList />
			<PostAddForm />
		</div>
	);
};

export default App;

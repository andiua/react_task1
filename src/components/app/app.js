import AppHeader from '../app-header';
import Searchpanel from '../search-panel';
import PostStatusfilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

const App = () => {
	const data = [
		{label: "Going to learn React", id: 'sdsg'},
		{label: "That is so nice!", important: true, id: 'dsfgh'},
		{label:"I`ve benn little tired...", important: true, id: 'dhht'},
	]
	return (
		<div className="app">
			<AppHeader />
			<div className="search-panel d-flex">
				<Searchpanel />
				<PostStatusfilter />
			</div>
			<PostList posts={data}/>
			<PostAddForm />
		</div>
	);
};

export default App;

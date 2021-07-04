import { Component } from 'react';
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
`;

export default class App extends Component {
	state = {
		data: [
			{ label: 'Going to learn React', id: 1 },
			{ label: 'That is so nice!', important: true, like: false, id: 2 },
			{ label: 'I`ve benn little tired...', important: true, like: true, id: 3 },
		],
	};
	minId = 4;

	deleteItem = id => {
		this.setState( ({data}) => {
			const index = data.findIndex( elem => elem.id === id )
			const newArr = data.filter((_, i) => i !== index);
			return {
				data: newArr
			}
		});
	}

	addItem = text => {
		const newItem = {
			label: text,
			important: false,
			id: this.minId++
		}
		this.setState(({data}) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		})
	}
	onToggleStatePost = (id, statePost) => { // перший варіант обробки
		this.setState((prevState) => {
			const selectedItem = prevState.data.find((item) => item.id === id);
			return {
			  data: [
				...prevState.data.filter((item) => item.id !== id),
				{ ...selectedItem, [statePost]: !selectedItem[statePost] },
			  ].sort( (a, b) => a.id - b.id ),
			};
		  });
	}

	onToggleImportant = (id) => {
		this.onToggleStatePost(id, 'important');
	  };

	onToggleLiked = id => {  // другий варіант обробки
		this.setState( ({data}) => {
			const index = data.findIndex( elem => elem.id === id );
			const old = data[index]; 
			const newItem = {...old, like: !old.like};
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			return {
				data: newArr
			}
		})
	}

	render() {
		const {data} = this.state;
		const likedPosts = data.filter( elem => elem.like).length;
		const allPosts = data.length;

		return (
			// <div className={styles.app}> //практика з модулем
			<StyledAppBlock as="div">
				<AppHeader 
					allPosts={allPosts} 
					likedPosts={likedPosts} />
				<div className="search-panel d-flex">
					<Searchpanel />
					<PostStatusfilter />
				</div>
				<PostList 
					posts={this.state.data} 
					onDelete={this.deleteItem} 
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked} />
				<PostAddForm 
					onAdd={this.addItem}/>
			</StyledAppBlock>
		);
	}
}

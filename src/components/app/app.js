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
			{ label: 'Going to learn React', id: 'sdsg' },
			{ label: 'That is so nice!', important: true, id: 'dsfgh' },
			{ label: 'I`ve benn little tired...', important: true, id: 'dhht' },
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

	render() {
		return (
			// <div className={styles.app}> //практика з модулем
			<StyledAppBlock as="div">
				<AppHeader />
				<div className="search-panel d-flex">
					<Searchpanel />
					<PostStatusfilter />
				</div>
				<PostList 
					posts={this.state.data} 
					onDelete={this.deleteItem} />
				<PostAddForm 
					onAdd={this.addItem}/>
			</StyledAppBlock>
		);
	}
}

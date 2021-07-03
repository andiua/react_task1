import styled from 'styled-components'; //практика з компонентами
import './app-header.css';

//практика з компонентами
const Header = styled.section` 
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	h1 {
		font-size: 26px;
		:hover{
			color: blue;
		}
	}
	h2{
		color: ${props => props.colored ? 'grey' : 'red'};
		font-size: 1.2rem;
	}
`;
const AppHeader = () => {
	return (
		<Header as="div" colored /* 1. Можемо викоистовувати перейменування тега 2.можемо передавати пропси в style-components */>
			<h1>Andrii babych</h1>
			<h2>5 записів, з них сподобались 0</h2>
		</Header>
	);
};

export default AppHeader;

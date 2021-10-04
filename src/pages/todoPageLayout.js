import styled from 'styled-components';

// Colors

export const white = 'white';
export const colorPrimary = '#4C4C6D';
export const colorSecondary = '#ffe194';
export const colorBackgroundLight = '#E8F6EF';
export const colorBackgroundDarker = '#B8DFD8';

// Layout (styled components)

export const FormPage = styled.div`
	width: auto;
	heigth: 100%;
	margin: 2rem 20%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Header = styled.header`
	width: 600px;
	heigth: 400px;
	background-color: ${white};
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 2px solid ${colorBackgroundLight};
`;

export const HeaderTitle = styled.h1`
	color: ${colorPrimary};
`;

export const TodoSection = styled.section`
	width: 600px;
	heigth: 400px;
	background-color: ${white};
	border-bottom: 2px solid ${colorBackgroundLight};
`;

export const TaskForm = styled.form``;

export const TaskFormLabel = styled.label``;

export const TaskFormInput = styled.input`
	cursor: pointer;
	display: inline-block;
	padding: 9px 15px;
	border: 0;
	line-height: inherit;
	text-decoration: none;
	outline: none;
`;

export const ButtonSubmit = styled.button`
	width: 2rem;
	height: 2rem;
	border-radius: 5px;
	cursor: pointer;
	font-size: 0.8rem;
	border: none;
	margin: 0;
	padding: 0;
	width: auto;
	overflow: visible;
	background: transparent;
	color: inherit;

	line-height: normal;
	-webkit-font-smoothing: inherit;
	-moz-osx-font-smoothing: inherit;
	-webkit-appearance: none;

	& span:hover {
		font-weigth: 800;
	}
`;

export const TaskList = styled.div``;

export const GraphSection = styled.section`
	width: 600px;
	heigth: 400px;
	background-color: ${white};
`;

export const Footer = styled.footer`
	width: 600px;
	heigth: 400px;
`;

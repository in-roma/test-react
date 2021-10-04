import styled from 'styled-components';
import {
	white,
	colorPrimary,
	colorSecondary,
	colorBackgroundLight,
	colorBackgroundDarker,
} from '../UI/colors';

// Layout (styled components)

// Page

export const FormPage = styled.div`
	width: auto;
	height: 100%;
	margin: 0 20%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const PageContent = styled.div`
	width: 50rem;
	display: flex;
	flex-flow: nowrap;
	justify-content: space-between;
	align-items: flex-start;
`;

// Header

export const Header = styled.header`
	width: 50rem;
	height: 6rem;
	background-color: ${white};
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 2px solid ${colorBackgroundLight};
`;

export const HeaderTitle = styled.h1`
	font-size: 1.8rem;
	color: ${colorPrimary};
`;

// Todo section

export const TodoSection = styled.section`
	width: 30rem;
	height: auto;
	margin-top: 2rem;
	background-color: ${white};
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

// Graph (dynamic components are within TodoPage component)

export const GraphContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const GraphText = styled.span`
	font-size: 0.8rem;
	align-self: center;
	margin-top: 1rem;
`;

export const GraphAxisText = styled.span`
	font-size: 0.6rem;
	align-self: center;
`;

export const Footer = styled.footer`
	width: 50rem;
	height: 400px;
`;

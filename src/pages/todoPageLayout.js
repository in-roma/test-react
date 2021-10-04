import styled from 'styled-components';
import {
	white,
	colorPrimary,
	colorBackgroundLight,
	colorBackgroundDarker,
} from '../UI/colors';

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
	height: 4rem;
	background-color: ${white};
	display: flex;
	justify-content: center;
	align-items: center;
	border-bottom: 2px solid ${colorBackgroundLight};
`;

export const HeaderTitle = styled.h1`
	font-size: 1.8rem;
	font-weight: 400;
	color: ${colorPrimary};
`;

// Todo section
export const TodoSection = styled.section`
	width: 28rem;
	height: auto;
	margin-top: 2rem;
	background-color: ${white};
`;

export const TaskForm = styled.form`
	width: 28rem;
	height: 3rem;
	background-color: ${colorBackgroundDarker};
	border-radius: 0.2rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin-bottom: 1rem;
`;

export const TaskFormLabel = styled.label`
	font-size: 0.8rem;
	margin-left: 0.5rem;
	color: ${white};
	font-weight: 500;
`;

export const TaskFormInput = styled.input`
	width: 79%;
	cursor: pointer;
	display: inline-block;
	margin-left: 0.5rem;
	border: 0;
	line-height: inherit;
	text-decoration: none;
	outline: none;
	background-color: ${colorBackgroundDarker};
	color: ${white};
	font-weight: 500;
`;

export const ButtonSubmit = styled.button`
	width: 2rem;
	height: 2rem;
	margin-right: 0.5rem;
	cursor: pointer;
	font-size: 0.8rem;
	border: none;
	outline: none;
	margin: 0;
	padding: 0;
	width: auto;
	overflow: visible;
	background: transparent;
	color: ${white};
	font-weigth: 600;
	line-height: normal;
	-webkit-font-smoothing: inherit;
	-moz-osx-font-smoothing: inherit;
	-webkit-appearance: none;
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

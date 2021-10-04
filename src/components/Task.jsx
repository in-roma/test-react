import React from 'react';
import styled from 'styled-components';
import {
	MdOutlineCheckBoxOutlineBlank,
	MdOutlineCheckBox,
	MdOutlineClear,
} from 'react-icons/md';
import { IconContext } from 'react-icons';

// Colors
import { black, colorBackgroundLight } from '../UI/colors';

//  Components

const TaskContainer = styled.div`
	width: 100%;
	height: 2.4rem;
	display: flex;
	border-radius: 0.2rem;
	justify-content: flex-start;
	align-items: center;
	background-color: ${colorBackgroundLight};
	margin-bottom: 0.5rem;
`;
const TaskSpan = styled.span`
	width: 100%;
	margin-left: 0.5rem;
	font-size: 0.8rem;
	color: 'black';
`;

const Button = styled.button`
	width: 2rem;
	height: 2rem;
	border-radius: 5px;
	margin-right: 0.5rem;
	cursor: pointer;
	font-size: 0.8rem;
	border: none;
	margin: 0;
	padding: 0;
	width: auto;
	overflow: visible;
	background: transparent;
	color: ${black};
	font-weigth: 600;
	line-height: normal;
	-webkit-font-smoothing: inherit;
	-moz-osx-font-smoothing: inherit;
	-webkit-appearance: none;
`;

const checkIcon = (
	<IconContext.Provider value={{ size: '1.7em', className: 'icon-check' }}>
		<MdOutlineCheckBox />
	</IconContext.Provider>
);

const unCheckIcon = (
	<IconContext.Provider value={{ size: '1.7em', className: 'icon-check' }}>
		<MdOutlineCheckBoxOutlineBlank />
	</IconContext.Provider>
);

const deleteIcon = (
	<IconContext.Provider value={{ size: '1.5em', className: 'icon-delete' }}>
		<MdOutlineClear />
	</IconContext.Provider>
);

export default function Task({
	id,
	text,
	status,
	deleteTask,
	changeTaskStatus,
}) {
	return (
		<TaskContainer key={id} id={id}>
			<Button id={id} status={status} onClick={changeTaskStatus}>
				{status ? checkIcon : unCheckIcon}
			</Button>
			<TaskSpan>{text}</TaskSpan>
			<Button id={id} onClick={deleteTask}>
				{deleteIcon}
			</Button>
		</TaskContainer>
	);
}

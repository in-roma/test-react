import React from 'react';
import styled from 'styled-components';

//  Components
import { ButtonSubmit } from '../pages/todoPageLayout';

const TaskContainer = styled.div`
	width: 400px;
	heigth: 2rem;
`;
const TaskSpan = styled.span`
	font-size: 1rem;
	color: 'black';
`;

export default function Task({
	id,
	text,
	status,
	deleteTask,
	changeTaskStatus,
}) {
	return (
		<TaskContainer key={id} id={id}>
			<TaskSpan>{text}</TaskSpan>
			<ButtonSubmit id={id} onClick={deleteTask}>
				Delete
			</ButtonSubmit>
			<ButtonSubmit id={id} status={status} onClick={changeTaskStatus}>
				{status ? 'Done' : 'Undone'}
			</ButtonSubmit>
		</TaskContainer>
	);
}

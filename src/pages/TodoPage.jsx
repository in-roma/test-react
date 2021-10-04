import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

// Components
import Task from '../components/Task';

// Colors
import {
	white,
	black,
	colorPrimary,
	colorSecondary,
	colorBackgroundLight,
	colorBackgroundDarker,
} from '../UI/colors';

// Styled components
import {
	FormPage,
	PageContent,
	Header,
	HeaderTitle,
	TodoSection,
	TaskForm,
	TaskFormLabel,
	TaskFormInput,
	ButtonSubmit,
	TaskList,
	GraphContainer,
	GraphAxisText,
	GraphText,
	Footer,
} from './todoPageLayout';

export default function TodoPage() {
	// InitialState & Local storage
	let todoSaved = JSON.parse(localStorage.getItem('todoApp OOTI'));
	let initialState = todoSaved
		? JSON.parse(localStorage.getItem('todoApp OOTI'))
		: [];

	// States management
	const [tasks, setTasks] = useState(initialState);
	const [fieldText, setFieldText] = useState();

	// Setting input field
	const onChange = (event) => {
		let { value } = event.target;
		setFieldText(value);
	};

	// New task
	const addTask = (event) => {
		event.preventDefault();
		let newTask = {
			id: uuidv4(),
			text: fieldText,
			status: false,
		};
		setTasks([...tasks, newTask]);
	};

	// Change status
	const changeTaskStatus = (index) => (event) => {
		let newList = [...tasks];
		let status = tasks[index].status;

		newList[index].status = status ? false : true;
		setTasks(newList);
	};

	// Delete Task
	const deleteTask = (event) => {
		let { id } = event.currentTarget;

		let newTaskList = tasks.filter((el) => el.id !== id);
		setTasks(newTaskList);
	};

	// Saving todo tasks to local storage
	localStorage.setItem('todoApp OOTI', JSON.stringify(tasks));

	// GraphSection
	const maxHeight = 14;
	const unDoneTasksGraph = parseInt(
		tasks.filter((el) => el.status === false).length
	);
	const doneTasksGraph = parseInt(
		tasks.filter((el) => el.status === true).length
	);

	const GraphSection = styled.section`
		width: 20rem;
		height: ${maxHeight}rem;
		margin: 4rem 0;
		background-color: ${white};
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	`;

	const GraphAxis = styled.div`
		width: 1rem;
		height: ${maxHeight}rem;
		border-right: 1px solid ${black}};
		margin-bottom: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	`;

	const GraphUndone = styled.div`
		width: 8rem;
		height: ${(maxHeight / tasks.length) * unDoneTasksGraph}rem;
		background-color:${colorBackgroundDarker}};
	`;

	const Graphdone = styled.div`
		width: 8rem;
		height: ${(maxHeight / tasks.length) * doneTasksGraph}rem;
		background-color: ${colorBackgroundDarker};
	`;
	console.log('this is unDoneTasksGraph', unDoneTasksGraph);
	console.log('this is doneTasksGraph', doneTasksGraph);

	return (
		<FormPage>
			<Header>
				<HeaderTitle>TODO APP - TEST OOTI</HeaderTitle>
			</Header>
			<PageContent>
				<TodoSection>
					<TaskForm onSubmit={addTask}>
						<TaskFormLabel>Task:</TaskFormLabel>
						<TaskFormInput
							onChange={onChange}
							type="text"
							placeholder=""
							name="inputTask"
							autoFocus
						></TaskFormInput>
						<ButtonSubmit type="submit">Save</ButtonSubmit>
					</TaskForm>
					<TaskList>
						{tasks.map((el, index) => (
							<Task
								id={el.id}
								text={el.text}
								status={el.status}
								deleteTask={deleteTask}
								changeTaskStatus={changeTaskStatus(index)}
							/>
						))}
					</TaskList>
				</TodoSection>
				<GraphSection>
					<GraphAxis>
						<GraphAxisText>
							{tasks.length >= 1 && tasks.length}
						</GraphAxisText>
						<GraphAxisText>
							{tasks.length >= 4 && parseInt(tasks.length / 1.3)}
						</GraphAxisText>
						<GraphAxisText>
							{tasks.length >= 2 && parseInt(tasks.length / 2)}
						</GraphAxisText>
						<GraphAxisText>
							{tasks.length >= 4 && parseInt(tasks.length / 4)}
						</GraphAxisText>
						<GraphAxisText>0</GraphAxisText>
					</GraphAxis>
					<GraphContainer>
						<GraphUndone></GraphUndone>
						<GraphText>Tasks undone: {unDoneTasksGraph}</GraphText>
					</GraphContainer>
					<GraphContainer>
						<Graphdone> </Graphdone>
						<GraphText>Tasks done: {doneTasksGraph}</GraphText>
					</GraphContainer>
				</GraphSection>
			</PageContent>
			<Footer></Footer>
		</FormPage>
	);
}

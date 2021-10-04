import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Components
import Task from '../components/Task';

// Styled components
import {
	FormPage,
	Header,
	HeaderTitle,
	TodoSection,
	TaskForm,
	TaskFormLabel,
	TaskFormInput,
	ButtonSubmit,
	TaskList,
	GraphSection,
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

	return (
		<FormPage>
			<Header>
				<HeaderTitle>Todo App</HeaderTitle>
			</Header>
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
			<GraphSection></GraphSection>
			<Footer></Footer>
		</FormPage>
	);
}

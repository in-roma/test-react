import React, { useState } from 'react';

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
	const [tasks, setTasks] = useState([]);

	// New task

	const onChange = (event) => {
		let { name, value } = event.target;
	};

	const addTask = () => {};

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
					{tasks.forEach((el) => (
						<Task id={el.id} content={el.content} status={status} />
					))}
				</TaskList>
			</TodoSection>
			<GraphSection></GraphSection>
			<Footer></Footer>
		</FormPage>
	);
}

import React from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div``;
const TaskSpan = styled.span``;

export default function Task({ id, content, status }) {
	return (
		<TaskContainer>
			<TaskSpan>{content}</TaskSpan>
		</TaskContainer>
	);
}

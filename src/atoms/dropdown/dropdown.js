import styled from 'styled-components';
import { Card } from 'atoms';
import { SwingIn, SwingOut } from 'animations';

const Dropdown = styled(Card)`
	padding: 14px 0;

	${props => props.display ? SwingIn : SwingOut};
	display: ${props => props.display ? 'block' : 'none'};

	&::after,
	&::before {
		bottom: 100%;
		border: solid transparent;
		content: " ";
		height: 0;
		width: 0;
		position: absolute;
		pointer-events: none;
	}

	&::after {
		border-color: rgba(255, 255, 255, 0);
		border-bottom-color: #ffffff;
		border-width: 9px;
		left: 19px;
		margin-left: -9px;
	}

	&::before {
		border-color: rgba(113, 158, 206, 0);
		border-bottom-color: #ececec;
		border-width: 10px;
		left: 19px;
		margin-left: -10px;
	}
`;

export default Dropdown;

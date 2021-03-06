import React from 'react';
import PropTypes from 'prop-types';

const Clock = ({ type }) => {
	switch (type) {
		case 'colored':
			return (
				<g>
					<circle fill="#FFFFFF" cx="24" cy="24" r="21" />
					<path fill="#43A6DD" d="M24,47C11.31738,47,1,36.68213,1,24S11.31738,1,24,1s23,10.31787,23,23S36.68262,47,24,47z M24,5 C13.52344,5,5,13.52344,5,24s8.52344,19,19,19s19-8.52344,19-19S34.47656,5,24,5z" />
					<path fill="#223E49" d="M24,25c-0.55273,0-1-0.44775-1-1V11c0-0.55225,0.44727-1,1-1s1,0.44775,1,1v13 C25,24.55225,24.55273,25,24,25z" />
					<path fill="#223E49" d="M36,25H24c-0.55273,0-1-0.44775-1-1s0.44727-1,1-1h12c0.55273,0,1,0.44775,1,1S36.55273,25,36,25z" />
					<path fill="#E86C60" d="M14.99902,36c-0.22266,0-0.44629-0.07422-0.63184-0.22607c-0.42773-0.34961-0.49121-0.97949-0.1416-1.40723 l9-11c0.35059-0.42676,0.97949-0.48975,1.40723-0.14062c0.42773,0.34961,0.49121,0.97949,0.1416,1.40723l-9,11 C15.57617,35.875,15.28906,36,14.99902,36z" />
					<circle fill="#223E49" cx="24" cy="24" r="3" />
				</g>
			);
		case 'outline':
			return (
				<g fill="currentColor">
					<circle fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" cx="24" cy="24" r="22" strokeLinejoin="miter" />
					<polyline data-color="color-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeMiterlimit="10" points=" 24,12 24,24 36,24 " strokeLinejoin="miter" />
				</g>
			);
		default:
			return (
				<g fill="currentColor">
					<path fill="currentColor" d="M24,1C11.3,1,1,11.3,1,24s10.3,23,23,23s23-10.3,23-23S36.7,1,24,1z M36,25H24c-0.6,0-1-0.4-1-1V12 c0-0.6,0.4-1,1-1s1,0.4,1,1v11h11c0.6,0,1,0.4,1,1S36.6,25,36,25z" />
				</g>
			);
	}
};

Clock.propTypes = {
	type: PropTypes.oneOf(['colored', 'glyph', 'outline']),
};

Clock.defaultProps = {
	type: 'glyph'
};

export default Clock;

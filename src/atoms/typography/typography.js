import styled from 'styled-components';
import sys from 'system-components';
import { createSkeletonElement } from '@trainline/react-skeletor';
import { fontSize } from 'utils';

const makeH3Component = sys({
	lineHeight: 1.25,
	display: 'inline-block',
	fontFamily: 'fonts.display'
}, 'textAlign', 'space', 'fontWeight', 'fontSize', 'color', 'maxWidth');

const H3Component = styled(makeH3Component).attrs({
	fontSize: props => props.fontSize || [2, 3, 3],
	m: props => props.m || 0,
	mb: props => props.mb || 3,
	is: props => props.is || 'h3'
})`
	${fontSize};
`;

export const H3 = createSkeletonElement(H3Component);

const makeSubtitleComponent = sys(
	'textAlign', 'space', 'fontWeight', 'color'
);

const SubtitleComponent = styled(makeSubtitleComponent).attrs({
	fontSize: props => props.fontSize || [0, 1],
	m: props => props.m || 0,
	mb: props => props.mb || 2,
	is: props => props.is || 'h4',
	fontWeight: props => props.fontWeight || 600,
	color: props => props.color || 'gray.medium'
})`
	display: inline-block;
	letter-spacing: .03rem;
	text-transform: uppercase;
	line-height: 1;
	${fontSize};
`;

export const Subtitle = createSkeletonElement(SubtitleComponent);

const makeContentComponent = sys(
	'space', 'fontSize', 'color', 'lineHeight', 'fontWeight'
);

const makeContent = styled(makeContentComponent).attrs({
	fontSize: props => props.fontSize || [1, 2],
	mb: props => props.mb || 2,
	lineHeight: props => props.lineHeight || 1.5,
	is: props => props.is || 'p'
})`
	${fontSize};
`;

export const Content = createSkeletonElement(makeContent);

const boxUtils = [
	'flex', 'space', 'color', 'display', 'width', 'textAlign', 'lineHeight', 'fontWeight', 'letterSpacing',
	'maxWidth', 'minWidth', 'height', 'maxHeight', 'minHeight', 'borders', 'hover', 'alignSelf', 'justifySelf'
];

const flexBox = [
	'alignItems', 'alignContent', 'justifyContent', 'flexWrap', 'flexBasis', 'flexDirection'
].concat(boxUtils);

const gridBox = [
	'gridGap', 'gridColumnGap', 'gridRowGap', 'gridColumn', 'gridRow', 'gridAutoFlow', 'gridAutoColumns',
	'gridAutoRows', 'gridTemplateColumns', 'gridTemplateRows'
].concat(boxUtils);

export const Box = sys(...boxUtils);
export const FlexBox = sys(...flexBox);
export const GridBox = sys(...gridBox);
import React from 'react';
import PropTypes from 'prop-types';

const MultipleChoice = ({ question, onSelectAnswer }) => {
	let answers = question.answers.map(answer => {
		if (answer._id !== question.chosenAnswer._id) {
			return (
				<div
					key={'QuizQuestionAnswer_' + question._id + '_' + answer._id}
					className={'my-0 dvc-card pointer dvc-card--disabledMinimal'}
					onClick={() => onSelectAnswer(question, answer)}>
					<div className="my-auto">
						<i className={'material-icons pr-2 align-middle'}>radio_button_unchecked</i>
						{answer.name}
					</div>
				</div>
			);
		} else {
			return (
				<div
					key={'QuizQuestionAnswer_' + question._id + '_' + answer._id}
					className={'my-0 dvc-card dvc-card--enabledMinimal'}
					onClick={() => onSelectAnswer(question, answer)}>
					<div className="my-auto">
						<i className={'material-icons pr-2 dvc-primary-text align-middle'}>check_circle</i>
						{answer.name}
					</div>
				</div>
			);
		}
	});
	return (
		<li>
			<div className="pb-1">{question.name}</div>
			<div>{answers}</div>
		</li>
	);
};
MultipleChoice.propTypes = {
	question: PropTypes.object,
	onSelectAnswer: PropTypes.func
};
export default MultipleChoice;
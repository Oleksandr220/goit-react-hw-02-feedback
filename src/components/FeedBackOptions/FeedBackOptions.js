import React from 'react';
import PropTypes from 'prop-types';
import './FeedBackOptions.css';

const feedbackComponents = ({ options, changeFeedback }) => {
  return (
    <div className="button__container">
      {options.map(option => (
        <button
          className="feedback__button"
          onClick={() => changeFeedback(option)}
          key={option.toString()}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

feedbackComponents.propTypes = {
  changeFeedback: PropTypes.func,
  options: PropTypes.node,
};

export default feedbackComponents;

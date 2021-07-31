import React, { Component } from 'react';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import FeedbackComponents from '../FeedBackOptions/FeedBackOptions';
import './FeedBack.css';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeFeedback = e => {
    const currBtn = e.target.outerText;
    if (currBtn === 'Good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
      return;
    }
    if (currBtn === 'Neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
      return;
    }
    if (currBtn === 'Bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
      return;
    }
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countFeedbackPercentage = () => {
    return Math.ceil((this.state.good * 100) / this.countTotalFeedback());
  };

  options = ['Good', 'Neutral', 'Bad'];

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="feedback__container">
        <h1 className="feedback__title">Feedbacks</h1>
        <Section title="Please leave feedback">
          <FeedbackComponents
            options={this.options}
            changeFeedback={this.changeFeedback}
          />
        </Section>
        <Section title="Statistics">
          {good > 0 || neutral > 0 || bad > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              feedbackPercentage={this.countFeedbackPercentage()}
            />
          ) : (
            <p>No feedback given</p>
          )}
        </Section>
      </div>
    );
  }
}

export default FeedBack;

import React, { Component } from 'react';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import FeedbackComponents from './components/FeedBackOptions/FeedBackOptions';
import './App.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeFeedback = feedBack => {
    const arrayState = Object.keys(this.state);
    arrayState.forEach(el => {
      if (el === feedBack.toLowerCase()) {
        this.setState(prevState => ({
          [el]: prevState[el] + 1,
        }));
        return;
      }
    });
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
          {this.countTotalFeedback() > 0 ? (
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

export default App;

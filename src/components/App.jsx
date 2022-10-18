import { GlobalStyles } from './GlobalStyles/GlobalStyles.styled';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import React from 'react';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = event => {
    const actionName = event.target?.dataset?.action;

    this.setState(prevState => {
      return { [actionName]: prevState[actionName] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage(total) {
    return Math.round((this.state.good * 100) / total);
  }

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);

    let statistics;
    total
      ? (statistics = (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ))
      : (statistics = (
          <Notification message="There is no feedback"></Notification>
        ));

    return (
      <>
        <GlobalStyles />
        <Section title="Please live feedback">
          <FeedbackOptions
            onButtonClick={this.handleButtonClick}
            buttons={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">{statistics}</Section>
      </>
    );
  }
}

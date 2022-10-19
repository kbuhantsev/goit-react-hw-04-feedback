import { GlobalStyles } from './GlobalStyles/GlobalStyles.styled';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
import React, { useState } from 'react';

const initialState = { good: 0, neutral: 0, bad: 0 };

export default function App() {
  const [state, setState] = useState(initialState);

  const handleButtonClick = event => {
    const actionName = event.target.name;

    setState(prevState => {
      return { ...prevState, [actionName]: prevState[actionName] + 1 };
    });
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, curr) => acc + curr, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good * 100) / countTotalFeedback());
  };

  return (
    <>
      <GlobalStyles />
      <Section title="Please live feedback">
        <FeedbackOptions
          onButtonClick={handleButtonClick}
          buttons={Object.keys(state)}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

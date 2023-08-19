import React, { useState } from 'react';

import Section from 'components/Section/Section';
import Feedback from 'components/Feedback/Feedback';
import Statistics from 'components/Statistics/Statistics';
import Notification from 'components/Notification/Notification';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackCount = evt => {
    const btn = evt.target.name;

    if (btn === 'good') {
      setGood(prevGood => prevGood + 1);
    }
    if (btn === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    }
    if (btn === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const totalFeedback = () => {
    return good + neutral + bad;
  };

  const positiveFeedbackPersentage = () => {
    return Math.round((100 * good) / (good + neutral + bad));
  };

  const options = Object.keys({ good, neutral, bad });
  return (
    <>
      <Section title="Please leave your feedback">
        <Feedback options={options} onLeaveFeedback={feedbackCount} />
      </Section>

      <Section title="Statistics">
        {totalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positive={positiveFeedbackPersentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};

export default App;
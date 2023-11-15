import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';

export const Feedback = () => {
  // const [feedback, setFeedback] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  // const onLeaveFeedback = option => {
  //   setFeedback(prevFeedback => ({
  //     ...prevFeedback,
  //     [option]: prevFeedback[option] + 1,
  //   }));
  // };

  // const { good, neutral, bad } = feedback;

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateGood = () => {
    setGood(prevState => (prevState += 1));
  };
  const updateNeutral = () => {
    setNeutral(prevState => (prevState += 1));
  };
  const updateBad = () => {
    setBad(prevState => (prevState += 1));
  };

  const total = good + neutral + bad;
  const positiveFeedback = total === 0 ? 0 : Math.round((good / total) * 100);

  return (
    <div>
      <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            onUpdateGood={updateGood}
            onUpdateNeutral={updateNeutral}
            onUpdateBad={updateBad}
            // options={Object.keys(feedback)}
            // onLeaveFeedback={onLeaveFeedback}
          />
        }
      />
      <Section
        title="Statistic"
        children={
          total !== 0 && (
            <Statistics
              good={good}
              bad={bad}
              neutral={neutral}
              total={total}
              positiveFeedback={positiveFeedback}
            />
          )
        }
      />
    </div>
  );
};

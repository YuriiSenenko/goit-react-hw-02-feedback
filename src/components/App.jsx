import React from 'react';
import { Title } from 'components/Section/Section';
// import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { StatisticsTitle } from 'components/StatisticsTitle/StatisticsTitle';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

let total = 0;
let percentage = 0;

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  increment = event => {
    this.setState(prevState => {
      return { [event.target.name]: prevState[event.target.name] + 1 };
    });
  };

  countTotalFeedback = (good, neutrals, bad) => {
    total = good + neutrals + bad;
    return total;
  };

  countPositiveFeedbackPercentage = (total, good) => {
    percentage = (good * 100) / total;
    console.log('good', good);
    console.log('total', total);
    console.log('percentage', percentage);
    return percentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <section>
        <Title>Please leave feedback</Title>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.increment}
        />

        <StatisticsTitle good={good} neutrals={neutral} bad={bad}>
          Statistics
        </StatisticsTitle>

        {this.countTotalFeedback(good, neutral, bad) === 0 ? (
          <Notification>There is no feedback</Notification>
        ) : (
          <Statistics
            good={good}
            neutrals={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        )}
      </section>
    );
  }
}

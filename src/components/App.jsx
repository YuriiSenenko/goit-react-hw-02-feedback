import React from 'react';
import { Title } from 'components/Title/Title';
import { Buttons } from 'components/Buttons/Buttons';
import { StatisticsTitle } from 'components/StatisticsTitle/StatisticsTitle';
import { Statistics } from 'components/Statistics/Statistics';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handlerGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  handlerNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handlerBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <div>
        <Title>Please leave feedback</Title>
        <Buttons
          onGood={this.handlerGood}
          onNeutrals={this.handlerNeutral}
          onBad={this.handlerBad}
        />
        <StatisticsTitle>Statistics</StatisticsTitle>
        <Statistics
          good={this.state.good}
          neutrals={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}

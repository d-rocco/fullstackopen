import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ clickHandler, name }) => {
  return <button onClick={clickHandler}>{name}</button>;
};

const Buttons = ({ goodHandler, neutralHandler, badHandler }) => {
  return (
    <>
      <Button clickHandler={goodHandler} name="good" />
      <Button clickHandler={neutralHandler} name="neutral" />
      <Button clickHandler={badHandler} name="bad" />
    </>
  );
};

const StatLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.num}</td>
    </tr>
  );
};

const Stats = ({ stats, good, neutral, bad }) => {
  if (stats === 0) {
    return <History />;
  }
  return (
    <table>
      <tbody>
        <StatLine text="good" num={good} />
        <StatLine text="neutral" num={neutral} />
        <StatLine text="bad" num={bad} />
        <StatLine text="all" num={stats} />
        <StatLine text="average" num={(good - bad) / stats} />
        <StatLine text="positive" num={(good / stats) * 100 + " %"} />
      </tbody>
    </table>
  );
};

const History = () => <h3>No feedback given</h3>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allStats, setStats] = useState(0);
  const feedbackHeader = "give feedback";
  const statisticsHeader = "statistics";

  const handleGood = () => {
    setGood(good + 1);
    setStats(allStats + 1);
  };

  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setStats(allStats + 1);
  };

  const handleBad = () => {
    setBad(bad + 1);
    setStats(allStats + 1);
  };

  return (
    <div>
      <Header title={feedbackHeader} />
      <Buttons
        goodHandler={handleGood}
        neutralHandler={handleNeutral}
        badHandler={handleBad}
      />
      <Header title={statisticsHeader} />
      <Stats stats={allStats} good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;

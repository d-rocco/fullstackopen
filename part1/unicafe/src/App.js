import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ clickHandler, name }) => {
  return <button onClick={clickHandler}>{name}</button>;
};

const Stat = (props) => {
  if (props.stats === 0) {
    return;
  }
  return (
    <div>
      {props.text} {props.num}
    </div>
  );
};

const History = ({ stats }) => {
  if (stats === 0) {
    return <h3>No feedback given</h3>;
  }
};

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
      <Button clickHandler={handleGood} name="good" />
      <Button clickHandler={handleNeutral} name="neutral" />
      <Button clickHandler={handleBad} name="bad" />
      <Header title={statisticsHeader} />
      <History stats={allStats} />
      <Stat stats={allStats} text="good" num={good} />
      <Stat stats={allStats} text="neutral" num={neutral} />
      <Stat stats={allStats} text="bad" num={bad} />
      <Stat stats={allStats} text="all" num={allStats} />
      <Stat stats={allStats} text="average" num={(good - bad) / allStats} />
      <Stat
        stats={allStats}
        text="positive"
        num={(good / allStats) * 100 + " %"}
      />
    </div>
  );
};

export default App;

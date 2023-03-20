import { useState } from "react";

const Header = ({ title }) => <h1>{title}</h1>;

const Button = ({ clickHandler, name }) => {
  return <button onClick={clickHandler}>{name}</button>;
};

const Stat = ({ text, num }) => {
  return (
    <div>
      {text} {num}
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackHeader = "give feedback";
  const statisticsHeader = "statistics";

  return (
    <div>
      <Header title={feedbackHeader} />
      <Button clickHandler={() => setGood(good + 1)} name="good" />
      <Button clickHandler={() => setNeutral(neutral + 1)} name="neutral" />
      <Button clickHandler={() => setBad(bad + 1)} name="bad" />
      <Header title={statisticsHeader} />
      <Stat text="good" num={good} />
      <Stat text="neutral" num={neutral} />
      <Stat text="bad" num={bad} />
    </div>
  );
};

export default App;

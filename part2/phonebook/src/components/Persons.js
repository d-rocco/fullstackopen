const Persons = ({ persons }) => {
  return (
    <div>
      {persons.map((person) => (
        <Person key={person.name} name={person.name} />
      ))}
    </div>
  );
};

const Person = (props) => {
  return <div>{props.name}</div>;
};

export default Persons;

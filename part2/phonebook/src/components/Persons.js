const Persons = ({ persons }) => {
  return (
    <>
      {persons.map((person) => (
        <Person key={person.name} name={person.name} number={person.number} />
      ))}
    </>
  );
};

const Person = (props) => {
  return (
    <div>
      {props.name} {props.number}
    </div>
  );
};

export default Persons;

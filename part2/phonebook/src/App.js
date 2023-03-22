import { useState, useEffect } from "react";
import axios from "axios";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import Filter from "./components/Filter";
import personsService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  const addPerson = (event) => {
    event.preventDefault();
    const names = persons.map((person) => `${person.name.toLowerCase()}`);
    if (newName !== "" && !names.includes(newName.toLowerCase())) {
      const personObj = { name: newName, number: newNumber };
      setPersons(persons.concat(personObj));

      personsService.create(personObj).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
      // axios
      //   .post("http://localhost:3001/persons", personObj)
      //   .then((response) => {
      //     console.log(response);
      //     setPersons(persons.concat(response.data));
      //   });
    } else {
      alert(`${newName} is already added to phonebook!`);
    }
    setNewName("");
    setNewNumber("");
  };

  const [searched, setSearched] = useState("");
  const handleFilterChange = (event) => {
    setSearched(event.target.value);
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setPersons(filtered);
  };

  useEffect(() => {
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searched={searched} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        addPerson={addPerson}
      />
      <h3>Numbers</h3>
      <Persons persons={persons} />
    </div>
  );
};

export default App;

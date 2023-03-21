import { useState } from "react";

const Filter = ({ persons, setPersons }) => {
  const [searched, setSearched] = useState("");
  const handleFilterChange = (event) => {
    setSearched(event.target.value);
    const filtered = persons.filter((person) =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(filtered);
    setPersons(filtered);
  };
  return (
    <div>
      filter shown with <input value={searched} onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;

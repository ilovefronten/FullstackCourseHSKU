import { useState, useEffect } from 'react'
import axios from 'axios';
import Numbers from "./Components/Numbers";
import Filter from "./Components/Filter";
import Persons from "./Components/Persons";
import PersonForm from "./Components/PersonForm";



const App = () => {
  /*   const [persons, setPersons] = useState([
      {
        name: 'Arto Hellas', number: '040-1234567'
      }
    ]) */
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newNameFilter, setNewNameFilter] = useState('')

  /***** some useful funcs: *****/
  /* Check if name not exist */
  const isNameNotExisted = (newName) => {
    return !persons.find(person => person.name === newName);
  }

  /* if name not exist, the func will be executed */
  const addPerson = (newName, newNumber) => {
    /* Check name is valid */
    if (newName != '') {
      const newPerson = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(newPerson))
      /* Reset input fields */
      setNewName('')
      setNewNumber('')
      setNewNameFilter('')
    }
  }

  /* Hook for useEffect to get person from db.json */
  const hook = () => {
    axios
    .get('http://localhost:3001/persons')
    .then(res => {
      setPersons(res.data)
    })
  } 

  /* Get persons from db.json */
  useEffect(hook, [])

  const hasFilter = (newNameFilter) => newNameFilter !== ''

  /* Display persons by filter */
  const personToShow = hasFilter(newNameFilter)
    ? persons.filter((person) =>
      person.name.toLocaleLowerCase().includes(newNameFilter.toLocaleLowerCase()))
    : persons

  /***** Handlers *****/
  /* Handler of submit button. */
  const handleAddPerson = (event) => {
    event.preventDefault()
    /* Set new person's name as input value */
    isNameNotExisted(newName)
      ? addPerson(newName, newNumber)
      : alert(`${newName} is already added to phonebook`)
  }

  /* Handler of name input element. */
  const handleNameChange = (event) => {
    /* Get input name */
    setNewName(event.target.value)
    // console.log(newName)
  }

  /* Handler of number input element. */
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  /* Handler of name filter input element. */
  const handleNameFilterChange = (event) => {
    setNewNameFilter(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        newNameFilter={newNameFilter}
        onNameFilterChange={handleNameFilterChange}
      />

      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        onNameChange={handleNameChange}
        newNumber={newNumber}
        onNumberChange={handleNumberChange}
        onAddPerson={handleAddPerson}
      />
      <h3>Numbers</h3>
      <Persons persons={personToShow} />

      {/*       
      <div>
        debug: {persons[0].name}
      </div> 
      */}



    </div>
  )
}

export default App
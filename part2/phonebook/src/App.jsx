import { useState, useEffect } from 'react'
import Filter from "./Components/Filter";
import Persons from "./Components/Persons";
import PersonForm from "./Components/PersonForm";
import Notification from './Components/Notification';
import phonebookService from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newNameFilter, setNewNameFilter] = useState('')
  const [notice, setNotice] = useState('')
  const [noticeType, setNoticeType] = useState('')

  /***** some useful funcs: *****/
  /* Reset input fields and states */
  const resetFields = () => {
    setTimeout(() => {
      setNotice('')
      setNoticeType('')
    }, 3000);
    setNewName('')
    setNewNumber('')
    setNewNameFilter('')
  }


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
      phonebookService.create(newPerson).then(newlyAddedPerson => {
        setPersons(persons.concat(newlyAddedPerson))
        setNotice('Add successfully!')
        setNoticeType('success')
        /* Reset input fields and notice */
        resetFields()
      })

    }
  }

  /* Change name */
  const changePersonNumber = (name, newNumber) => {
    if (window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`)) {

      const updatedPerson = { ...persons.find((person) => person.name === name), number: newNumber }
      phonebookService.changeNumber(updatedPerson).then(modifiedPerson => {
        setPersons(persons.map((person) =>
          person.name === modifiedPerson.name ? modifiedPerson : person
        ))
        setNotice(`${name} is updated successfully!`)
        setNoticeType('success')
        /* Reset input fields and notice */
        resetFields()
      })
    }
  }

  /* Delete a person number */
  const deletePersonNumber = (name, id) => {
    if (window.confirm(`Delete ${name}, id: ${id}`)) {
      phonebookService
        .deletePerson(id)
        .then(person => {
          setNoticeType('success')
          setNotice(`${person.name} is deleted!`)
        })
        .catch(err => {
          setNoticeType('error')
          setNotice(`Delete person failed!`)
        })

      setPersons(persons.filter(person => person.id !== id))

      /* Reset input fields and notice */
      resetFields()
    }
  }

  /* Hook for useEffect to get person from db.json */
  const hook = () => {
    phonebookService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }

  /* Get persons from db.json */
  useEffect(hook, [])

  /* Display persons by filter */
  const hasFilter = (newNameFilter) => newNameFilter !== ''

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
      : changePersonNumber(newName, newNumber)
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

  /* Handler of person deletion. */
  const handleDeletePerson = (name, id) => {
    deletePersonNumber(name, id)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter
        newNameFilter={newNameFilter}
        onNameFilterChange={handleNameFilterChange}
      />
      <Notification type={noticeType} message={notice} />
      <h3>Add a new</h3>
      <PersonForm
        newName={newName}
        onNameChange={handleNameChange}
        newNumber={newNumber}
        onNumberChange={handleNumberChange}
        onAddPerson={handleAddPerson}
      />
      <h3>Numbers</h3>
      <Persons persons={personToShow} onPersonDeletion={handleDeletePerson} />

      {/*       
      <div>
        debug: {persons[0].name}
      </div> 
      */}



    </div>
  )
}

export default App
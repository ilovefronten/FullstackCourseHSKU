const PersonForm = (props) => {
    const {newName, newNumber} = props 
    const handleNameChange = props.onNameChange
    const handleNumberChange = props.onNumberChange
    const handleAddPerson = props.onAddPerson

    return (
        <>
            <form onSubmit={handleAddPerson}>
                <div>
                    name:
                    <input
                        value={newName}
                        onChange={handleNameChange}
                    />
                </div>
                <div>
                    number:
                    <input
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </>
    )
}

export default PersonForm
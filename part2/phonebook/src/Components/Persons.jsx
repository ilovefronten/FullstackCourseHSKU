const Numbers = ({ name, number }) => {
    return (
        <>
            <li>{name} {number}</li>
        </>
    )
}

const Persons = ({ persons }) => {
    return (
        <>
            <ul>
                {persons.map((person) =>
                    <Numbers
                        key={person.name}
                        name={person.name}
                        number={person.number}
                    />
                )}
            </ul>
        </>
    )
}

export default Persons
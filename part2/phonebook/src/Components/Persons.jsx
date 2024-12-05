const Numbers = ({ name, number, id, onPersonDeletion }) => {
    return (
        <>
            <li>{name} {number} <button onClick={() => onPersonDeletion(name, id)}>delete</button></li>
        </>
    )
}
/* 不可以写成 <button value={[name, id]} onClick={onPersonDeletion}>delete</button> 的形式
    然后解构参数为[name, id]，因为value总是以字符串的方式传递*/

const Persons = ({ persons, onPersonDeletion }) => {
    return (
        <>
            <ul>
                {persons.map((person) =>

                    <Numbers
                        key={person.name}
                        name={person.name}
                        id={person.id}
                        number={person.number}
                        onPersonDeletion={onPersonDeletion}
                    />


                )}
            </ul>
        </>
    )
}

export default Persons
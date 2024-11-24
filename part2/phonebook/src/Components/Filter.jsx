
const Filter = (props) => {
    const { newNameFilter } = props
    const handleNameFilterChange = props.onNameFilterChange
    return (
        <>
            <input
                value={newNameFilter}
                onChange={handleNameFilterChange}
            />
        </>
    )
}

export default Filter
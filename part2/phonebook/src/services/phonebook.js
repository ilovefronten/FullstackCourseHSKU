import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => axios.get(baseUrl).then(res => res.data) 

const create = (newPerson) => axios.post(baseUrl, newPerson).then(res => res.data)

const deletePerson = (id) => axios.delete(`${baseUrl}/${id}`).then(res => res.data)

const changeNumber = (updatedPerson) => axios.put(`${baseUrl}/${updatedPerson.id}`, updatedPerson).then(res => res.data) 


export default { getAll, create, deletePerson, changeNumber }
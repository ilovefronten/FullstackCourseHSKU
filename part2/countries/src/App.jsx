import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [inputCountry, setInputCountry] = useState('')
  const [AllCountries, setAllCountries] = useState([])
  const [matchCountries, setMatchCountries] = useState([])
  const [countryDetails, setCountryDetails] = useState(null)
  const [currentRequestId, setCurrentRequestId] = useState(null); // 当前请求标识
  const baseURL = 'https://studies.cs.helsinki.fi/restcountries/api'

  const strongStyle = {
    fontSize: '30px',
    color: 'grey',
    border: 'red 10px solid',
  }

  useEffect(() => {
    const requestId = new Date().getTime(); // 创建唯一的请求标识
    setCurrentRequestId(requestId);

    axios
      .get(`${baseURL}/all`)
      .then((response) => {
        setAllCountries(response.data.map((country) => country.name.common))
      })
      .catch(error => {
        console.log('error!')
      })
  }, [])


  useEffect(() => {
    if (matchCountries.length === 1) {
      axios
        .get(`${baseURL}/name/${matchCountries[0]}`)
        .then(response => {
          setCountryDetails(response.data)
          //console.log('lala')
        })
    } else {
      setCountryDetails(null)
    }
  }, [matchCountries])


  const handleChange = (event) => {
    setInputCountry(event.target.value)
    //! 不能直接使用inputCountry的值来显示或打印，因为它是异步的
    // assign a new variable so the value is real time
    const input = event.target.value

    const matches = AllCountries.filter((country) =>
      input !== '' && country.toLowerCase().includes(input.toLowerCase())
    )

    setMatchCountries(matches);

  }

  const displayConutries = (match) => {
    if (match.length > 10) {
      return <div style={strongStyle}>Too many matches, specify another filter!</div>

    } else {
      return match.map((country) => <div key={country}>{country} <button onClick={() => handleShowCountry(country)}>show</button></div>)
    }
  }

  const handleShowCountry = (country) => {
    setMatchCountries([country])
  }

  return (
    <>
      find countries: <input value={inputCountry} onChange={handleChange}></input>

      <pre>
        {matchCountries.length === 1
          ? countryDetails && JSON.stringify(countryDetails)
          : displayConutries(matchCountries)}
      </pre>


    </>
  )
}

export default App

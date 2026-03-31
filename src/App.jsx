import CountryCard from './components/CountryCard/CountryCard'
import {useState, useEffect} from 'react'
import './App.css'

const countryCardProps = {
    flagUrl: "",
    commonName: "dog",
    nativeName: "",
    population: 0,
    region: "",
    subRegion: "", 
    capital: "",
    topLevelDomain: "",
    currencies: [], // string_arr
    languages: []  // string_arr

}



function App() {
const [country, setCountry] = useState(countryCardProps);
const [fetchCountries, setFetchCountries] = useState([]);

// fetch all countries 1ce
useEffect(()=> {
const fetchCountries= async() => {
  try {
    const resp = await fetch('https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,subregion,topLevelDomain,currencies,language')
    if (!resp.ok) {
      throw new Error("response failed")
    }
    const jsonData = await resp.json();
    setFetchCountries(jsonData);
  } catch(err) {
    console.error("Fetch error: ", err)
  }
}
fetchCountries()
},[])


console.log("How many countries are there: ", fetchCountries.length)
  return (
    <>
    <CountryCard 
      flagUrl={country.flagUrl}
      commonName={country.commonName}
      nativeName={country.nativeName}
      population={country.population}
      region={country.region}
      subRegion={country.subRegion}
      capital={country.capital}
      topLevelDomain={country.topLevelDomain}
      currencies={country.currencies}
      languages={country.languages}/>
    </>
  )
}

export default App

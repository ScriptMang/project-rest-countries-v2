import {useFetchCountries} from './api.js'
import TitleBar from './components/TitleBar/TitleBar'
import SearchCountries from './components/SearchCountries/SearchCountries'
import CountryCards from './components/CountryCard/CountryCards'
import {useState} from 'react'
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
useFetchCountries(setFetchCountries);

const searchFieldHandler = (tgtCountry) =>{
  console.log("The current text in the input field is: ", tgtCountry)
}

console.log("How many countries are there: ", fetchCountries.length)    
  return (
    <>
    <TitleBar />
    <hr />
    <SearchCountries  onSearchChange={searchFieldHandler}/>
    <CountryCards countries={fetchCountries}/>
    </>
  )
}

export default App

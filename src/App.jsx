import {useFetchCountries} from './api.js'
import TitleBar from './components/TitleBar/TitleBar'
import SearchCountries from './components/SearchCountries/SearchCountries'
import CountryCards from './components/CountryCard/CountryCards'
import {useState} from 'react'
import './App.css'

function App() {
const [url, setURL] = useState('https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,subregion,topLevelDomain,currencies,language')
const {data} = useFetchCountries(url)

// fetch all countries 1ce
const searchFieldHandler = (strVal) =>{
    if (strVal === "") {
          setURL('https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,subregion,topLevelDomain,currencies,language');
    } else {
      const tgtCountry = strVal;
      setURL(`https://restcountries.com/v3.1/name/${tgtCountry}?fields=flags,name,population,region,capital,subregion,topLevelDomain,currencies,languages`);
    }
}
// console.log("How many countries are there: ", data.length)    
  return (
    <>
    <TitleBar />
    <hr />
    <SearchCountries  onSearchChange={searchFieldHandler}/>
    <CountryCards countries={data}/>
    </>
  )
}

export default App

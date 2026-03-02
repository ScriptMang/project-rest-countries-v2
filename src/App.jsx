import CountryCard from './components/CountryCard/CountryCard'
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

// setCountry(prevCountry =>  ({
//   ...prevCountry, 
//   commonName: "dog"
// }));

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

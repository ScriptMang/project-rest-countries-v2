
// const countryCardProps = {
//     flagUrl: "",
//     commonName: "",
//     nativeName: "",
//     population: 0,
//     region: "",
//     subRegion: "", 
//     capital: "",
//     topLevelDomain: "",
//     currencies: [], // string_arr
//     languages: []  // string_arr

// }

// a react component that represent a country card
function CountryCard(
    { flagUrl, commonName, nativeName,
      population, region, subRegion, capital,
      topLevelDomain, currencies, languages
    }) {
    console.log("The common name of this country is: ", commonName);
    return (
    <>
     <p>CountryCard</p>
    </>
    )
}
export default CountryCard

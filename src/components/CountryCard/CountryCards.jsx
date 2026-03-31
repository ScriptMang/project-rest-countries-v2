
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
function CountryCards({countries}) {
    let cardCount = 1
    const cards = countries.map(elem => {
     return ( 
     <li key={String(cardCount)} className="countryCard" data-id={String(cardCount++)}>
        <img src={elem['flags']['svg']} alt={ elem['name']['common'] + "'s flag"} />
        <div className="countryDetails">
            <div className="countryName">
                {elem['name']['common']}
            </div>
            <div className="countryInfo">
                <div className="countryVal"><span>Population: </span>{elem['population']}</div>
                <div className="countryVal"><span>Region: </span>{elem['region']}</div>
                <div className="countryVal"><span>Capital: </span>{elem['capital']}</div>
            </div>
        </div>
      </li>
    )})
    
    return (
    <ul id="countryListContainer">
       {cards}
    </ul>
    )
}
export default CountryCards

import searchIconLight from '../../assets/search-light-icon.svg'

function SearchCountries({onSearchChange}){
    return (
    <div id="countrySearchContainer">
        <div id="searchContainer">
            <img src={searchIconLight} id= "searchIcon" alt=" light mode magnifying glass" />
            <input 
            type="text" 
            id="countryInput" 
            onChange={(e)=>onSearchChange(e.target.value)}
            placeholder="Search for a country..." />
        </div>

        <select name="filterByRegion" id="filterByRegionSelect">
              <option value="Label">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="Americas">Americas</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
        </select>
    </div>
    )
}

export default SearchCountries
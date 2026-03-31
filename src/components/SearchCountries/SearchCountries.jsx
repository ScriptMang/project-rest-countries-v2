import searchIconLight from '../../assets/search-light-icon.svg'

function SearchCountries(){
    return (
    <div id="countrySearchContainer">
        <div id="searchContainer">
            <img src={searchIconLight} id= "searchIcon" alt=" light mode magnifying glass" />
            <input type="text" id="countryInput" placeholder="Search for a country..." />
        </div>
    </div>
    )
}

export default SearchCountries
import {useEffect} from 'react'

function useFetchCountries(setFetchCountries) {
    useEffect(()=> {
        async function fetchCountries(setFetchCountries) {
        try {
            const resp = await fetch('https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,subregion,topLevelDomain,currencies,language')
            if (!resp.ok) {
                throw new Error("response failed")
            }
            // const jsonData = await resp.json();
            console.log(jsonData);
            setFetchCountries(jsonData);
        } catch(err) {
            console.error("Fetch error: ", err)
        }
    }
        fetchCountries(setFetchCountries)
    }, [])
}
export default useFetchCountries
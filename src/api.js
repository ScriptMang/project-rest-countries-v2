import {useEffect} from 'react'

export function useFetchCountries(setFetchCountries) {
    useEffect(()=> {
        async function fetchCountries(setFetchCountries) {
        try {
            const resp = await fetch('https://restcountries.com/v3.1/all?fields=flags,name,population,region,capital,subregion,topLevelDomain,currencies,language')
            if (!resp.ok) {
                throw new Error("response failed")
            }
            const jsonData = await resp.json();
            // console.log(jsonData);
            setFetchCountries(jsonData);
        } catch(err) {
            console.error("Fetch error: ", err)
        }
    }
        fetchCountries(setFetchCountries)
    }, [])
}


export function useFetchCountry(searchVal, setFetchCountries){
    useEffect(()=>{
        async function fetchCountry(tgtCountry, setFetchCountries){
            try {
                const resp = await fetch(`https://restcountries.com/v3.1/name/${tgtCountry}?fields=flags,name,population,region,capital,subregion,topLevelDomain,currencies,languages`);
                if (!resp.ok) {
                    throw new Error("response failed");
                }
                const jsonData = await resp.json();
                setFetchCountries(jsonData)
            } catch(err) {
                console.error("Fetch error: ", err)
            }
        }
        fetchCountry(tgtCountry, setFetchCountries)
    },[])
}
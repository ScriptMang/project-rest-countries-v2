import {useState,useEffect} from 'react'

export function useFetchCountries(url)  {
    const [data, setData] = useState([])
    useEffect(()=> {
        async function fetchCountries(url) {
        try {
            const resp = await fetch(url)
            if (!resp.ok) {
                throw new Error("response failed")
            }
            const jsonData = await resp.json();
            console.log(jsonData);
            setData(jsonData);
        } catch(err) {
            console.error("Fetch error: ", err)
        }
    }
        fetchCountries(url)
    }, [url])

    return {data}
}
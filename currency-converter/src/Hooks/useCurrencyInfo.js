import { useEffect, useState } from "react";

const CURRENCY_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/`;

export function useCurrencyInfo(currency){
    const [result , setResult] = useState({})
    useEffect(() => {
        fetch(`${CURRENCY_URL}${currency}.json`)
        .then((res) => res.json())
        .then((res) => setResult(res[currency]))
        .catch((err) => console.log(err))
    } , [currency])

    console.log(result)
    return result
}
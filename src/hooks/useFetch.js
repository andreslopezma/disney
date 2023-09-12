import { useState, useEffect } from "react";
import { fetchData } from "../services/dataService";

const useFetch = (endpoint, filterParams) => {
    const BASE_URL = import.meta.env.VITE_API_URL;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async (params) => {
        if (params) {
            params = new URLSearchParams(cleanObject(params)).toString();
        }
        try {
            const result = await fetchData({ url: `${BASE_URL}${endpoint}?${params}` });
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {

        getData(filterParams);
    }, [filterParams]);

    return { data, loading, error, getData };
}

const cleanObject = (obj) => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (value !== null && value !== "") {
            acc[key] = value;
        }
        return acc;
    }, {});
}

export default useFetch;
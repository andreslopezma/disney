import { useState, useEffect } from "react";
import { fetchData } from "../services/dataService";

const useFetch = (endpoint) => {
    const BASE_URL = import.meta.env.VITE_API_URL;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filterParams, setFilterParams] = useState({});
    const [params, setParams] = useState({});

    useEffect(() => {
        getData(filterParams);
    }, [filterParams]);

    const getData = async () => {
        let newParams = null;
        if (params) {
            newParams = new URLSearchParams(cleanObject(params)).toString();
        }
        try {
            const result = await fetchData({ url: `${BASE_URL}${endpoint}?${newParams}` });
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    const handleFilterClick = () => {
        setFilterParams(params)
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setParams({ ...params, [name]: value ? value : null });
    };

    return { data, loading, error, getData, handleFilterClick, handleInputChange };
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
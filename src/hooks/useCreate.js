import { useState } from "react";
import { createData } from "../services/dataService";
import { useSnackbar } from "notistack";

const useCreate = (endpoint) => {
    const { enqueueSnackbar } = useSnackbar();
    const BASE_URL = import.meta.env.VITE_API_URL;
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const sendData = async (params) => {
        console.log(params);
        try {
            const result = await createData({ url: `${BASE_URL}${endpoint}`, params });
            setResponse(result);
            enqueueSnackbar(result.message, { variant: 'success' });
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return { response, loading, error, sendData };
}

export default useCreate;
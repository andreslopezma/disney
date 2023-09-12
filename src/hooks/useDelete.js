import { useState } from "react";
import { deleteData } from "../services/dataService";
import { useSnackbar } from "notistack";

const useDelete = (endpoint) => {
    const { enqueueSnackbar } = useSnackbar();
    const BASE_URL = import.meta.env.VITE_API_URL;
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const deletes = async (params) => {
        const { id, getData } = params;
        try {
            const result = await deleteData({ url: `${BASE_URL}${endpoint}/${id}` });
            setResponse(result);
            getData({});
            enqueueSnackbar(result.message, { variant: 'success' });
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }

    return { response, loading, error, deletes };
}

export default useDelete;
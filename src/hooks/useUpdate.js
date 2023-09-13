import { useState } from "react";
import { update } from "../services/dataService";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

const useUpdate = (endpoint, returnPath) => {
    const native = useNavigate();
    const BASE_URL = import.meta.env.VITE_API_URL;
    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const updateData = async (params) => {
        const { id } = params;
        try {
            console.log(params);
            const result = await update({ url: `${BASE_URL}${endpoint}/${id}`, params });
            setResponse(result);
            enqueueSnackbar(result.message, { variant: 'success' });
            native(returnPath);
        } catch ({ response }) {
            const { data } = response;
            enqueueSnackbar(data.message, { variant: 'error' });
            setError(data.error);
        } finally {
            setLoading(false);
        }
    }

    return { response, loading, error, updateData };
}

export default useUpdate;
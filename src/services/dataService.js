import axios from "axios";

export const fetchData = async ({ url }) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const update = async ({ url, params }) => {
    try {
        const response = await axios.put(url, params);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const deleteData = async ({ url }) => {
    try {
        const response = await axios.delete(url);
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const createData = async ({ url, params }) => {
    try {
        const response = await axios.post(url, params);
        return response.data;
    } catch (error) {
        throw error;
    }
}
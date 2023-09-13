import { useRef, useState } from "react";

const useForm = (initState) => {
    const [formulario, setFormulario] = useState(initState);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormulario({ ...formulario, [name]: value });
    };

    const fileInput = useRef(null);

    const handleButtonClick = () => {
        fileInput.current.click();
    };

    const handleFileChange = (event) => {
        let file = event.target.files[0];
        setFormulario({ ...formulario, 'image': file });
    };

    const handleInputMulti = ({ target }) => {
        const { selectedOptions } = target;
        let movies = [];
        for (var i = 0; i < selectedOptions.length; i++) {
            const { value } = selectedOptions.item(i);
            movies.push(value);
        }
        setFormulario({ ...formulario, 'movies': movies });
    }

    return { 
        handleInputChange, 
        handleInputMulti, 
        handleFileChange, 
        handleButtonClick,
        setFormulario,
        formulario, 
        fileInput 
    }

}

export default useForm;
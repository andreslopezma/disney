import React, { useEffect, useRef, useState } from 'react';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import { PersonPin } from '@mui/icons-material';
import DrawIcon from '@mui/icons-material/Draw';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Button, Chip, Divider, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';

// components
import Title from './Title';

// custom hooks
import useFetch from '../hooks/useFetch';
import useCreate from '../hooks/useCreate';


function FormularioCrearPersonaje() {
    const [formCharacter, setFormCharacter] = useState({
        name: '',
        age: null,
        weight: ''
    });
    const [filterParams, setFilterParams] = useState({});
    const titles = [{
        text: 'Home',
        icon: <CameraIndoorIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: '/'
    }, {
        text: 'Personajes',
        icon: <PersonPin sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: '/personajes'
    }, {
        text: 'Formulario',
        icon: <DrawIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: null
    }];

    const movies = useFetch(`movies`, filterParams);
    const { sendData } = useCreate('characters');

    const fileInput = useRef(null);

    const handleButtonClick = () => {
        fileInput.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log("Archivo seleccionado:", file.name);
        // Aquí puedes manejar el archivo cargado según lo que necesites hacer
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormCharacter({
            ...formCharacter,
            [name]: value
        });
    };

    const handleInputMulti = ({ target }) => {
        const { selectedOptions } = target;
        let movies = [];
        for (var i = 0; i < selectedOptions.length; i++) {
            const { value } = selectedOptions.item(i);
            movies.push(value);
        }
        setFormCharacter({ ...formCharacter, 'movies': movies });
    }

    const { name, age, weight, history } = formCharacter;
    return (
        <>
            <Title titles={titles} />
            <Divider sx={{ mb: 4, mt: 2 }} textAlign="center" >
                <Chip label={"Editando Personaje"} />
            </Divider>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Nombre"
                        name="name"
                        id="name"
                        value={name}
                        placeholder="(ej. Iron Man, Hulk)"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Edad"
                        name="age"
                        id="age"
                        value={age}
                        placeholder="(ej. 35)"
                        type="number"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Peso"
                        name="weight"
                        id="weight"
                        placeholder="(ej. 35)"
                        type="number"
                        value={weight}
                        InputProps={{
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth >
                        <InputLabel id="movie">Pelicula/Serie</InputLabel>
                        <Select
                            multiple
                            native
                            labelId="movie"
                            id="movie"
                            name="movie"
                            label="Pelicual/Seire"
                            inputProps={{
                                id: "movie",
                            }}
                            onChange={handleInputMulti}
                        >
                            {
                                movies.data.length
                                    ?
                                    movies.data.map(({ title, id }, index) => {
                                        return (
                                            <>
                                                <option
                                                    key={index}
                                                    value={id}
                                                >
                                                    {title}
                                                </option>
                                            </>
                                        )
                                    })

                                    :
                                    <option>Sin Peliculas</option>
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={12}>
                    <TextField
                        fullWidth
                        label="Historia"
                        name="history"
                        id="history"
                        type="text"
                        value={history}
                        multiline
                        rows={5}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <input
                        ref={fileInput}
                        type="file"
                        hidden
                        onChange={handleFileChange}
                    />
                    <Button fullWidth variant="contained" color="primary" onClick={handleButtonClick}>
                        Cargar Imagen
                    </Button>
                </Grid>
                <Grid item container justifyContent="center" alignItems="center">
                    <Stack>
                        <Button
                            variant="outlined"
                            startIcon={<SaveAsIcon />}
                            onClick={() => sendData(formCharacter)}
                        >
                            Guardar
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default FormularioCrearPersonaje
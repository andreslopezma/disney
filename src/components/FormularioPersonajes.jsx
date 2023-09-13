import React, { useEffect } from 'react';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import { PersonPin } from '@mui/icons-material';
import DrawIcon from '@mui/icons-material/Draw';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Button, Chip, Divider, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';

// components
import Title from './Title';
import { useParams } from 'react-router-dom';

// custom hooks
import useFetch from '../hooks/useFetch';
import useUpdate from '../hooks/useUpdate';
import useForm from '../hooks/useForm';

function FormularioPersonajes() {
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

    const { id } = useParams();
    const { data } = useFetch(`character/${id}`);
    const movies = useFetch(`movies`);
    const { updateData } = useUpdate('character', '/personajes');

    useEffect(() => {
        data.length && setFormulario(data[0]);
    }, [data]);

    const {
        handleInputChange,
        handleInputMulti,
        handleFileChange,
        setFormulario,
        formulario,
        fileInput
    } = useForm({
        name: '',
        age: '',
        weight: '',
        history: '',
        movie: []
    });


    const { name, age, weight, history, movie } = formulario;
    return (
        <>
            <Title titles={titles} />
            <Divider sx={{ mb: 4, mt: 2 }} textAlign="center" >
                <Chip label={"Editando Personaje"} />
            </Divider>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        focused
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
                        focused
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
                        focused
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
                            autoFocus
                            value={movie.length ? movie.map(({ id }) => id) : []}
                            defaultValue={movie.length ? movie.map(({ id }) => id) : []}
                        >
                            {
                                movies.data.length
                                    ?
                                    movies.data.map(({ title, id }, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={id}
                                            >
                                                {title}
                                            </option>
                                        )
                                    })

                                    :
                                    <option key={0}>Sin Peliculas</option>
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
                    {/*
    <Button fullWidth variant="contained" color="primary" onClick={handleButtonClick}>
                        Cargar Imagen
                    </Button>
                        */}
                </Grid>
                <Grid item container justifyContent="center" alignItems="center">
                    <Stack>
                        <Button
                            variant="outlined"
                            startIcon={<SaveAsIcon />}
                            onClick={() => updateData(formulario)}
                        >

                            Editar
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default FormularioPersonajes
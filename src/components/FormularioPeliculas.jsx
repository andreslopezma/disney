import React from 'react'
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import { LocalMoviesOutlined } from '@mui/icons-material';
import DrawIcon from '@mui/icons-material/Draw';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Button, Chip, Divider, FormControl, Grid, InputLabel, MenuItem, Rating, Select, Stack, TextField, Typography } from '@mui/material';
import Title from './Title';
import useCreate from '../hooks/useCreate';
import useForm from '../hooks/useForm';
import useFetch from '../hooks/useFetch';

function FormularioPeliculas() {
    const titles = [{
        text: 'Home',
        icon: <CameraIndoorIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: '/'
    }, {
        text: 'Peliculas',
        icon: <LocalMoviesOutlined sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: '/peliculas/series'
    }, {
        text: 'Formulario',
        icon: <DrawIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: null
    }];

    // save the data
    const { sendData } = useCreate('movies', '/peliculas/series');

    // get the all genders
    const { data } = useFetch('genders');


    const {
        handleInputChange,
        handleFileChange,
        handleButtonClick,
        formulario,
        fileInput
    } = useForm({
        title: '',
        publication_date: '',
        qualification: '',
        gender_id: ''
    });
    return (
        <>
            <Title titles={titles} />
            <Divider sx={{ mb: 4, mt: 2 }} textAlign="center" >
                <Chip label="Creando Pelicula o Serie" />
            </Divider>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Titulo"
                        name="title"
                        id="title"
                        placeholder="(ej. Luca, Toy Story)"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Fecha de Publicacion"
                        name="publication_date"
                        id="publication_date"
                        placeholder="(ej. 35)"
                        type="date"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography component="legend">Calificacion</Typography>
                    <Rating
                        name="qualification"
                        id="qualification"
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel id="gender">Categoria</InputLabel>
                        <Select
                            labelId="gender"
                            id="gender_id"
                            name="gender_id"
                            label="Categoria"
                            onChange={handleInputChange}
                            defaultValue={0}
                        >
                            <MenuItem value={0}>Selecione una Categoria</MenuItem>
                            {
                                data.length
                                    ?
                                    data.map(({ id, name }) => {
                                        return (
                                            <MenuItem
                                                value={id}
                                                key={id}
                                            >
                                                {name}
                                            </MenuItem>
                                        )
                                    })
                                    :
                                    <MenuItem value={0}>Sin Categorias</MenuItem>
                            }

                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
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
                            onClick={() => sendData(formulario)}
                        >
                            Guardar
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default FormularioPeliculas
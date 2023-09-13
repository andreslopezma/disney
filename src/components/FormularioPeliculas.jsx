import React, { useRef, useState } from 'react'
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import { LocalMoviesOutlined, PersonPin } from '@mui/icons-material';
import DrawIcon from '@mui/icons-material/Draw';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Button, Chip, Divider, Grid, Rating, Stack, TextField, Typography } from '@mui/material';
import Title from './Title';
import useCreate from '../hooks/useCreate';
import useForm from '../hooks/useForm';

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

    const { sendData } = useCreate('movies');

    const {
        handleInputChange,
        handleFileChange,
        handleButtonClick,
        formulario,
        fileInput
    } = useForm({
        title: '',
        date_publication: '',
        qualification: ''
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
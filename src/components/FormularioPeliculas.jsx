import React, { useRef } from 'react'
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import { LocalMoviesOutlined, PersonPin } from '@mui/icons-material';
import DrawIcon from '@mui/icons-material/Draw';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Button, Chip, Divider, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Rating, Select, Stack, TextField, Typography } from '@mui/material';
import Title from './Title';

function FormularioPeliculas() {
    const titles = [{
        text: 'Home',
        icon: <CameraIndoorIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: '/'
    }, {
        text: 'Peliculas',
        icon: <LocalMoviesOutlined sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: null
    }, {
        text: 'Formulario',
        icon: <DrawIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
        path: null
    }];

    const fileInput = useRef(null);

    const handleButtonClick = () => {
        fileInput.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log("Archivo seleccionado:", file.name);
        // Aquí puedes manejar el archivo cargado según lo que necesites hacer
    };
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
                        name="name"
                        id="name"
                        placeholder="(ej. Luca, Toy Story)"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Fecha de Publicacion"
                        name="date_publication"
                        id="date_publication"
                        placeholder="(ej. 35)"
                        type="date"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography component="legend">Calificacion</Typography>
                    <Rating
                        name="simple-controlled"
                        value={0}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
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
                        <Button variant="outlined" startIcon={<SaveAsIcon />}>
                            Guardar
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default FormularioPeliculas
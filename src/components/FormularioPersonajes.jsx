import React, { useRef } from 'react';
import CameraIndoorIcon from '@mui/icons-material/CameraIndoor';
import { PersonPin } from '@mui/icons-material';
import DrawIcon from '@mui/icons-material/Draw';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import { Button, Chip, Divider, FormControl, Grid, InputAdornment, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';

// components
import Title from './Title';

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
                <Chip label="Creando Personaje" />
            </Divider>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Nombre"
                        name="name"
                        id="name"
                        placeholder="(ej. Iron Man, Hulk)"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        label="Edad"
                        name="age"
                        id="age"
                        placeholder="(ej. 35)"
                        type="number"
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
                        InputProps={{
                            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel id="Pelicula/Serie">Pelicula/Serie</InputLabel>
                        <Select
                            labelId="Pelicula/Serie"
                            id="movie"
                            name="movie"
                            label="Pelicual/Seire"
                        >
                            <MenuItem value=""><em>Selecionar</em></MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
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
                        <Button variant="outlined" startIcon={<SaveAsIcon />}>
                            Guardar
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
        </>
    )
}

export default FormularioPersonajes
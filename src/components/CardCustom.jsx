import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TodayIcon from '@mui/icons-material/Today';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import useDelete from '../hooks/useDelete';

function CardCustom({ data, id, getData }) {
    const { name, age, history, weight, image } = data;
    const { deletes } = useDelete('character');
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={image}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name.toUpperCase()}
                </Typography>
                <Grid container alignItems={"center"} spacing={1}>
                    <Grid item>
                        <TodayIcon></TodayIcon>
                    </Grid>
                    <Grid item>
                        Age: {age}
                    </Grid>
                </Grid>
                <Grid container alignItems={"center"} spacing={1}>
                    <Grid item>
                        <FitnessCenterIcon></FitnessCenterIcon>
                    </Grid>
                    <Grid item>
                        Peso: {weight}
                    </Grid>
                </Grid>
                <Typography variant="body2" color="text.secondary">
                    {history}
                </Typography>
            </CardContent>
            <CardActions>
                <Link
                    to={`/formulario/personajes/${id}`}
                >
                    <Button
                        size="small"
                    >
                        Editar
                    </Button>
                </Link>
                <Button
                    size="small"
                    onClick={() => deletes({ id, getData })}
                >
                    Eliminar
                </Button>
            </CardActions>
        </Card>
    );
}

export default CardCustom;
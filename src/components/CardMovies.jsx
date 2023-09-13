import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import useDelete from '../hooks/useDelete';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import StarIcon from '@mui/icons-material/Star';

function CardMovies({ data, id, getData }) {
    const { title, gender_id, qualification, image } = data;
    const { deletes } = useDelete('movie');
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title.toUpperCase()}
                </Typography>
                <Grid container alignItems={"center"} spacing={1}>
                    <Grid item>
                        <TheaterComedyIcon></TheaterComedyIcon>
                    </Grid>
                    <Grid item>
                        Categoria: {gender_id}
                    </Grid>
                </Grid>
                <Grid container alignItems={"center"} spacing={1}>
                    <Grid item>
                        <StarIcon></StarIcon>
                    </Grid>
                    <Grid item>
                        Calificacion: {qualification}
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions>
                <Link
                    to={`/formulario/peliculas/series/${id}`}
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

export default CardMovies;
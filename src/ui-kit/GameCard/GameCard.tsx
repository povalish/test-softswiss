import React from 'react';
import {
  Link as RouterLink,
} from 'react-router-dom';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



interface IGameCard {
  title: string;
  id: string;
}

export const GameCard: React.FC<IGameCard> = ({ title, id }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component='img'
      height='140'
      image='https://picsum.photos/200/300'
      alt='green iguana'
    />

    <CardContent>
      <Typography gutterBottom variant='h5'>
        {title}
      </Typography>
    </CardContent>

    <CardActions>
      <Button component={RouterLink} to={`/details/${id}`} size='small'>
        Подробнее
      </Button>
    </CardActions>
  </Card>
);

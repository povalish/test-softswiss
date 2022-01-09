import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Box,
  CircularProgress,
  Typography,
  Button,
} from '@mui/material';

import { fetchGameDetails } from 'modules/games/requests/fetchGameDetails';
import { Game } from 'modules/games/types/Game';
import { Request } from 'modules/common/types/Request';



export const GameDetails: React.FC = () => {
  const { id } = useParams();
  const [game, setGame] = useState<Request<Game>>({ status: 'init' });

  useEffect(() => {
    if (id) {
      fetchGameDetails(id)
        .then((resp) => {
          setGame({ status: 'loaded', payload: resp });
        })
        .catch(() => {
          setGame({ status: 'error', error: new Error('Not found') });
        });
    }
  }, [id]);


  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <Button
            style={{ color: '#ffffff' }}
            to='/'
            size='large'
            component={RouterLink}
          >
            {'<-'} Назад
          </Button>
        </Toolbar>
      </AppBar>

      <Box
        p={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '40px',
        }}
      >
        {game.status === 'loaded' && (
          <Typography variant='h1'>
            {game.payload.title}
          </Typography>
        )}

        {(game.status === 'loading' || game.status === 'init') && (
          <CircularProgress />
        )}
      </Box>
    </>
  );
};

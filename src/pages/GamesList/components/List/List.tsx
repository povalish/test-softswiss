import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Box, Button, Grid, Skeleton,
} from '@mui/material';

import { GameCard } from 'ui-kit/GameCard';

import { AppDispatch, RootState } from 'store';
import { loadNextPage } from 'store/filters';
import { useFetchGames } from 'modules/games/hooks/useFetchGemes';



export const List: React.FC = () => {
  const filters = useSelector((state: RootState) => state.filters);
  const dispatch: AppDispatch = useDispatch();

  const gamesRequest = useFetchGames({
    page: filters.currentPage,
    size: 12,
    real: filters.realFilter,
    provider: filters.providerFilter,
  });

  const handleLoadNextPage = () => {
    dispatch(loadNextPage());
  };


  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{ flexGrow: 1 }}
        mt={2}
      >
        {gamesRequest.status === 'loaded' && gamesRequest.payload.map((game, index) => (
          <Grid key={index} item xs={3}>
            <GameCard title={game.title} id={game.key} />
          </Grid>
        ))}

        {(gamesRequest.status === 'init' || gamesRequest.status === 'loading')
          && [1, 2, 3, 4].map((_, index) => (
            <Grid key={index} item xs={3}>
              <Skeleton variant='rectangular' width='100%' height={218} />
            </Grid>
          ))}
      </Grid>

      <Box mt={4} mb={4} style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={handleLoadNextPage}>Показать еще</Button>
      </Box>
    </>
  );
};

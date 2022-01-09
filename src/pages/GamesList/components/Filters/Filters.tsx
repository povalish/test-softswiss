import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid } from '@mui/material';

import { Filter } from 'ui-kit/Filter';

import { AppDispatch, RootState } from 'store';
import {
  setProviderFilter,
  setRealFilter,
  setAvailableProviderFilters,
  setAvailableRealFilters,
  setInitPage,
} from 'store/filters';
import { fetchFilterProvider, fetchFilterReal } from 'modules/games/requests/fetchFilters';



export const Filters: React.FC = () => {
  const filters = useSelector((state: RootState) => state.filters);
  const dispatch: AppDispatch = useDispatch();


  useEffect(() => {
    if (filters.availableProviderFilters.length === 0) {
      fetchFilterReal().then((resp) => dispatch(setAvailableRealFilters(resp)));
    }

    if (filters.availableRealFilters.length === 0) {
      fetchFilterProvider().then((resp) => dispatch(setAvailableProviderFilters(resp)));
    }
  }, []);

  useEffect(() => {
    dispatch(setInitPage());
  }, [filters.providerFilter, filters.realFilter]);


  const handleChangeReal = (value: string) => {
    dispatch(setRealFilter(value));
  };

  const handleChangeProvider = (value: string) => {
    dispatch(setProviderFilter(value));
  };



  return (
    <Box mb={2}>
      <Grid
        container
        spacing={2}
        sx={{ flexGrow: 1 }}
        mt={2}
      >
        <Grid item xs={2}>
          <Filter
            label='Валюта'
            placeholder='Все'
            items={filters.availableRealFilters}
            value={filters.realFilter}
            onChange={handleChangeReal}
          />
        </Grid>

        <Grid item xs={2}>
          <Filter
            label='Поставщик'
            placeholder='Все'
            items={filters.availableProviderFilters}
            value={filters.providerFilter}
            onChange={handleChangeProvider}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

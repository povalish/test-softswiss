import React from 'react';
import {
  Box, Divider, AppBar, Toolbar,
} from '@mui/material';

import { Filters } from './components/Filters';
import { List } from './components/List';



export const GamesList: React.FC = () => (
  <>
    <AppBar position='static'>
      <Toolbar>
        <h1>Список игр</h1>
      </Toolbar>
    </AppBar>

    <Box p={2}>
      <Filters />
      <Divider />
      <List />
    </Box>
  </>
);

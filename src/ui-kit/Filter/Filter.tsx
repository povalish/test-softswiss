import React from 'react';
import {
  FormControl, InputLabel, Select, MenuItem,
} from '@mui/material';



interface IFilter {
  label: string;
  placeholder?: string;
  items: string[];
  value?: string;
  onChange: (value: string) => void;
}

export const Filter: React.FC<IFilter> = ({
  label,
  placeholder,
  items,
  onChange,
  value = '',
}) => (
  <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
    <InputLabel id={`${label}-select`}>{label}</InputLabel>
    <Select
      labelId={`${label}-select`}
      value={value}
      label={label}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    >
      <MenuItem value=''>Все</MenuItem>
      {items.map((filter) => (
        <MenuItem key={filter} value={filter}>{filter}</MenuItem>
      ))}
    </Select>
  </FormControl>
);

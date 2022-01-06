import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function DropDown({changesValue}) {
  return (
    <Autocomplete
    multiple
    id="size-small-outlined-multi"
    size="small"
    options={data}
    getOptionLabel={(option) => option.label}
    onChange={(event, value) => changesValue(value)} 
    renderInput={(params) => (
      <TextField {...params} placeholder="Domain" />
    )}
  />
  );
}
const data = [
  { label: 'Marketing'},
  { label: 'Sales' },
  { label: 'Digital Marketing'},
];

export default DropDown
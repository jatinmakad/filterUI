import React from "react"
import { Box, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

function DropDown({ value, changesValue }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth >
        {!value ? <InputLabel id="demo-simple-select-label">Domain</InputLabel> : ""}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Domain"
          onChange={changesValue}
        >
          <MenuItem value="marketing">Marketing</MenuItem>
          <MenuItem value="sales">Sales</MenuItem>
          <MenuItem value="digitalMarketing">Digital Marketing</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default DropDown
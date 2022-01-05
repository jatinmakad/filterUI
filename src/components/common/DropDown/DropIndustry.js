import React from "react"
import { Box, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';

function DropIndustry({ value, changesValue }) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        {!value ? <InputLabel id="demo-simple-select-label">Industry</InputLabel> : ""}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label="Industry"
          onChange={changesValue}
        >
          <MenuItem value="startup">Startup</MenuItem>
          <MenuItem value="it">I.T</MenuItem>
          <MenuItem value="bio-medical">Bio - Medical</MenuItem>
          <MenuItem value="computerScience">Computer Science</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default DropIndustry
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    paddingTop: "5px",
  },
});
function DropIndustry({ changesValue, value }) {
  const classes = useStyles();
  
  return (
    <Autocomplete
      multiple
      id="size-small-outlined-multi"
      size="small"
      options={data}
      getOptionLabel={(option) => option.label}
      onChange={(event, value) => changesValue(value)}
      renderInput={(params) => <TextField {...params} placeholder="Industry" />}
    />
  );
}
const data = [
  { label: "IT" },
  { label: "Startup" },
  { label: "Bio-Medical" },
  { label: "Computer Science" },
];

export default DropIndustry;

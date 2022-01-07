import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { withStyles } from "@material-ui/core/styles";

const CustomAutocomplete = withStyles({
  tag: {
    backgroundColor: "#FFD5CD5C",
       fontWeight:600,
       fontSize:"14px",
    "& .MuiChip-label": {
      color: "#FF7070"
    },
    "& .MuiChip-deleteIcon": {
      color: "#FF7070"
    },
  }
})(Autocomplete);
function DropIndustry({ changesValue}) {
  return (
    <CustomAutocomplete
      multiple
      id="size-medium-outlined-multi"
      size="medium"
      options={data} 
      getOptionLabel={(option) => option.label}
      onChange={(event, value) => changesValue(value)}
      renderInput={(params,selected) => <TextField {...params} placeholder="Industry" />}
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

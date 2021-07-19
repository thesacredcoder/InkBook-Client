import React from "react";
import { TextField } from "@material-ui/core";

export default function InkInput({
  id,
  label,
  name,
  autoComplete,
  value,
  onChange,
}) {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
      autoFocus
      value={value}
      onChange={onChange}
    />
  );
}

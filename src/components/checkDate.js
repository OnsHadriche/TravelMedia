// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';


import { makeStyles } from 'tss-react/mui';
import TextField from "@mui/material/TextField";
import { useState } from 'react';
import { height } from '@mui/system';

const useStyles = makeStyles()((theme) => ({
  textField: {
    width: '200px',
    height:'40px',
    color:'white'
  },
}));

function DateRangePicker(props) {
  const classes = useStyles();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <div style={{width:400}}>
      
      <TextField
        id="start-date"
        label="Check-in"
        type="date"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{m:1, borderColor: 'white'}}
      />
      <TextField
        id="end-date"
        label="Check-out"
        type="date"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        sx={{m:1}}
      />
    </div>
  );
}

export default DateRangePicker;

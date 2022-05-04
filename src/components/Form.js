import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(1)
  }
}));

export default function Form({ children, ...props }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off" {...props}>
      {children}
    </form>
  );
}

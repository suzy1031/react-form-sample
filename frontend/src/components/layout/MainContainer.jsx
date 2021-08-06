import React from 'react';
// style
import { Box, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  main: {
    height: '100vh',
  },
});

const MainContainer = (props) => {
  const { children } = props;
  const classes = useStyles();
  return (
    <Container fixed>
      <main className={classes.main}>
        <Box m={5}>{children}</Box>
      </main>
    </Container>
  );
};
export default MainContainer;

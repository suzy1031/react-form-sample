import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import List from './components/List';
import New from './components/New';
import Detail from './components/Detail';
import Edit from './components/Edit';
import Header from './components/commons/Header';
import MainContainer from './components/layout/MainContainer';
// style
import { CssBaseline } from '@material-ui/core';
import { StylesProvider, ThemeProvider } from '@material-ui/styles';
import { theme } from './styles/theme';

const App = () => {
  return (
    <>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <MainContainer>
            <Router>
              <Switch>
                <Route exact path='/' component={List} />
                <Route path='/post/:id' component={Detail} />
                <Route exact path='/new' component={New} />
                <Route path='/edit/:id' component={Edit} />
              </Switch>
            </Router>
          </MainContainer>
        </ThemeProvider>
      </StylesProvider>
    </>
  );
};
export default App;

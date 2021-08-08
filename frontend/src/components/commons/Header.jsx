import React, { useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Cookies from 'js-cookie';
// style
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// api
import { signOut } from '../../lib/api/auth';
// context
import { AuthContext } from '../../App';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    linkBtn: {
      textTransform: 'none',
    },
  })
);

const Header = () => {
  const { loading, isSignedIn, setIsSignedIn } = useContext(AuthContext);
  const classes = useStyles();
  const history = useHistory();

  const handleSignOut = async (e) => {
    try {
      const res = await signOut();

      if (res.data.success === true) {
        Cookies.remove('_access_token');
        Cookies.remove('_client');
        Cookies.remove('_uid');

        setIsSignedIn(false);
        history.push('/signin');
        console.log('succeeded in sign out');
      } else {
        console.log('failed in sign out');
      }
    } catch (e) {
      console.log(e);
    }
  };

  const AuthButtons = () => {
    if (!loading) {
      if (isSignedIn) {
        return (
          <Button
            color='inherit'
            className={classes.linkBtn}
            onClick={handleSignOut}
          >
            Sign out
          </Button>
        );
      } else {
        return (
          <>
            <Button
              component={Link}
              to='/signin'
              color='inherit'
              className={classes.linkBtn}
            >
              Sign in
            </Button>
            <Button
              component={Link}
              to='/signup'
              color='inherit'
              className={classes.linkBtn}
            >
              Sign Up
            </Button>
          </>
        );
      }
    } else {
      return <></>;
    }
  };
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            React Rails API Practice
          </Typography>
          <AuthButtons />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;

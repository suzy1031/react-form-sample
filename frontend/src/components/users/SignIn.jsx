import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
// context
import { AuthContext } from '../../App';
// api
import { signIn } from '../../lib/api/auth';
// component
import SignForm from './SignForm';

const SignIn = () => {
  const history = useHistory();

  const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInHandleSubmit = async (e) => {
    e.preventDefault();

    const params = {
      email: email,
      password: password,
    };

    try {
      const res = await signIn(params);
      console.log(res);

      if (res.status === 200) {
        Cookies.set('_access_token', res.headers['access-token']);
        Cookies.set('_client', res.headers['client']);
        Cookies.set('_uid', res.headers['uid']);

        setIsSignedIn(true);
        setCurrentUser(res.data.data);

        history.push('/');
        console.log('signed in successfully');
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignForm
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={signInHandleSubmit}
      signType='signIn'
    />
  );
};
export default SignIn;

import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { UserContext } from '../../UserContext';
import LoginCreate from './LoginCreate';
import Head from '../Helper/Head';
import LoginForm from './LoginForm';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import styles from './Login.module.css';
const Login = () => {
  const {login} = React.useContext(UserContext);
  if(login === true) return <Navigate to="/account"/>
  return (
    <section className={styles.login}>
      <Head title="Login"/>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<LoginCreate />} />
          <Route path="forgot" element={<LoginPasswordLost />} />
          <Route path="reset" element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  )
}

export default Login

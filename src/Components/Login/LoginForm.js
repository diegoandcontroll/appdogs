import React from 'react';
import {Link} from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import { UserContext } from '../../UserContext';
import Button from '../Form/Button';
import Input from '../Form/Input';
import Error from '../Helper/Error';
import styles from './LoginForm.module.css';
import btnStyle from '../Form/Button.module.css';
const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const {userLogin, error, loading} = React.useContext(UserContext);
  
  async function handleSubmit(event){
    event.preventDefault();
    if(username.validate() && password.validate()){
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft ">
      <h1 className="title">Login</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input label="Usuario" type="text" name="username" {...username}/>
        <Input label="Senha" type="password" name="password" {...password}/>
        {loading ? <Button disabled>Loading...</Button> : <Button>Sign In</Button>}
        <Error error={error}/>
      </form>
      <Link to="/login/forgot" className={styles.forgot}>Perdeu a senha?</Link>
      <div className={styles.signIn}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link to="/login/create" className={btnStyle.button}>Cadastro</Link>
      </div>
    </section>
  )
}

export default LoginForm

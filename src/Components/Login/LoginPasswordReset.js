import React from 'react';
import Input from '../../Components/Form/Input';
import Button from '../../Components/Form/Button';
import Error from '../../Components/Helper/Error';
import useFetch from '../../Hooks/useFetch';
import useForm from '../../Hooks/useForm';
import { PASSWORD_RESET } from '../../api';
import { useNavigate } from 'react-router';
import Head from '../Helper/Head';
const LoginPasswordReset = () => {
  const navigate = useNavigate();
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');
  const password = useForm();
  const {data, error, loading, request} = useFetch();
  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if(key) setKey(key);
    if(login) setLogin(login);
  }, []);

  async function handleSubmit(event){
    event.preventDefault();
    if(password.validate()){
      const {options, url} = PASSWORD_RESET({
        login,
        key,
        password: password.value
      });
      const {response} = await request(url, options);
      if(response.ok) navigate('/login');
    }
  }
  return (
    <div>
      <Head title="Resete sua senha"/>
      <h1 className="title">Resete sua senha</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Nova senha" type="password" name="password" {...password}/>
        {loading ? (
          <Button disabled>Cadastrando nova senha...</Button>
        ) : (
          <Button>Gerar nova senha</Button>
        )}
      </form>
      <Error error={error}/>
    </div>
  )
}

export default LoginPasswordReset

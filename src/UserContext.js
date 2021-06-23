import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router';
import { GET_USER, TOKEN_POST, VALIDATE_TOKEN } from './api';
export const UserContext = React.createContext();
export const UserStorage = ({children}) => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const userLogout = React.useCallback(async function(){
    setData(null);
    setError(null);
    setLoading(false);
    setLoading(false);
    window.localStorage.removeItem('token');
    window.location.assign('http://localhost:3000/login');
  },[]);

  async function getUser(token){
    const {url, options} = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password){
    try{
      setError(null);
      setLoading(true);
      const {url, options} = TOKEN_POST({username, password});
      const tokenResponse = await fetch(url, options);
      if(!tokenResponse.ok) throw new Error(`Error: User invalid`);
      const {token} = await tokenResponse.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/account');
    }catch (err){
      setError(err.message);
      setLogin(false);
    }finally{
      setLoading(false);
    }
    
  }

  useEffect(() => {
    async function autoLogin(){
      const token = window.localStorage.getItem('token');
      if(token){
        try{
          setError(null);
          setLoading(true);
          const {url, options} = VALIDATE_TOKEN(token);
          const response = await fetch(url, options);
          if(!response.ok) throw new Error('Token invalid');
          await getUser(token);
        }catch(e){
          userLogout();
        }finally{
          setLoading(false);
        }
      }else{
        setLogin(false);
      }
    }
    autoLogin();
  },[userLogout]);
  
  
  return <UserContext.Provider value={{userLogin, data, userLogout, error, login, loading}}>{children}</UserContext.Provider>
  
}

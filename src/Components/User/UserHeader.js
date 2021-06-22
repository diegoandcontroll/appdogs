import React from 'react';
import { useLocation } from 'react-router-dom';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';
const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();
  React.useEffect(() => {
    switch(location.pathname){
      case '/account/post':
        setTitle('Poste Sua Foto');
        break;
      case '/account/statistic':
        setTitle('Estatísticas');
        break;
      default:
        setTitle('Minha Conta');

    }
  }, [location])
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader

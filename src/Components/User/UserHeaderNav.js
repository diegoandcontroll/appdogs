import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import useMedia from '../../Hooks/useMedia';
import {UserContext} from '../../UserContext';
import {ReactComponent as MyPhotos} from '../../Assets/feed.svg';
import {ReactComponent as Statistic} from '../../Assets/estatisticas.svg';
import {ReactComponent as Add} from '../../Assets/adicionar.svg';
import {ReactComponent as SignOut} from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const {userLogout} = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const {pathname} = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  },[pathname]);
  return (
    <>
    {mobile && <button 
      onClick={() => setMobileMenu(!mobileMenu)}
      className={`${styles.btnMobile} ${mobileMenu && styles.btnMobileActive}`}
      >
      </button>}
    <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
      <NavLink to="/account" end activeClassName={styles.active}><MyPhotos />{mobile && 'Minhas Fotos'}</NavLink>
      <NavLink to="/account/statistic" activeClassName={styles.active}><Statistic />{mobile && 'Estatísticas'}</NavLink>
      <NavLink to="/account/post" activeClassName={styles.active}><Add />{mobile && 'Adicionar Foto'}</NavLink>
      <button onClick={userLogout}><SignOut />{mobile && 'Sair'}</button>
    </nav>
    </>
  )
}

export default UserHeaderNav

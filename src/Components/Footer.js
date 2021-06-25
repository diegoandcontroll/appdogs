import React from 'react'
import styles from './Footer.module.css';
import {ReactComponent as Dogs} from '../Assets/dogs-footer.svg';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Desenvolvidor por <a href="https://github.com/diegoandcontroll" target="blank">Diego</a></p>
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer

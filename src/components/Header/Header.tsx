import * as React from 'react';
import styles from './Header.module.css';
import Logo from '../../assets/header.png';
import Newsletter from './Newsletter/Newsletter';
import Mac from '../../assets/mac.png';

function Header() {
    return (
        <div className={styles.header}>
            <img src={Logo} width="75%" alt="weNote logo" className={styles.logo} />
            <p className={styles.subtitle}>Study smarter, not harder.</p>
            <Newsletter />
            <img src={Mac} width="75%" alt="App preview" className={styles.mac} />
        </div>
    );
}

export default Header;

"use client"

import React, { useState } from "react"
import styles from './navbar.module.css';

function Navbar() {
    const [selectedItem, setSelectedItem] = useState('inicio')

    const handleItemClick = (item) => {
        setSelectedItem(item);
    }

    return (
        <nav className={styles.Navbar + ` ${selectedItem === 'Inicio' ? styles.selected : ''}`}>
            <div
                className={styles.NavbarItem}
                onclick={() => handleItemClick('Inicio')}

            >

                <a href="#header">Inicio</a>
            </div>
            <div
                className={styles.NavbarItem + ` ${selectedItem === 'Inicio' ? styles.selected : ''}`}
                onclick={() => handleItemClick('Skills')}
            >
                <a href="#info">Skills</a>
            </div>
        </nav>
    );
}

export default Navbar;
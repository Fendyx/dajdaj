import React, { useEffect } from 'react';
import "./Header.css";
import { toggleMenu, closeMenuOnClickOutside } from '../../tooglemenu.js'; // Импортируем обе функции
import logo from "../../img/dajdaj_logo.png";
import { Link } from "react-router-dom";

function Header() {
    useEffect(() => {
        // Добавляем обработчик клика по документу
        document.addEventListener('click', closeMenuOnClickOutside);
        
        // Убираем обработчик при размонтировании компонента (чтобы избежать утечек памяти)
        return () => {
            document.removeEventListener('click', closeMenuOnClickOutside);
        };
    }, []);
    
    return (
        <header>
        <div className="company_name_logo">
            <img src={logo} />
            <span>dajdaj</span>
        </div>
        
        {/*Навигация для десктопа*/}
        <div className="navigation_menu">
            <Link class="nav_link" to="/">Home</Link> |
            <Link class="nav_link" to="/products">Products</Link> | 
            <Link class="nav_link" to="/contacts">Contacts</Link>
        </div>

        {/*Кнопка бургер-меню*/}
        <div className="burger_menu" onClick={toggleMenu}>
            &#9776;
        </div>

        {/*Боковое меню для мобильных*/}
        <div className="mobile_menu">
            <span className="close_menu" onClick={toggleMenu}>&times;</span>
            <Link class="nav_link" to="/">Home</Link> 
            <Link class="nav_link" to="/products">Products</Link> 
            <Link class="nav_link" to="/contacts">Contacts</Link>
        </div>
    </header>
    );
}

export default Header;

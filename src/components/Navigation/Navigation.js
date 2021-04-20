import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Hamburger from './Hamburger/Hamburger';
import NavigationItem from './NavigationItem/NavigationItem';
import PhoneIcon from './assets/phone-icon.svg'
import convertToKebabCase from '../../hof/convertToKebabCase';
import './Navigation.scss';

// Temporary nav links. Fetch nav links from Craft
// TODO: Replace static nav links with links fetched from back-end
const navigationItems = [
    { text: 'Our Collection', childItems: [
        { path: '/collection/current-collection', text: 'Current Collection' },
        { path: '/collection/classic-collection', text: 'Classic Collection' },
    ]},
    { path: '/past-marques', text: 'Past Marques', childItems: null },
    { path: '/our-service', text: 'Our Service', childItems: null },
    { path: '/about-us', text: 'About Us', childItems: null },
];

const Navigation = () => {
    const [navMobOpen, setNavMobOpen] = useState(false);

    let navbarMenuClasses = "navbar-menu flex flex-col lg:flex-row justify-between flex-grow ml-4";
    navbarMenuClasses = navMobOpen ? navbarMenuClasses += " navbar-menu--shown" : navbarMenuClasses;    

    const toggleMobNavMenu = () => {
        setNavMobOpen(prevNavMobOpen => {
            return !navMobOpen;
        });
    }

    return (
        <header>
            <nav className="navbar flex flex-col lg:flex-row flex-wrap py-2 px-4" role="navigation">
                <div className="navbar-brand flex justify-between">
                    <Logo isLink classes="mr-4" />
                    
                    <Hamburger toggleMobNav={toggleMobNavMenu} isActive={navMobOpen} />
                </div>

                <div className={navbarMenuClasses}>
                    {/* Main Nav Items */}
                    <div className="navbar-start flex flex-col lg:flex-row justify-center lg:justify-start items-center flex-grow">
                        { navigationItems.map(item => (
                            <NavigationItem path={item.path} childItems={item.childItems} key={convertToKebabCase(item.text)}>{ item.text }</NavigationItem>
                        )) }
                    </div>

                    {/* Minor Nav Items incl. contact */}
                    <div className="navbar-end flex flex-col lg:flex-row justify-center items-center mt-6 lg:mt-0">
                        <a className="nav-item flex items-center contact-call" href="tel:+447971124144">
                            <img src={PhoneIcon} className="mr-2" alt="" width="25" height="25" />
                            +44 7971 124144
                        </a>
                        
                        <Link to="/contact-us" className="nav-item border rounded px-4 py-2 ml-4 mt-4 lg:mt-0">Contact Us</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
import { Link } from 'react-router-dom';

import Logo from '../Logo/Logo';
import Hamburger from './Hamburger/Hamburger';
import NavigationItem from './NavigationItem/NavigationItem';
import PhoneIcon from './assets/phone-icon.svg'
import './Navigation.scss';

// Temporary nav links. Fetch nav links from Craft
// TODO: Replace static nav links with links fetched from back-end
const navigationItems = [
    { path: '/', text: 'Home', childItems: null },
    { text: 'Our Collection', childItems: [
        { path: '/collection/current-collection', text: 'Current Collection' },
        { path: '/collection/classic-collection', text: 'Classic Collection' },
    ]},
    { path: '/past-marques', text: 'Past Marques', childItems: null },
    { path: '/our-service', text: 'Our Service', childItems: null },
    { path: '/about-us', text: 'About Us', childItems: null },
]

const Navigation = () => {
    return (
        <header className="App-header">
            <nav className="navbar" role="navigation">
                <div className="navbar-brand">
                    <Logo isLink />
                    
                    <Hamburger />
                </div>

                <div className="navbar-menu" id="navMenu">
                    {/* Main Nav Items */}
                    <div className="navbar-start">
                        { navigationItems.map(item => (
                            <NavigationItem path={item.path} childItems={item.childItems}>{ item.text }</NavigationItem>
                        )) }
                    </div>

                    {/* Minor Nav Items incl. contact */}
                    <div className="navbar-end">
                        <a className="navbar-item contact-call" href="tel:+447971124144">
                            <img src={PhoneIcon} alt="" width="25" height="25" />
                            +44 7971 124144
                        </a>
                        
                        <Link pathName="/contact-us" className="nav-item btn nav-btn">Contact Us</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
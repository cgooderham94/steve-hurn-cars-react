import React from 'react';

import Link from 'next/link';

const Footer = ({ copyrightStatement }) => {
    // TODO: Setup footer nav, sundry and social links as API data
    let navLinks = [
        {
            path: '/current-collection',
            text: 'Current Sales'
        },
        {
            path: '/classic-collection',
            text: 'Classic Sales'
        },
        {
            path: '/past-marques',
            text: 'Past Marques'
        },
        {
            path: '/our-service',
            text: 'Our Service'
        },
        {
            path: '/about-us',
            text: 'About'
        },
        {
            path: '/contact-us',
            text: 'Contact Us'
        }
    ];
    let sundryLinks = [
        {
            path: '/privacy-policy',
            text: 'Privacy Policy'
        },
        {
            path: '/cookie-policy',
            text: 'Cookie Policy'
        }
    ];
    let socialLinks = [
        {
            platformName: 'Facebook',
            url: 'https://www.facebook.com/stevehurncars/',
        },
        {
            platformName: 'Twitter',
            url: 'https://twitter.com/Shcars1',
        },
        {
            platformName: 'Instagram',
            url: 'https://www.instagram.com/steve_hurn_cars/',
        },
    ];

    return (
        <footer className="flex flex-col px-4 py-12">
            <p className="footer__biz-name text-gray-600 mx-auto text-2xl font-semibold">Steve Hurn Cars</p>

            { navLinks && (
                <nav className="mx-auto mt-10">
                    <ul className="flex flex-wrap justify-center">
                        { navLinks.map(link => (
                            <li className="footer-nav__item mx-1" key={link.path}>
                                <Link href={link.path}><a className="px-2 text-sm tracking-wide uppercase">{ link.text }</a></Link>
                            </li>)) }
                    </ul>
                </nav>
            ) }

            { sundryLinks && (
                <nav className="mx-auto mt-2">
                    <ul className="flex flex-wrap">
                        {/* TODO: Change key to a proper ID */}
                        { sundryLinks.map(link => (
                            <li className="footer-nav__sundry-item text-xs" key={link.path}>
                                <Link href={link.path}><a className="px-1 text-gray-900 text-opacity-75">{ link.text }</a></Link>
                            </li>
                        )) }
                    </ul>
                </nav>
            ) }

            { socialLinks ? (
                <nav className="mx-auto my-8">
                    <ul className="flex flex-wrap">
                        {/* TODO: Change key to a proper ID */}
                        { socialLinks.map(link => (
                            <li className="footer-nav__social-item mx-1" key={link.platformName}>
                                <a href={link.url} className="block px-1 py-2">
                                    <img src={`/img/icons/${link.platformName}.svg`} width="20"/>
                                    <span className="sr-only">{ link.platformName }</span>
                                </a>
                            </li>
                        )) }
                    </ul>
                </nav>
            ) : null }

            <p className="footer__site-by text-xs py-2 mx-auto text-center tracking-wide">
                Website by <a href="https://www.linkedin.com/in/charles-gooderham/" 
                                className="font-bold tracking-wider text-gray-600" target="_blank" rel="noopener">Euphoriq</a>
            </p>
        </footer>
    );
}

export default Footer;
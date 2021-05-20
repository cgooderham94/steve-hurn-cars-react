import React from 'react';
import Link from 'next/link';
import Dropdown from '../../UI/Dropdown';
import convertToKebabCase from '../../../hof/convertToKebabCase';

const NavigationItem = (props) => {
    let navigationItem;
        
    if (props.childItems) {
        navigationItem = <Dropdown dropdownText={ props.children } classes="nav-dropdown">
            { props.childItems.map(item => (
                <Link href={item.path} className="dropdown-item" key={convertToKebabCase(item.text)} passHref>
                    <a className="dropdown-item text-gray-700">
                        { item.text }
                    </a>
                </Link>
            )) }
        </Dropdown>;
    } else {
        navigationItem = <div className="nav-item">
            <Link href={props.path} passHref><a className="nav-link text-gray-700">{ props.children }</a></Link>
        </div>
    }

    return navigationItem;
}

export default NavigationItem;
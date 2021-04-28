import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../../UI/Dropdown/Dropdown';
import convertToKebabCase from '../../../hof/convertToKebabCase';
import './NavigationItem.scss';

const NavigationItem = (props) => {
    let navigationItem;

    if (props.childItems) {
        navigationItem = <Dropdown dropdownText={ props.children } classes="nav-dropdown">
            { props.childItems.map(item => <Link to={item.path} className="dropdown-item" key={convertToKebabCase(item.text)}>{ item.text }</Link>) }
        </Dropdown>;
    } else {
        navigationItem = <div className="nav-item">
            <Link to={props.path} className="nav-link">{ props.children }</Link>
        </div>
    }

    return navigationItem;
}

export default NavigationItem;
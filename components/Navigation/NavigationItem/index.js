import React from 'react';
import Dropdown from '../../UI/Dropdown';
import convertToKebabCase from '../../../hof/convertToKebabCase';

const NavigationItem = (props) => {
    let navigationItem;
        
    if (props.childItems) {
        navigationItem = <Dropdown dropdownText={ props.children } classes="nav-dropdown">
            { props.childItems.map(item => <a href={item.path} className="dropdown-item" key={convertToKebabCase(item.text)}>{ item.text }</a>) }
        </Dropdown>;
    } else {
        navigationItem = <div className="nav-item">
            <a href={props.path} className="nav-link">{ props.children }</a>
        </div>
    }

    return navigationItem;
}

export default NavigationItem;
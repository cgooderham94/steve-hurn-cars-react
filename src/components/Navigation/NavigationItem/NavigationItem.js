
import React from 'react';
import { Link } from 'react-router-dom';

const NavigationItem = (props) => {
    let navItemClasses = "nav-item";
    let childItems;

    if (props.childItems) {
        navItemClasses += " nav-item--has-dropdown";

        childItems = (
            <div class="dropdown-items">
                { props.childItems.map(item => <Link to={item.path} className="nav-link">{ item.text }</Link>) }
            </div>
        );
    }

    return (
        <div className={navItemClasses}>
            <Link to={props.path} className="nav-link">{ props.children }</Link>
            
            { childItems }
        </div>
    );
}

export default NavigationItem;
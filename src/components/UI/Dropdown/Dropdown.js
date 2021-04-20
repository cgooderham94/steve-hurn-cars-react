import React, { useState } from 'react';
import './Dropdown.scss';

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    let dropdownClasses = "dropdown nav-item";
    let dropdownMenuClasses = "dropdown-menu";
    dropdownClasses = props.classes ? dropdownClasses += ' ' + props.classes : dropdownClasses;
    dropdownMenuClasses = isOpen ? dropdownMenuClasses += ' dropdown-menu--shown border-t-2': dropdownMenuClasses;

    const toggleDropdown = () => {
      setIsOpen(prevIsOpen => {
        return !prevIsOpen;
      });
    };

    return (
        <div className={dropdownClasses}>
            <button href="#" className="nav-link" onClick={toggleDropdown} 
              aria-expanded={isOpen} aria-haspopup="true">{ props.dropdownText }</button>

            <div className={dropdownMenuClasses}>
                { props.children }
            </div>
        </div>
    )
};

export default Dropdown;
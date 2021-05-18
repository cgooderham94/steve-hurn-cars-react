import React, { useState, useEffect, useRef } from 'react';

const Dropdown = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    let dropdownClasses = "dropdown nav-item";
    let dropdownMenuClasses = "dropdown-menu";
    let dropdownMenuRef = useRef();
    dropdownClasses = props.classes ? dropdownClasses += ' ' + props.classes : dropdownClasses;
    dropdownMenuClasses = isOpen ? dropdownMenuClasses += ' dropdown-menu--shown border-t-2' : dropdownMenuClasses;

    const toggleDropdown = () => {
      setIsOpen(prevIsOpen => {
        return !prevIsOpen;
      });
    };

    // When focusing out of the dropdown menu, close it.
    const actionOutsideHandler = (event) => {
      if (dropdownMenuRef.current && !dropdownMenuRef.current.contains(event.target)) {
        isOpen && toggleDropdown();
      };
    };

    useEffect(() => {
      document.addEventListener('focusin', actionOutsideHandler, false);
      document.addEventListener('mousedown', actionOutsideHandler, false);

      return () => {
        document.removeEventListener('focusin', actionOutsideHandler, false);
        document.removeEventListener('mousedown', actionOutsideHandler, false);
      }
    });

    return (
      <div className={dropdownClasses} ref={dropdownMenuRef}>
          <button href="#" className="nav-link" onClick={toggleDropdown} 
            aria-expanded={isOpen} aria-haspopup="true">{ props.dropdownText }</button>

          <div className={dropdownMenuClasses} onClick={toggleDropdown}>
              { props.children }
          </div>
      </div>
    );
};

export default Dropdown;
import './Hamburger.scss';

const Hamburger = props => {
    let classes = "hamburger hamburger--spring lg:hidden my-auto";

    if (props.isActive) {
        classes += " is-active";
    }

    return (
        <button className={classes} type="button" onClick={props.toggleMobNav}>
            <span className="hamburger-box">
                <span className="hamburger-inner"></span>
            </span>
        </button>
    )    
}

export default Hamburger;
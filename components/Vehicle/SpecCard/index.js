const SpecCard = (props) => {    
    return (
        <div className="spec-card p-4 bg-cream">
            { props.children }
        </div>
    );
}

export default SpecCard;
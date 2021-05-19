const VehicleListingCard = ({ vehicle }) => {
    let { 
        title,
        make,
        model,
        mileage,
        price,
        images,
        power,
        torque,
        acceleration,
        topSpeed,
        year 
    } = vehicle;

    return (
        <>
            <h1>{ title }</h1>
            <dl>
                <dt className="sr-only">Price</dt>
                <dd>{ `£${price}` }</dd>
                <dt className="sr-only">Year of manufacture</dt>
                <dd>{ year }</dd>
                <dt className="sr-only">Mileage</dt>
                <dd>{  `${mileage} miles` }</dd>
            </dl>
        </>
    );
}

export default VehicleListingCard;
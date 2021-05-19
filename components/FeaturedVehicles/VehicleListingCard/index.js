import Image from 'next/image';

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
        url,
        vehicleImages,
        year
    } = vehicle;
    let featuredImage = vehicleImages[0];

    return (
        <a href={ url } className="card--featured-vehicle border border-gray shadow-sm hover:shadow-none transition-all">
            <div className="card__header relative">
                { featuredImage && (
                    <Image
                        className="block"
                        src={featuredImage.url}
                        alt={featuredImage.title}
                        width={featuredImage.width}
                        height={featuredImage.height}
                        key={featuredImage.id}
                    />
                ) }
            </div>

            <div className="card__content p-5">
                <h3 className="text-lg font-bold">{ title }</h3>
                <dl className="card__detail-list flex flex-wrap -mx-3">
                    <div className="px-3">
                        <dt className="sr-only">Price</dt>
                        <dd>{ `£${price}` }</dd>
                    </div>
                    <div className="px-3">
                        <dt className="sr-only">Year of manufacture</dt>
                        <dd>{ year }</dd>
                    </div>
                    <div className="px-3">
                        <dt className="sr-only">Mileage</dt>
                        <dd>{  `${mileage} miles` }</dd>
                    </div>
                </dl>
            </div>
        </a>
    );
}

export default VehicleListingCard;
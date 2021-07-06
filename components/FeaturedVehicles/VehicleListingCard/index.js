import Image from 'next/image';

const VehicleListingCard = ({ vehicle, hasLink = true }) => {
    let {
        availability,
        collection,
        title,
        mileage,
        price,
        uri,
        vehicleImages,
        year
    } = vehicle;
    let featuredImage = vehicleImages[0];
    let cardContent = <>
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
                    <dd>{ availability ? `£${price}` : 'SOLD' }</dd>
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
    </>;
    let card = null;

    if (hasLink) {
        card = (
            <a href={ `/collection/${collection}/${uri}` } className="card--featured-vehicle my-2 border border-gray shadow-sm hover:shadow-none transition-all">
                { cardContent }
            </a>
        );
    } else {
        card = (
            <div className="card--featured-vehicle my-2 border border-gray shadow-sm hover:shadow-none transition-all">
                { cardContent }
            </div>
        );
    }

    return card;
}

export default VehicleListingCard;
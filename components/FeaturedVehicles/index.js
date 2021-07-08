import React from 'react'

import VehicleListingCard from '../FeaturedVehicles/VehicleListingCard'
import Button from '../UI/Button';

const FeaturedVehicles = props => {
    const { featuredVehiclesBlock, featuredVehicles } = props;
    let block = null;
    let vehicleCards = null;
    const { heading, body, linkText, linkUrl } = featuredVehiclesBlock || {};

    if (featuredVehicles.length) {
        vehicleCards = (
            <div className={`featured-vehicles__vehicles ${featuredVehiclesBlock && 'mt-20'}`}>
                <div className="grid grid-flow-row md:grid-flow-col md:grid-cols-2 justify-center md:gap-x-16">
                    { featuredVehicles.map(vehicle => {
                        return (
                            <VehicleListingCard vehicle={vehicle} key={vehicle.id}/>
                        );
                    }) }
                </div>
            </div>
        )
    }

    block = (
        <section className="featured-vehicles px-4 py-20">
            <div className="container mx-auto">
                { featuredVehiclesBlock && (
                    <div className="featured-vehicles__intro sm:w-4/6 mx-auto text-center">
                        { heading && <h2 className="text-green">{ heading }</h2> }
                        { body && <p className="mt-4">{ body }</p> }
                        { linkUrl && linkText && <Button link={ linkUrl } classes={['bg-white', 'mt-4']}>{ linkText }</Button> }
                    </div>
                ) }
                
                { vehicleCards }
            </div>
        </section>
    );

    return block;
}

export default FeaturedVehicles;
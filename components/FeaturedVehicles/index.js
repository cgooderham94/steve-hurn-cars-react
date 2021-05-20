import React from 'react'

import VehicleListingCard from '../FeaturedVehicles/VehicleListingCard'
import Button from '../UI/Button';

const FeaturedVehicles = props => {
    const { featuredVehiclesBlock, featuredVehicles } = props;
    let block = null;

    if (featuredVehiclesBlock.length) {
        const { heading, body, linkText, linkUrl } = featuredVehiclesBlock[0];

        block = (
            <section className="featured-vehicles px-4 py-20">
                <div className="container mx-auto">
                    <div className="featured-vehicles__intro sm:w-4/6 mx-auto text-center">
                        { heading && <h2 className="text-green">{ heading }</h2> }
                        { body && <p className="mt-4">{ body }</p> }
                        { linkUrl && linkText && <Button link={ linkUrl } classes={['bg-white', 'mt-4']}>{ linkText }</Button> }
                    </div>
                    
                    <div className="featured-vehicles__vehicles mt-20">
                        <div className="grid grid-flow-row md:grid-flow-col md:auto-cols-auto md:gap-x-16">
                            { featuredVehicles.map(vehicle => {
                                return (
                                    <VehicleListingCard vehicle={vehicle} key={vehicle.id}/>
                                );
                            }) }
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return block;
}

export default FeaturedVehicles;
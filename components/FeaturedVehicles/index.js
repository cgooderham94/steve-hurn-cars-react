import React from 'react'

import Button from '../UI/Button';

const FeaturedVehicles = props => {
    const { featuredVehiclesBlock } = props;
    let featuredVehicles = null;

    console.log(featuredVehiclesBlock[0].heading);

    if (featuredVehiclesBlock.length) {
        const { heading, body, linkText, linkUrl } = featuredVehiclesBlock[0];

        featuredVehicles = (
            <section className="featured-vehicles py-20">
                <div className="container mx-auto">
                    <div className="featured-vehicles__intro sm:w-4/6 mx-auto text-center">
                        { heading && <h2 className="text-green">{ heading }</h2> }
                        { body && <p className="mt-4">{ body }</p> }
                        { linkUrl && linkText && <Button link={ linkUrl } classes={['bg-white', 'mt-4']}>{ linkText }</Button> }
                    </div>
                    
                    <div className="featured-vehicles__vehicles">
                        <div className="grid grid-flow-row md:grid-flow-col md:auto-cols-auto md:gap-x-16">
                            <div className="featured-vehicles__vehicle">
                                {/* TODO: <VehicleListingCard /> to go here once complete. */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return featuredVehicles;
}

export default FeaturedVehicles;
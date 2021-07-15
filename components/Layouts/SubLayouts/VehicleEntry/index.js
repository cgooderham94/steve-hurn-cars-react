import React, { useRef } from 'react'

import ImgCarousel from '../../../ImgCarousel';
import SpecCard from '../../../Vehicle/SpecCard';
import Fragment from '../../../Fragment/index.js';
import VehicleEnquiry from '../../../Forms/VehicleEnquiry';

const VehicleEntrySubLayout = ({ vehicleData }) => {
    // Function Variables
    const filterBySpecValue = (spec) => {
        return !spec.value.length;
    }

    const scrollToEl = (elRef, event) => {
        event?.preventDefault();
        elRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    // Data Variables
    const vehiclePrice = vehicleData.price ? `£${vehicleData.price}` : 'POA';
    const vehicleSpecs = [
        {
            label: 'Power',
            value: vehicleData.power,
            unit: 'bhp'
        },
        {
            label: '0-60',
            value: vehicleData.acceleration,
            unit: 's'
        },
        {
            label: 'Torque',
            value: vehicleData.torque,
            unit: 'nm'

        },
        {
            label: 'Top Speed',
            value: vehicleData.topSpeed,
            unit: 'mph'
        }
    ]
    const h2Classes = "font-bold text-green text-lg";
    const enquiryFormFragRef = useRef(null);
    let availableVehicleSpecs = vehicleSpecs.filter(filterBySpecValue);

    // JSX Element Variables
    let vehicleSpecsEl = null;
    let vehicleDescEl = null;
    
    if (availableVehicleSpecs.length) {
        vehicleSpecsEl = (
            <div className="my-10">
                <div className="container px-4 mx-auto">
                    <h2 className={h2Classes}>Tech Specs</h2> 

                    <dl className="vehicle__spec-cards grid grid-cols-1 sm:grid-cols-4 gap-4 mt-5">
                        { availableVehicleSpecs.map(spec => {
                            return spec.label && spec.value && (
                                <SpecCard>
                                    <dt>{ spec.label }</dt>
                                    <dd>{ spec.value + spec.unit }</dd>
                                </SpecCard>
                            )
                        }) }
                    </dl>
                </div>
            </div>
        )
    }

    if (vehicleData.bodyText) {
        vehicleDescEl = (
            <div className="vehicle__description bg-cream">
                <div className="container px-4 py-14 mt-10 lg:mt-14 mx-auto">
                    <h2 id="key-info-label" className={h2Classes}>Key Information</h2>

                    <div className="vehicle__desc mt-4 lg:mt-5" aria-labelledby="key-info-label" dangerouslySetInnerHTML={{ __html: vehicleData.bodyText }}></div>
                </div>
            </div>
        )
    }

    return (
        <>
            <ImgCarousel images={vehicleData.vehicleImages} />

            <div className="vehicle__intro mt-6 lg:mt-14">
                <div className="container px-4 mx-auto">
                    <h1 className="text-2xl lg:text-4xl">{ vehicleData.title }</h1>

                    <div className="mt-5 lg:mt-6 text-green text-lg lg:text-xl">
                        <dl className="inline-dl inline-dl--divided mt-5">
                            <div>    
                                <dt className="sr-only">Price</dt>
                                <dd>{ vehiclePrice }</dd>
                            </div>
                            <div>
                                <dt className="sr-only">Year</dt>
                                <dd>{ vehicleData.year }</dd>
                            </div>
                            <div>
                                <dt className="sr-only">Mileage</dt>
                                <dd>{ `${vehicleData.mileage} miles` }</dd>
                            </div>
                        </dl>

                        <a href="#" 
                            onClick={e => scrollToEl(enquiryFormFragRef, e)} 
                            className="inline-block p-2 mt-4 rounded-sm text-green bg-cream"><img src="/img/icons/enquire.svg" className="inline-block mr-1" width="20" height="20" alt=""/> Enquire</a>
                    </div>
                </div>
            </div>

            { vehicleSpecsEl }
            
            { vehicleDescEl }

            <div className="my-10 bg-cream">
                <div className="container px-4 py-14 mt-10 lg:mt-14 mx-auto">
                    <h2 className={h2Classes}>Can we help you?</h2>

                    <p>If you have any questions about how we can help with this vehicle, please contact us via the form below.</p>

                    <Fragment elRef={enquiryFormFragRef}/>
                    <VehicleEnquiry classes="mt-8" referralPage={vehicleData.title}/>
                </div>
            </div>
        </>
    );
}

export default VehicleEntrySubLayout;
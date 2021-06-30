import React, { useRef } from 'react'
import { gql } from '@apollo/client';
import client from '../../../apollo-client';

import StandardLayout from '../../../components/StandardLayout';
import ImgCarousel from '../../../components/ImgCarousel';
import SpecCard from '../../../components/Vehicle/SpecCard';
import Fragment from '../../../components/Fragment/index.js';
import VehicleEnquiry from '../../../components/Form/Forms/VehicleEnquiry/index.tsx';

const VehicleDetail = ({ VEHICLE_DATA }) => {
    const vehiclePrice = VEHICLE_DATA.price ? `£${VEHICLE_DATA.price}` : 'POA';
    const vehicleSpecs = {
        power: {
            label: 'Power',
            value: VEHICLE_DATA.power,
            unit: 'bhp'
        },
        accel: {
            label: '0-60',
            value: VEHICLE_DATA.acceleration,
            unit: 's'
        },
        torque: {
            label: 'Torque',
            value: VEHICLE_DATA.torque,
            unit: 'nm'

        },
        topSpeed: {
            label: 'Top Speed',
            value: VEHICLE_DATA.topSpeed,
            unit: 'mph'
        }
    }
    const h2Classes = "font-bold text-green text-lg";
    const enquiryFormFragId = "vehicle-enquiry-fragment";
    const formInputs = [
        {
            type: 'text',
            attrs: {
                name: 'firstName',
                id: 'firstName'
            }
        }
    ]
    const enquiryFormFragRef = useRef(null);

    const scrollToEl = ( elRef, event ) => {
        event?.preventDefault();
        elRef.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <StandardLayout>
            <ImgCarousel images={VEHICLE_DATA.vehicleImages} />

            <div className="vehicle__intro mt-6 lg:mt-14">
                <div className="container px-4 mx-auto">
                    <h1 className="text-2xl lg:text-4xl">{ VEHICLE_DATA.title }</h1>

                    <div className="mt-5 lg:mt-6 text-green text-lg lg:text-xl">
                        <dl className="inline-dl inline-dl--divided mt-5">
                            <div>    
                                <dt className="sr-only">Price</dt>
                                <dd>{ vehiclePrice }</dd>
                            </div>
                            <div>
                                <dt className="sr-only">Year</dt>
                                <dd>{ VEHICLE_DATA.year }</dd>
                            </div>
                            <div>
                                <dt className="sr-only">Mileage</dt>
                                <dd>{ `${VEHICLE_DATA.mileage} miles` }</dd>
                            </div>
                        </dl>

                        <a href="#" 
                            onClick={e => scrollToEl(enquiryFormFragRef, e)} 
                            className="inline-block p-2 mt-4 rounded-sm text-green bg-cream"><img src="/img/icons/enquire.svg" className="inline-block mr-1" width="20" height="20" alt=""/> Enquire</a>
                    </div>
                </div>
            </div>

            <div className="vehicle__description bg-cream">
                <div className="container px-4 py-14 mt-10 lg:mt-14 mx-auto">
                    <h2 id="key-info-label" className={h2Classes}>Key Information</h2>

                    <div className="vehicle__desc mt-4 lg:mt-5" aria-labelledby="key-info-label" dangerouslySetInnerHTML={{ __html: VEHICLE_DATA.bodyText }}></div>
                </div>
            </div>

            <div className="my-10">
                <div className="container px-4 mx-auto">
                    <h2 className={h2Classes}>Tech Specs</h2> 

                    <dl className="vehicle__spec-cards grid grid-cols-1 sm:grid-cols-4 gap-4 mt-5">
                        { Object.keys(vehicleSpecs).map(spec => {
                            return vehicleSpecs[spec].label && vehicleSpecs[spec].value && (
                                <SpecCard>
                                    <dt>{ vehicleSpecs[spec].label }</dt>
                                    <dd>{ vehicleSpecs[spec].value + vehicleSpecs[spec].unit }</dd>
                                </SpecCard>
                            )
                        }) }
                    </dl>
                </div>
            </div>

            <div className="my-10 bg-cream">
                <div className="container px-4 py-14 mt-10 lg:mt-14 mx-auto">
                    <h2 className={h2Classes}>Can we help you?</h2>

                    <p>If you have any questions about how we can help with this vehicle, please contact us via the form below.</p>

                    <Fragment elRef={enquiryFormFragRef}/>
                    <VehicleEnquiry classes="mt-8" referralPage={VEHICLE_DATA.title}/>
                </div>
            </div>

        </StandardLayout>
    );
}

export default VehicleDetail;

export async function getServerSideProps(context) {
    const { data } = await client.query({
        query: gql`
            query GetVehicle($slug: [String]) {
                entry(section: "vehicles", slug: $slug) {
                    ... on vehicles_vehicles_Entry {
                        id
                        acceleration
                        bodyText
                        make
                        mileage
                        model
                        power
                        price
                        title
                        topSpeed
                        torque
                        vehicleImages {
                        ... on vehicles_Asset {
                            id
                            url
                            title
                            width
                            height
                        }
                        }
                        year
                    }
                }
            }
        `,
        variables: {
            slug: context.params.slug
        }
    });

    return {
        props: {
            VEHICLE_DATA: data.entry
        }
    }
}
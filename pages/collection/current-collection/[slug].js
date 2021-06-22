import { gql } from '@apollo/client';
import client from '../../../apollo-client';

import StandardLayout from '../../../components/StandardLayout';
import ImgCarousel from '../../../components/ImgCarousel';
import SpecCard from '../../../components/Vehicle/SpecCard';

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

    return (
        <StandardLayout>
            <ImgCarousel images={VEHICLE_DATA.vehicleImages} />

            <div className="vehicle__intro mt-6 lg:mt-14">
                <div className="container px-4 mx-auto">
                    <h1 className="text-2xl lg:text-4xl">{ VEHICLE_DATA.title }</h1>

                    <dl className="inline-dl inline-dl--divided mt-5 lg:mt-6 text-green text-lg lg:text-xl">
                        <div>    
                            <dt class="sr-only">Price</dt>
                            <dd>{ vehiclePrice }</dd>
                        </div>
                        <div>
                            <dt class="sr-only">Year</dt>
                            <dd>{ VEHICLE_DATA.year }</dd>
                        </div>
                        <div>
                            <dt class="sr-only">Mileage</dt>
                            <dd>{ `${VEHICLE_DATA.mileage} miles` }</dd>
                        </div>
                    </dl>
                </div>
            </div>

            <div className="vehicle__description bg-cream">
                <div className="container px-4 py-14 mt-14 mx-auto">
                    <p id="key-info-label" className="font-bold text-green text-lg">Key Information</p>
                    <div className="vehicle__desc mt-4 lg:mt-5" aria-labelledby="key-info-label" dangerouslySetInnerHTML={{ __html: VEHICLE_DATA.bodyText }}></div>
                </div>
            </div>

            <div className="my-10">
                <div className="container px-4 mx-auto">
                    <dl className="vehicle__spec-cards grid grid-cols-4 gap-x-4">
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
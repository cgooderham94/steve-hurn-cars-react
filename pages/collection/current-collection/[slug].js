import { gql } from '@apollo/client';
import client from '../../../apollo-client';

import StandardLayout from '../../../components/StandardLayout';
import ImgCarousel from '../../../components/ImgCarousel';

const VehicleDetail = ({ VEHICLE_DATA }) => {
    const vehiclePrice = VEHICLE_DATA.price ? `£${VEHICLE_DATA.price}` : 'POA';

    return (
        <StandardLayout>
            <ImgCarousel images={VEHICLE_DATA.vehicleImages} />

            <div className="vehicle__intro mt-6 lg:mt-14">
                <div className="container px-4 mx-auto">
                    <h1 className="text-2xl lg:text-4xl">{ VEHICLE_DATA.title }</h1>

                    <div className="vehicle__price mt-5 lg:mt-6 text-green text-lg lg:text-xl">{ vehiclePrice }</div>

                    <div className="vehicle__desc mt-5 lg:mt-6" dangerouslySetInnerHTML={{ __html: VEHICLE_DATA.bodyText }}></div>
                </div>
            </div>

            <div className="vehicle__specs my-10">
                <div className="container px-4 mx-auto">
                    <dl className="flex justify-around">
                        <div>
                            <dt>Year:</dt>
                            <dd>{ VEHICLE_DATA.year }</dd>
                        </div>
                        <div>
                            <dt>Mileage:</dt>
                            <dd>{ `${VEHICLE_DATA.mileage} miles` }</dd>
                        </div>
                        <div>
                            <dt>Power:</dt>
                            <dd>{ `${VEHICLE_DATA.power}bhp` }</dd>
                        </div>
                        <div>
                            <dt>0-60:</dt>
                            <dd>{ `${VEHICLE_DATA.acceleration}s` }</dd>
                        </div>
                        <div>
                            <dt>Torque:</dt>
                            <dd>{ `${VEHICLE_DATA.torque}nm` }</dd>
                        </div>
                        <div>
                            <dt>Top Speed:</dt>
                            <dd>{ `${VEHICLE_DATA.topSpeed}mph` }</dd>
                        </div>
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
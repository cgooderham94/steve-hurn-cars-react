import { gql } from '@apollo/client';
import client from '../../../apollo-client';

import StandardLayout from '../../../components/StandardLayout';
import ImgCarousel from '../../../components/ImgCarousel';

const VehicleDetail = ({ VEHICLE_DATA }) => {
    const vehiclePrice = VEHICLE_DATA.price ? `£${VEHICLE_DATA.price}` : 'POA';

    return (
        <StandardLayout>
            <ImgCarousel images={VEHICLE_DATA.vehicleImages} />

            <div className="vehicle__intro">
                <div className="container mx-auto">
                    <h1>{ VEHICLE_DATA.title }</h1>

                    { vehiclePrice }
                </div>
            </div>

            { VEHICLE_DATA.year }
            { VEHICLE_DATA.mileage }
        </StandardLayout>
    );
}

export default VehicleDetail;

export async function getServerSideProps(context) {
    console.log(context);

    const { data } = await client.query({
        query: gql`
            query GetVehicle($slug: [String]) {
                entry(section: "vehicles", slug: $slug) {
                    ... on vehicles_vehicles_Entry {
                        id
                        make
                        mileage
                        model
                        acceleration
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
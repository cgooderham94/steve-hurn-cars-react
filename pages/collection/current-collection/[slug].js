import { gql } from '@apollo/client';
import client from '../../../apollo-client';

import StandardLayout from '../../../components/Layouts/StandardLayout';
import VehicleEntrySubLayout from '../../../components/Layouts/SubLayouts/VehicleEntry';

const VehicleDetail = ({ VEHICLE_DATA }) => {
    return (
        <StandardLayout>
            <VehicleEntrySubLayout vehicleData={VEHICLE_DATA} />
        </StandardLayout>
    );
}

export default VehicleDetail;

export async function getServerSideProps(context) {
    const { data } = await client.query({
        query: gql`
            query GetVehicle($slug: [String]) {
                entry(section: "vehicles", slug: $slug, collection: "current-collection") {
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
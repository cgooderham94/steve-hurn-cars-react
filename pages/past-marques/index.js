import React from 'react';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

import StandardLayout from '../../components/StandardLayout';
import IntroBlock from '../../components/IntroBlock';
import VehicleListingCard from '../../components/FeaturedVehicles/VehicleListingCard';

const PastMarques = ({ PAST_MARQUES_DATA, VEHICLES_DATA }) => {
    return (
        <StandardLayout>
            <IntroBlock introBlock={PAST_MARQUES_DATA.introBlock} />

            <div id="past-marques-collection">
                <div className="container px-4 py-14 lg:mt-10 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        { VEHICLES_DATA.map(vehicle => {
                            return <VehicleListingCard key={vehicle.id} vehicle={vehicle} hasLink={false}></VehicleListingCard>
                        }) }
                    </div>
                </div>
            </div>
        </StandardLayout>
    );
};

export default PastMarques;

export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
            query getPastMarques {
                entry(section: "pastMarques") {
                    ... on pastMarques_pastMarques_Entry {
                        id
                        title
                        introBlock {
                            ... on introBlock_textColumns_BlockType {
                                heading
                                id
                                logo {
                                    ... on miscellaneous_Asset {
                                        id
                                        url
                                    }
                                }
                                logoOverline
                                textBlocks {
                                    ... on textBlocks_BlockType {
                                        id
                                        heading
                                        bodyText
                                        buttonUrl
                                        buttonText
                                    }
                                }
                                typeHandle
                            }
                            ... on introBlock_basic_BlockType {
                                id
                                bodyText
                                buttons {
                                    ... on buttons_BlockType {
                                        id
                                        buttonText
                                        buttonUrl   
                                    }
                                }
                                heading
                                typeHandle
                            }
                        }
                    }
                }
                entries(section: "vehicles", availability: false) {
                    ... on vehicles_vehicles_Entry {
                        id
                        availability
                        mileage
                        title
                        uri
                        vehicleImages {
                            ... on vehicles_Asset {
                                id
                                title
                                url
                                width
                                height
                            }
                        }
                        year
                    }
                }
            }
        `
    });

    return {
        props: {
            PAST_MARQUES_DATA: data.entry,
            VEHICLES_DATA: data.entries
        }
    }
}
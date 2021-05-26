import React from 'react';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

import StandardLayout from '../../components/StandardLayout';
import IntroBlock from '../../components/IntroBlock';
import VehicleListingCard from '../../components/FeaturedVehicles/VehicleListingCard';

const CurrentCollection = ({ COLLECTION_DATA, VEHICLES }) => {
    console.log(VEHICLES);
    return (
        <StandardLayout>
            <IntroBlock introBlock={COLLECTION_DATA.introBlock} typeHandle={COLLECTION_DATA.introBlock[0].typeHandle}/>

            <div>
                { VEHICLES.map(vehicle => {
                    return <VehicleListingCard vehicle={vehicle} key={vehicle.id}/>;
                }) }
            </div>
        </StandardLayout>
    );
}

export default CurrentCollection;

export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
            query CurrentCollection {
                entry(section: "currentCollection") {
                    ... on currentCollection_currentCollection_Entry {
                        id
                        introBlock {
                        ... on introBlock_basic_BlockType {
                            id
                            typeHandle
                            bodyText
                            heading
                            buttons {
                            ... on buttons_BlockType {
                                id
                                buttonUrl
                                buttonText
                            }
                            }
                        }
                        ... on introBlock_textColumns_BlockType {
                            id
                            typeHandle
                            logo {
                            id
                            ... on heroImages_Asset {
                                id
                                url
                            }
                            }
                            heading
                            textBlocks {
                            ... on textBlocks_BlockType {
                                id
                                heading
                                bodyText
                                buttonText
                                buttonUrl
                            }
                            }
                        }
                        }
                    }
                }
                entries(section: "vehicles", collection: "current") {
                    ... on vehicles_vehicles_Entry {
                        id
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
            COLLECTION_DATA: data.entry,
            VEHICLES: data.entries
        }
    }
}
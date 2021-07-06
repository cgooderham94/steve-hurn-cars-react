import React from 'react';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

import StandardLayout from '../../components/StandardLayout';
import IntroBlock from '../../components/IntroBlock';
import FeaturedVehicles from '../../components/FeaturedVehicles';

const CurrentCollection = ({ COLLECTION_DATA, VEHICLES }) => {
    console.log(VEHICLES);
    return (
        <StandardLayout>
            <IntroBlock introBlock={COLLECTION_DATA.introBlock}/>

            <FeaturedVehicles featuredVehicles={VEHICLES}/>
        </StandardLayout>
    );
}

export default CurrentCollection;

export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
            query CurrentCollection {
                entry(section: "classicCollection") {
                    ... on classicCollection_classicCollection_Entry {
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
                entries(section: "vehicles", collection: "classic-collection", availability: true) {
                    ... on vehicles_vehicles_Entry {
                        id
                        availability
                        collection
                        make
                        mileage
                        model
                        power
                        price
                        title
                        topSpeed
                        torque
                        uri
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
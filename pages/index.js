import React from 'react';
import { gql } from '@apollo/client';
import client from '../apollo-client';

import StandardLayout from '../components/StandardLayout';
import HeroCarousel from '../components/HeroCarousel';
import IntroBlock from '../components/IntroBlock';
import FeaturedVehicles from '../components/FeaturedVehicles';

const Home = ({ HOME_DATA, VEHICLES }) => {
    return (
        <StandardLayout>
            <HeroCarousel slides={HOME_DATA.heroCarousel} />

            <IntroBlock introBlock={HOME_DATA.introBlock}></IntroBlock>

            <FeaturedVehicles featuredVehiclesBlock={HOME_DATA.featuredVehicles} featuredVehicles={VEHICLES}/>
        </StandardLayout>
    );
};

export default Home;

export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
            query GetHome {
                entry(section: "homepage") {
                    ... on homepage_homepage_Entry {
                        id
                        title
                        heroCarousel {
                            ... on heroCarousel_slide_BlockType {
                                id
                                overline
                                heading
                                body
                                image {
                                    ... on heroImages_Asset {
                                        id
                                        url
                                        title
                                        focalPoint
                                    }
                                }
                            }
                        }
                        introBlock {
                            ... on introBlock_standard_BlockType {
                                id
                                logoOverline
                                logo {
                                    ... on miscellaneous_Asset {
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
                                        buttonUrl
                                        buttonText
                                    }
                                }
                            }
                        }
                        featuredVehicles {
                            ... on featuredVehicles_standard_BlockType {
                                id
                                heading
                                linkText
                                linkUrl
                                body
                            }
                        }
                    }
                }
                entries(section: "vehicles") {
                    ... on vehicles_vehicles_Entry {
                        id
                        make(label: true)
                        model
                        mileage
                        price
                        power
                        title
                        topSpeed
                        torque
                        url
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
            HOME_DATA: data.entry,
            VEHICLES: data.entries
        }
    }
}
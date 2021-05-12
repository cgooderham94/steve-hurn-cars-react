import React from 'react';
import { useQuery, gql } from '@apollo/client';

import HeroCarousel from '../../components/HeroCarousel';
import IntroBlock from '../../components/IntroBlock';
import FeaturedVehicles from '../../components/FeaturedVehicles';

const HOME_DATA = gql`
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
}`;

const Home = (props) => {
    const { loading, error, data } = useQuery(HOME_DATA);

    // TODO: Make loading and error components
    if (loading) return <p>Loading!</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <React.Fragment>
            <HeroCarousel slides={data.entry.heroCarousel} />

            <IntroBlock introBlock={data.entry.introBlock}></IntroBlock>

            <FeaturedVehicles featuredVehiclesBlock={data.entry.featuredVehicles}/>
        </React.Fragment>
    );
};

export default Home;
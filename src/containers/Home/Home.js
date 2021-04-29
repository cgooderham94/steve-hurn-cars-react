import React from 'react';
import { useQuery, gql } from '@apollo/client';

import HeroCarousel from '../../components/HeroCarousel/HeroCarousel';

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
                        }
                    }
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
        </React.Fragment>
    );
};

export default Home;
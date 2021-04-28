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
            }
            }
        }
        }
    }
`;

const Home = (props) => {
    const { loading, error, data } = useQuery(HOME_DATA);

    if (loading) return <p>Loading!</p>;
    if (error) return <p>Error!</p>;

    return (
        <React.Fragment>
            <HeroCarousel slides={data.entry.heroCarousel} />
        </React.Fragment>
    );
};

export default Home;
import React from 'react';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

import StandardLayout from '../../components/StandardLayout';

const AboutUs = () => {
    <StandardLayout>

    </StandardLayout>
}

export default AboutUs;

export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
        `
    });

    return {
        props: {
            ABOUT_US_DATA: data.entry,
        //     VEHICLES: data.entries
        }
    }
}
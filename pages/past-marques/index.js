import React from 'react';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

import StandardLayout from '../../components/StandardLayout';

const PastMarques = ({ PAST_MARQUES_DATA, VEHICLES }) => {
    return (
        <StandardLayout>
    
        </StandardLayout>
    );
};

export default PastMarques;

export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
        `
    });

    return {
        props: {
            PAST_MARQUES_DATA: data.entry,
            // VEHICLES: data.entries
        }
    }
}
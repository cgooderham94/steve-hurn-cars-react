import React from 'react';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

import StandardLayout from '../../components/StandardLayout';

const VehicleDetail = () => {
    <StandardLayout>

    </StandardLayout>
}

export default VehicleDetail;

export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
        `
    });

    return {
        // props: {
        //     HOME_DATA: data.entry,
        //     VEHICLES: data.entries
        // }
    }
}
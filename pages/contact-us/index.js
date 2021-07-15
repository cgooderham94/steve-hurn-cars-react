import React from 'react';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

import StandardLayout from '../../components/Layouts/StandardLayout';
import HeroStandard from '../../components/HeroStandard';
import VehicleEnquiry from '../../components/Forms/VehicleEnquiry';

const ContactUs = ({ CONTACT_DATA }) => {
    return (
        <StandardLayout>
            <HeroStandard content={CONTACT_DATA.heroStandard} />

            <div className="bg-cream">
                <div className="container px-4 py-20 mx-auto">
                    <h2 className="font-bold text-green text-lg">Can we help you?</h2>

                    <p className="mt-4">If you have any questions about how we can help, please don't hesitate to contact us via the form below.</p>

                    <VehicleEnquiry classes="mt-8"/>
                </div>
            </div>
        </StandardLayout>
    );
};

export default ContactUs;

export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
            query MyQuery {
                entry(section: "contactUs") {
                    id
                    ... on contactUs_contactUs_Entry {
                        id
                        heroStandard {
                            ... on heroStandard_standard_BlockType {
                                id
                                heading
                                bodyText
                                image {
                                ... on heroImages_Asset {
                                    id
                                    url
                                    width
                                    height
                                }
                                }
                            }
                        }
                    }
                }
            }
        `
    });

    return {
        props: {
            CONTACT_DATA: data.entry,
        }
    }
}
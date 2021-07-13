import React from 'react';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

import StandardLayout from '../../components/Layouts/StandardLayout';
import HeroStandard from '../../components/HeroStandard';
import IntroBlock from '../../components/IntroBlock';
import SplitBlocks from '../../components/SplitBlocks';

const AboutUs = ({ ABOUT_US_DATA }) => {
    return (
        <StandardLayout>
            <HeroStandard content={ABOUT_US_DATA.heroStandard} />

            <IntroBlock introBlock={ABOUT_US_DATA.introBlock} />

            <SplitBlocks blocks={ABOUT_US_DATA.splitBlocks} />
        </StandardLayout>
    );
}

export default AboutUs;

export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
            query MyQuery {
                entry(section: "aboutUs") {
                    id
                    ... on aboutUs_aboutUs_Entry {
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
                        introBlock {
                            ... on introBlock_basic_BlockType {
                                id
                                bodyText
                                buttons {
                                    ... on buttons_BlockType {
                                        id
                                        buttonText
                                        buttonUrl
                                    }
                                }
                                heading
                                typeHandle
                            }
                            ... on introBlock_textColumns_BlockType {
                                id
                                textBlocks {
                                    ... on textBlocks_BlockType {
                                        id
                                        heading
                                        buttonText
                                        buttonUrl
                                        bodyText
                                    }
                                }
                                typeHandle
                            }
                        }
                        splitBlocks {
                            ... on splitBlocks_standard_BlockType {
                                id
                                buttonText
                                bodyText
                                buttonUrl
                                heading
                                image {
                                    ... on miscellaneous_Asset {
                                        id
                                        url
                                        height
                                        width
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
            ABOUT_US_DATA: data.entry,
        }
    }
}
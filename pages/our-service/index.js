import React from 'react';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

import StandardLayout from '../../components/Layouts/StandardLayout';
import HeroStandard from '../../components/HeroStandard';
import IntroBlock from '../../components/IntroBlock';
import SplitBlocks from '../../components/SplitBlocks/index.tsx';

const OurService = ({ OUR_SERVICE_DATA }) => {
    return (
        <StandardLayout>
            <HeroStandard content={OUR_SERVICE_DATA.heroStandard} />

            <IntroBlock introBlock={OUR_SERVICE_DATA.introBlock} />

            <SplitBlocks blocks={OUR_SERVICE_DATA.splitBlocks} />
        </StandardLayout>
    );
}

export default OurService;

export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
            query MyQuery {
                entry(section: "ourService") {
                    id
                    ... on ourService_ourService_Entry {
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
                                image {
                                    ... on miscellaneous_Asset {
                                        id
                                        url
                                        height
                                        width
                                    }
                                }
                                buttonText
                                bodyText
                                buttonUrl
                            }
                        }
                    }
                }
            }
        `
    });

    return {
        props: {
            OUR_SERVICE_DATA: data.entry
        }
    }
}
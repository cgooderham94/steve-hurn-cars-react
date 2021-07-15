import { gql } from '@apollo/client';
import client from '../apollo-client';

import StandardLayout from '../components/Layouts/StandardLayout';
import HeroStandard from '../components/HeroStandard';
import IntroBlock from '../components/IntroBlock';
import SplitBlocks from '../components/SplitBlocks';

const GeneralEntry = ({ GENERAL_DATA }) => {
    console.log(GENERAL_DATA)

    return (
        <StandardLayout>
            <HeroStandard content={GENERAL_DATA.heroStandard} />

            <IntroBlock introBlock={GENERAL_DATA.introBlock} />

            <SplitBlocks blocks={GENERAL_DATA.splitBlocks} />
        </StandardLayout>
    );
}

export default GeneralEntry;

export async function getServerSideProps(context) {
    const { data } = await client.query({
        query: gql`
            query GetGeneralEntry($slug: [String]) {
                entry(section: "general", slug: $slug) {
                    id
                    ... on general_general_Entry {
                        id
                        bodyText
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
        `,
        variables: {
            slug: context.params.slug
        }
    });

    return {
        props: {
            GENERAL_DATA: data.entry
        }
    }
}
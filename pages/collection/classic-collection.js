import React from 'react';
import { gql } from '@apollo/client';
import client from '../../apollo-client';

import StandardLayout from '../../components/StandardLayout';

const ClassicCollection = () => {
    return (
        <StandardLayout>
    
        </StandardLayout>
    );
}

export default ClassicCollection;

export async function getServerSideProps() {
    const { data } = await client.query({
        query: gql`
            query ClassicCollection {
                entry(section: "classicCollection") {
                ... on classicCollection_classicCollection_Entry {
                    id
                    introBlock {
                    ... on introBlock_basic_BlockType {
                        id
                        bodyText
                        heading
                        buttons {
                        ... on buttons_BlockType {
                            id
                            buttonUrl
                            buttonText
                        }
                        }
                    }
                    ... on introBlock_textColumns_BlockType {
                        id
                        logo {
                        id
                        ... on heroImages_Asset {
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
                            buttonText
                            buttonUrl
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
            COLLECTION_DATA: data.entry,
            // VEHICLES: data.entries
        }
    }
}
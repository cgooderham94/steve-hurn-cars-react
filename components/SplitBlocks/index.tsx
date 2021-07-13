
import React, { FC } from 'react';

import SplitBlock from './SplitBlock';

interface ImageProps {
    url: string,
    width?: number,
    height?: number
}

interface SplitBlockProps {
    id: number,
    heading: string,
    image: ImageProps[],
    bodyText?: string,
    buttonText?: string,
    buttonUrl?: string
}

interface Props {
    blocks: SplitBlockProps[]
}

const SplitBlocks:FC<Props> = ({ blocks }) => {
    let content = null;

    if (blocks?.length) {
        content = blocks.map((block) => {
            return <SplitBlock splitBlock={block} key={block.id} />;
        });
    }

    return (
        <div className="split-blocks">
            { content }
        </div>
    );
}

export default SplitBlocks;
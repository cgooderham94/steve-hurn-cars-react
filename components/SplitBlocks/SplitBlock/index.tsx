import React, { FC } from 'react';

import Image from 'next/image';
import Container from '../../UI/Container';
import Button from '../../UI/Button';

interface ImageProps {
    url: string,
    width?: number,
    height?: number
}

interface SplitBlockProps {
    heading: string,
    image: ImageProps[],
    bodyText?: string,
    buttonText?: string,
    buttonUrl?: string
}

interface Props {
    splitBlock: SplitBlockProps
}

const SplitBlock:FC<Props> = ({ splitBlock }) => {
    let imageContent = null;

    if (splitBlock.image.length) {
        let image = splitBlock.image[0];

        imageContent = (
            <div className="block__img-wrapper lg:w-2/5">
                <Image src={image.url} width="730" height="485" />
            </div>
        )
    }

    return (
        <div className="split-blocks__block">
            <Container>
                <div className="block__content lg:w-3/5 p-4 lg:px-8">
                    { splitBlock.heading ? <h2 className="text-2xl text-green font-bold">{ splitBlock.heading }</h2> : null }

                    { splitBlock.bodyText ? <div className="mt-4" 
                                            dangerouslySetInnerHTML={{ __html: splitBlock.bodyText }}></div> : null }

                    { splitBlock.buttonText && splitBlock.buttonUrl ? 
                        <Button link={splitBlock.buttonUrl} classes={['bg-white', 'mt-6']}>{ splitBlock.buttonText }</Button> 
                        : 
                        null 
                    }
                </div>

                { imageContent ? imageContent : null }
            </Container>                    
        </div>
    )
};

export default SplitBlock;
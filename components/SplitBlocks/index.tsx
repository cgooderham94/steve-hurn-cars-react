import Image from 'next/image';
import Container from '../UI/Container';
import Button from '../UI/Button';

interface ImageProps {
    url: string,
    width?: number,
    height?: number
}

interface SplitBlock {
    heading: string,
    image: ImageProps[],
    bodyText?: string,
    buttonText?: string,
    buttonUrl?: string
}

const SplitBlocks = ({ blocks }) => {
    let content = null;

    if (blocks.length) {
        content = blocks.map((block: SplitBlock) => {
            let imageContent = null;

            if (block.image.length) {
                let image = block.image[0];

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
                            { block.heading ? <h2 className="text-2xl font-bold">{block.heading}</h2> : null }

                            { block.bodyText ? <div className="mt-4" 
                                                    dangerouslySetInnerHTML={{ __html: block.bodyText }}></div> : null }

                            { block.buttonText && block.buttonUrl ? 
                                <Button link={block.buttonUrl} classes={['bg-white', 'mt-6']}>{ block.buttonText }</Button> 
                                : 
                                null 
                            }
                        </div>

                        { imageContent ? imageContent : null }
                    </Container>                    
                </div>
            )
        });
    }

    return (
        <div className="split-blocks">
            { content }
        </div>
    );
}

export default SplitBlocks;
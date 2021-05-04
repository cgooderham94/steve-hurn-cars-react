import React from 'react';

const IntroBlock = (props) => {
    const { introBlock } = props;
    let introBlockEl = <p>No content</p>;

    if (introBlock.length) {
        const { heading, logoOverline, logo, textBlocks } = introBlock[0];
        let textBlocksEl = null;
        
        console.log(logo);

        if (textBlocks.length) {
            textBlocksEl = (
                <div className="intro-block__text-blocks grid grid-flow-col auto-cols-auto mt-10">
                    { textBlocks.map(block => {
                        return (
                            <div className="text-block" key={block.id}>
                                <h3 className="font-bold text-lg">{ block.heading }</h3>

                                { block.bodyText }
                                
                                <div dangerouslySetInnerHTML={{__html: block.button}}>
                                </div>
                            </div>
                        );
                    }) }
                </div>
            );
        }

        introBlockEl = (
            <section className="intro-block py-20">
                <div className="container mx-auto">    
                    <div className="heading text-center">
                        <h2>{ heading }</h2>
                        <span className="text-xs uppercase tracking-widest">{ logoOverline }</span>
                        <span className="accent-small"></span>
                        { logo && logo[0] && <img src={logo[0].url} alt={logo[0].title}/> }
                    </div>
        
                    { textBlocksEl }
                </div>
            </section>
        );
    }


    return introBlockEl;
};

export default IntroBlock;
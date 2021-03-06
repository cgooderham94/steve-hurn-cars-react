import Button from '../../UI/Button';

const TextColumn = ({ introBlock }) => {
    const { heading, logoOverline, logo, textBlocks } = introBlock;
    let introBlockEl;
    let textBlocksEl = null;

    // Text/Info Columns
    if (textBlocks?.length) {
        textBlocksEl = (
            <div className="intro-block__text-blocks grid grid-flow-row md:grid-flow-col md:auto-cols-auto md:gap-x-16">
                { textBlocks.map(block => {
                    let { id, heading, bodyText, buttonUrl, buttonText } = block;

                    return (
                        <div className="flex flex-col text-block mt-10" key={id}>
                            <h3 className="text-green font-bold text-lg">{ heading }</h3>

                            <p className="mt-4">{ bodyText }</p>
                            
                            <div className="mt-auto">
                                <Button link={ buttonUrl } classes={['bg-white', 'mt-4']}>{ buttonText }</Button>
                            </div>                            
                        </div>
                    );
                }) }
            </div>
        );
    }

    // Outer Block Content
    introBlockEl = (
        <section className="intro-block bg-cream px-4 py-20">
            <div className="container mx-auto">    
                <div className="heading text-center">
                    <h2 className="text-green tracking-wide">{ heading }</h2>

                    <div className="mt-6 mb-2">
                        <span className="text-xs uppercase tracking-widest">{ logoOverline }</span>
                        <span className="accent-small block mx-auto my-2 bg-black"></span>

                        { logo && logo[0] && <img src={logo[0].url} className="mx-auto" alt={logo[0].title}/> }
                    </div>
                </div>

                { textBlocksEl }
            </div>
        </section>
    );

    return introBlockEl;
}

export default TextColumn;
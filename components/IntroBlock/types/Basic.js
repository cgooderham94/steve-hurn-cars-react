import Button from '../../UI/Button';

const Basic = ({ introBlock }) => {
    const { heading, bodyText, buttons } = introBlock[0];
    let introBlockEl;

    // Text/Info Columns
    if (buttons?.length) {
        buttons = (
            <div className="intro-block__buttons grid grid-flow-row md:grid-flow-col md:auto-cols-auto md:gap-x-16">
                { buttons.map(block => {
                    let { buttonUrl, buttonText } = block;

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
                        {bodyText}
                    </div>
                </div>

                { buttons }
            </div>
        </section>
    );

    return introBlockEl;
}

export default Basic;
import Button from '../../UI/Button';

const Basic = ({ introBlock }) => {
    const { id, heading, bodyText, buttons } = introBlock;
    let introBlockEl;
    let introButtons;

    console.log(heading);

    // Text/Info Columns
    if (buttons?.length) {
        introButtons = (
            <div className="intro-block__buttons flex flex-col md:flex-row justify-center md:gap-10">
                { buttons.map(block => {
                    let { buttonUrl, buttonText } = block;

                    return (
                        <div className="flex flex-col mt-6 md:mt-4" key={id}>                            
                            <Button link={ buttonUrl } classes={['bg-white', 'md:mt-4', 'text-center']}>{ buttonText }</Button>
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

                    <div className="mt-6 mb-2 mx-auto md:w-3/4 lg:w-1/2">
                        { bodyText }
                    </div>
                </div>

                { introButtons }
            </div>
        </section>
    );

    return introBlockEl;
}

export default Basic;
import Image from 'next/image'

const HeroStandard = ({ content }) => {
    let heroContent = content.length ? content[0] : null;
    let heroEl = null

    if (heroContent) {
        let { image, heading, bodyText } = heroContent;
        image = image[0];

        heroEl = (
            <div className="hero--standard">
                <Image
                    src={image.url}
                    alt={image.title}
                    objectFit="cover"
                    layout="fill" />

                <div className="hero__content text-center text-white">
                    { heading ? <h1 className="font-bold filter drop-shadow-lg">{ heading }</h1> : null }

                    { bodyText ? (<div className="hero__body-text mt-8 text-lg filter drop-shadow-md tracking-wide">{ bodyText }</div>) : null }
                </div>
            </div>
        )
    }
    
    return heroEl;
}

export default HeroStandard;
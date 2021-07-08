import Image from 'next/image'

const HeroStandard = (props) => {
    let { image, heading, bodyText } = props.content;
    image = image[0];
    
    return (
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
    );
}

export default HeroStandard;
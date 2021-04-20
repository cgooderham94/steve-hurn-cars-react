import LogoAsset from './logo.png';

const Logo = props => {
    const altText = "Steve Hurn Cars logo";
    let logoImg = <img src={LogoAsset} alt={ altText } width="170" height="40"/>;
    let logo = logoImg;

    if (props.isLink) {
        logo = <a href="/" className="inline-block">{ logoImg }</a>
    }

    return logo;
}

export default Logo;
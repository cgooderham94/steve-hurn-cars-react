import { Link } from 'react-router-dom';
import LogoAsset from './logo.png';

const Logo = props => {
    const altText = "Steve Hurn Cars logo";
    let logoImg = <img src={LogoAsset} alt={ altText } width="170" height="40"/>;
    let logo = logoImg;

    if (props.isLink) {
        logo = <Link to="/" className="inline-block">{ logoImg }</Link>
    }

    return logo;
}

export default Logo;
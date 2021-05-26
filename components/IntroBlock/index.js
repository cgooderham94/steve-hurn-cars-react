import BasicType from './types/Basic';
import TextColumnType from './types/TextColumn';

const IntroBlock = ({ introBlock, typeHandle }) => {
    let blockTypeEl;

    if (typeHandle == 'textColumns') {
        blockTypeEl = <TextColumnType introBlock={introBlock}/>;
    } else if (typeHandle == 'basic') {
        blockTypeEl = <BasicType introBlock={introBlock}/>;
    }

    return blockTypeEl;
};

export default IntroBlock;